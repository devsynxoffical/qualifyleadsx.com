FROM wordpress:php8.2-apache

# PHP extensions / limits suited for WordPress + Elementor
RUN docker-php-ext-install mysqli \
	&& { \
		echo 'upload_max_filesize = 64M'; \
		echo 'post_max_size = 64M'; \
		echo 'memory_limit = 256M'; \
		echo 'max_execution_time = 300'; \
		echo 'max_input_vars = 3000'; \
	} > /usr/local/etc/php/conf.d/uploads.ini

WORKDIR /var/www/html

# Full WordPress site (core + wp-content from SiteGround)
COPY --chown=www-data:www-data . /var/www/html/

# Remove SiteGround-only drop-ins that break outside SG
RUN rm -f /var/www/html/wp-content/object-cache.php \
	&& rm -f /var/www/html/wp-content/sgo-config.php \
	&& rm -f /var/www/html/php_errorlog \
	&& mkdir -p /var/www/html/wp-content/mu-plugins \
	&& chown -R www-data:www-data /var/www/html/wp-content

COPY docker/apache-railway.sh /usr/local/bin/apache-railway.sh
RUN chmod +x /usr/local/bin/apache-railway.sh

EXPOSE 80

CMD ["apache-railway.sh"]
