<?php
/**
 * Plugin Name: Disable SiteGround Plugins on Railway
 * Description: Deactivates SiteGround-only plugins that do not work outside SiteGround.
 */

add_filter( 'option_active_plugins', function ( $plugins ) {
	if ( ! is_array( $plugins ) ) {
		return $plugins;
	}

	$blocked = array(
		'sg-cachepress/sg-cachepress.php',
		'sg-security/sg-security.php',
		'sg-ai-studio/sg-ai-studio.php',
		'wordpress-starter/siteground-wizard.php',
	);

	return array_values( array_diff( $plugins, $blocked ) );
} );
