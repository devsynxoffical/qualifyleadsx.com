#!/bin/bash
set -e

PORT="${PORT:-80}"

# Railway injects $PORT; Apache must listen on it.
sed -i "s/Listen 80/Listen ${PORT}/" /etc/apache2/ports.conf
sed -i "s/:80/:${PORT}/g" /etc/apache2/sites-available/000-default.conf

# Ensure uploads is writable (volume mount friendly)
mkdir -p /var/www/html/wp-content/uploads
chown -R www-data:www-data /var/www/html/wp-content/uploads || true

exec apache2-foreground
