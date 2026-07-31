const fs = require('fs');
const readline = require('readline');
const path = require('path');
const mysql = require('mysql2/promise');

async function migrateDatabase() {
    const host = process.env.MYSQLHOST || process.env.MYSQL_HOST || process.env.DB_HOST || 'sakura.proxy.railway.net';
    const port = parseInt(process.env.MYSQLPORT || process.env.MYSQL_PORT || process.env.DB_PORT || '55901', 10);
    const user = process.env.MYSQLUSER || process.env.MYSQL_USER || process.env.DB_USER || 'root';
    const password = process.env.MYSQLPASSWORD || process.env.MYSQL_PASSWORD || process.env.DB_PASSWORD || 'aBtGfzsJlczlvNTunBYeVWwClAwWuyov';
    const database = process.env.MYSQLDATABASE || process.env.MYSQL_DATABASE || process.env.DB_NAME || 'railway';
    
    const targetUrl = process.env.TARGET_URL || process.env.WP_HOME || 'https://charming-energy-production.up.railway.app';
    const sqlFilePath = process.env.SQL_FILE || path.join(__dirname, '..', 'dbtzar7ap8dnym.sql');

    console.log(`==================================================`);
    console.log(`Starting Database Migration`);
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
            // Skip comments and empty lines
            if (!trimmed || trimmed.startsWith('--') || trimmed.startsWith('/*') || trimmed.startsWith('#')) {
                continue;
            }

            currentQuery += line + '\n';

            // Check if line ends with semicolon (end of statement)
            if (trimmed.endsWith(';')) {
                try {
                    await connection.query(currentQuery);
                    queryCount++;
                    if (queryCount % 100 === 0) {
                        console.log(`Processed ${queryCount} queries...`);
                    }
                } catch (err) {
                    console.warn(`Query execution warning (${err.code}): ${err.message.substring(0, 150)}`);
                }
                currentQuery = '';
            }
        }

        // Execute any remaining query
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

        console.log(`Updating WordPress siteurl and home options to: ${targetUrl}`);
        const tablePrefix = process.env.WORDPRESS_TABLE_PREFIX || 'vlb_';
        const optionsTable = `${tablePrefix}options`;

        try {
            await connection.query(`UPDATE \`${optionsTable}\` SET option_value = ? WHERE option_name IN ('siteurl', 'home')`, [targetUrl]);
            console.log(`Successfully updated ${optionsTable} siteurl and home options.`);
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
