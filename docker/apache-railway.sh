#!/bin/bash
set -e

PORT="${PORT:-80}"

# ── Fix: Ensure only mpm_prefork is active (required for mod_php) ──
# Disable conflicting MPMs first, then enable only prefork
a2dismod mpm_event  || true
a2dismod mpm_worker || true
a2enmod  mpm_prefork

# ── Railway port binding ──
# Railway injects $PORT; Apache must listen on it.
sed -i "s/Listen 80/Listen ${PORT}/" /etc/apache2/ports.conf
sed -i "s/:80/:${PORT}/g" /etc/apache2/sites-available/000-default.conf

# ── Ensure mod_rewrite is enabled (required for WordPress permalinks) ──
a2enmod rewrite || true

# ── Ensure uploads directory is writable (volume mount friendly) ──
mkdir -p /var/www/html/wp-content/uploads
chown -R www-data:www-data /var/www/html/wp-content/uploads || true

exec apache2-foreground
