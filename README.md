# QualifiedLeadsX — Railway deployment

WordPress site migrated from SiteGround for [Railway](https://railway.app).

## Railway setup

1. Create a new project on Railway and connect this GitHub repo:  
   https://github.com/devsynxoffical/qualifyleadsx.com

2. Add a **MySQL** service to the same project.

3. Deploy this repo as a service (Dockerfile is detected via `railway.toml`).

4. On the WordPress service, **link MySQL variables** (or set manually):

| Variable | Source |
|----------|--------|
| `MYSQLHOST` | MySQL service |
| `MYSQLPORT` | MySQL service |
| `MYSQLUSER` | MySQL service |
| `MYSQLPASSWORD` | MySQL service |
| `MYSQLDATABASE` | MySQL service |
| `WP_HOME` | Your Railway URL, e.g. `https://your-app.up.railway.app` |
| `WP_SITEURL` | Same as `WP_HOME` |

Optional: set fresh `AUTH_KEY`, `SECURE_AUTH_KEY`, etc. from https://api.wordpress.org/secret-key/1.1/salt/

5. **Import the database** (file: `dbtzar7ap8dnym.sql`):
   - Use Railway MySQL query UI / a one-off client, **or**
   - From your machine (with Railway MySQL public URL / TCP proxy):

```bash
mysql -h <MYSQLHOST> -P <MYSQLPORT> -u <MYSQLUSER> -p <MYSQLDATABASE> < dbtzar7ap8dnym.sql
```

Table prefix is `vlb_`.

6. After first deploy works, attach your domain `www.qualifiedleadsx.com` in Railway and update:

- `WP_HOME` / `WP_SITEURL` to `https://www.qualifiedleadsx.com`
- Or update `siteurl` / `home` in `vlb_options` and point DNS to Railway

7. Recommended: mount a **volume** at `/var/www/html/wp-content/uploads` so media survives redeploys.

## Notes

- SiteGround plugins (`sg-cachepress`, `sg-security`, etc.) are auto-disabled via `wp-content/mu-plugins/disable-siteground-plugins.php`.
- SiteGround `object-cache.php` drop-in is removed in the Docker build.
- Apache listens on Railway’s `$PORT`.
