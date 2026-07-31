const fs = require('fs');
const readline = require('readline');
const path = require('path');
const mysql = require('mysql2/promise');

async function migrateDatabase() {
    let host = process.env.MYSQLHOST || process.env.MYSQL_HOST || process.env.DB_HOST || process.env.WORDPRESS_DB_HOST;
    let port = parseInt(process.env.MYSQLPORT || process.env.MYSQL_PORT || process.env.DB_PORT || process.env.WORDPRESS_DB_PORT || '3306', 10);
    let user = process.env.MYSQLUSER || process.env.MYSQL_USER || process.env.DB_USER || process.env.WORDPRESS_DB_USER || 'root';
    let password = process.env.MYSQLPASSWORD || process.env.MYSQL_PASSWORD || process.env.DB_PASSWORD || process.env.WORDPRESS_DB_PASSWORD || 'aBtGfzsJlczlvNTunBYeVWwClAwWuyov';
    let database = process.env.MYSQLDATABASE || process.env.MYSQL_DATABASE || process.env.DB_NAME || process.env.WORDPRESS_DB_NAME || 'railway';

    const connectionUrl = process.env.MYSQL_URL || process.env.DATABASE_URL || process.env.MYSQL_PRIVATE_URL;
    if (connectionUrl) {
        try {
            const parsed = new URL(connectionUrl);
            if (parsed.hostname) host = parsed.hostname;
            if (parsed.port) port = parseInt(parsed.port, 10);
            if (parsed.username) user = parsed.username;
            if (parsed.password) password = parsed.password;
            if (parsed.pathname && parsed.pathname.length > 1) database = parsed.pathname.substring(1);
        } catch (e) {
            console.warn('Could not parse MYSQL_URL/DATABASE_URL, falling back to individual env variables.');
        }
    }

    if (!host) {
        host = 'sakura.proxy.railway.net';
        port = 55901;
    }

    const targetUrl = process.env.TARGET_URL || process.env.WP_HOME || 'https://charming-energy-production.up.railway.app';
    const sqlFilePath = process.env.SQL_FILE || path.join(__dirname, '..', 'dbtzar7ap8dnym.sql');

    console.log(`==================================================`);
    console.log(`Starting Database Migration Check`);
    console.log(`Host: ${host}:${port}`);
    console.log(`User: ${user}`);
    console.log(`Database: ${database}`);
    console.log(`SQL Dump File: ${sqlFilePath}`);
    console.log(`Target Site URL: ${targetUrl}`);
    console.log(`==================================================`);

    if (!fs.existsSync(sqlFilePath)) {
        console.error(`ERROR: SQL file not found at: ${sqlFilePath}`);
        process.exit(1);
    }

    let connection;
    try {
        connection = await mysql.createConnection({
            host,
            port,
            user,
            password,
            database,
            multipleStatements: true,
            connectTimeout: 30000
        });
        console.log('Successfully connected to MySQL database.');

        const tablePrefix = process.env.WORDPRESS_TABLE_PREFIX || 'vlb_';
        const optionsTable = `${tablePrefix}options`;
        const safeActivePlugins = 'a:3:{i:0;s:23:"elementor/elementor.php";i:1;s:24:"header-footer/plugin.php";i:2;s:29:"pro-elements/pro-elements.php";}';

        // Check if database is already populated
        const [tables] = await connection.query(`SHOW TABLES LIKE '${optionsTable}';`);
        if (tables.length > 0 && process.env.FORCE_MIGRATE !== 'true') {
            console.log(`Table '${optionsTable}' exists. Updating siteurl, home, and active_plugins...`);
            await connection.query(`UPDATE \`${optionsTable}\` SET option_value = ? WHERE option_name IN ('siteurl', 'home');`, [targetUrl]);
            await connection.query(`UPDATE \`${optionsTable}\` SET option_value = ? WHERE option_name = 'active_plugins';`, [safeActivePlugins]);
            console.log(`Siteurl/home options updated to ${targetUrl}. SiteGround plugins disabled.`);
            await connection.end();
            return;
        }

        console.log('Disabling foreign key and unique checks...');
        await connection.query('SET FOREIGN_KEY_CHECKS = 0;');
        await connection.query('SET UNIQUE_CHECKS = 0;');

        console.log('Streaming and executing SQL dump...');
        const fileStream = fs.createReadStream(sqlFilePath, { encoding: 'utf8' });
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        let currentQuery = '';
        let queryCount = 0;

        for await (const line of rl) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('--') || trimmed.startsWith('/*') || trimmed.startsWith('#')) {
                continue;
            }

            currentQuery += line + '\n';

            if (trimmed.endsWith(';')) {
                try {
                    await connection.query(currentQuery);
                    queryCount++;
                    if (queryCount % 200 === 0) {
                        console.log(`Executed ${queryCount} queries...`);
                    }
                } catch (err) {
                    console.warn(`Query execution warning (${err.code}): ${err.message.substring(0, 150)}`);
                }
                currentQuery = '';
            }
        }

        if (currentQuery.trim()) {
            try {
                await connection.query(currentQuery);
                queryCount++;
            } catch (err) {
                console.warn(`Final query execution warning: ${err.message}`);
            }
        }

        console.log(`SQL dump execution completed! Total queries executed: ${queryCount}`);

        console.log('Re-enabling foreign key and unique checks...');
        await connection.query('SET FOREIGN_KEY_CHECKS = 1;');
        await connection.query('SET UNIQUE_CHECKS = 1;');

        console.log(`Updating WordPress siteurl, home, and active_plugins in ${optionsTable}...`);
        try {
            await connection.query(`UPDATE \`${optionsTable}\` SET option_value = ? WHERE option_name IN ('siteurl', 'home');`, [targetUrl]);
            await connection.query(`UPDATE \`${optionsTable}\` SET option_value = ? WHERE option_name = 'active_plugins';`, [safeActivePlugins]);
            console.log(`Successfully updated ${optionsTable} options.`);
        } catch (err) {
            console.error(`Failed to update ${optionsTable} table: ${err.message}`);
        }

        console.log('Database migration finished successfully!');
    } catch (error) {
        console.error('Fatal Database Migration Error:', error);
        process.exit(1);
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

migrateDatabase();
