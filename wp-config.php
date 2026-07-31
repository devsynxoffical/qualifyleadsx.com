<?php
/**
 * WordPress configuration for Railway / production.
 * Database credentials come from environment variables.
 */

define( 'WP_CACHE', false );

// ** Database settings ** //
define( 'DB_NAME', getenv( 'MYSQLDATABASE' ) ?: ( getenv( 'MYSQL_DATABASE' ) ?: ( getenv( 'WORDPRESS_DB_NAME' ) ?: 'railway' ) ) );
define( 'DB_USER', getenv( 'MYSQLUSER' ) ?: ( getenv( 'MYSQL_USER' ) ?: ( getenv( 'WORDPRESS_DB_USER' ) ?: 'root' ) ) );
define( 'DB_PASSWORD', getenv( 'MYSQLPASSWORD' ) ?: ( getenv( 'MYSQL_PASSWORD' ) ?: ( getenv( 'WORDPRESS_DB_PASSWORD' ) ?: 'aBtGfzsJlczlvNTunBYeVWwClAwWuyov' ) ) );

$db_host = getenv( 'MYSQLHOST' ) ?: ( getenv( 'MYSQL_HOST' ) ?: ( getenv( 'WORDPRESS_DB_HOST' ) ?: 'sakura.proxy.railway.net' ) );
$db_port = getenv( 'MYSQLPORT' ) ?: ( getenv( 'MYSQL_PORT' ) ?: '55901' );
define( 'DB_HOST', $db_host . ':' . $db_port );

define( 'DB_CHARSET', 'utf8mb4' );
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 */
define( 'AUTH_KEY',          getenv( 'AUTH_KEY' ) ?: ':*gbFt%5T2s 7r,C>*PXM^1>:FPWBIGs=+a>jFdS1%;>&xb~jv(W<6x12pCx>._v' );
define( 'SECURE_AUTH_KEY',   getenv( 'SECURE_AUTH_KEY' ) ?: '1S S(HFMw%L?fr L`hkrpvti8H9;[NYov_N.b_h?SF&Kl2D&MA0ls#F,*0;l^nU[' );
define( 'LOGGED_IN_KEY',     getenv( 'LOGGED_IN_KEY' ) ?: 'lM4+XF{Xf>Gk--742N!E)j.vid0z5CVe?u{2JZKXoGhZJ=#ZALaV|,`uy8eN%)H2' );
define( 'NONCE_KEY',         getenv( 'NONCE_KEY' ) ?: 'cFX XD(,mUtxQjO$:$DlUsuM/dGvsU*9&Hq`lv>dFz5e:y<W87w BVAFXQ?KWx' );
define( 'AUTH_SALT',         getenv( 'AUTH_SALT' ) ?: 'X<*h+Y<i)`!j5A6<=aPKKX4`b%.?#1`t2|r7>aupvrG;*E8`-KVjVe@vQA-CUFP-' );
define( 'SECURE_AUTH_SALT',  getenv( 'SECURE_AUTH_SALT' ) ?: 'n%xDXB8,mmk:W^dW(R7-jR*F}#1$b>s#[O<kGw-Vx-Wh4IZ5MnuPJ_)q8Rh,x|Z-' );
define( 'LOGGED_IN_SALT',    getenv( 'LOGGED_IN_SALT' ) ?: '4cQ5d)WO, dwsp6tx&[GE_|C~P])&1i;)Mz !2WPv%(lfIMa@ZlKbg4/e24t,Bg,' );
define( 'NONCE_SALT',        getenv( 'NONCE_SALT' ) ?: 'c+ ;pL@Y@TKT_QsUsGvV<bijd +2ieYC@l h3sKCE^;}xHH^<FT:{#[wnSy1ZtdT' );
define( 'WP_CACHE_KEY_SALT', getenv( 'WP_CACHE_KEY_SALT' ) ?: 'HOyO0`[5qdiW6f?2[U#j!99A6}+vo/[!pe?7#< o?L+:*G~Q`3<g/qP#WJ]#PAJ;' );
/**#@-*/

$table_prefix = getenv( 'WORDPRESS_TABLE_PREFIX' ) ?: 'vlb_';

// Trust Railway / reverse-proxy HTTPS.
if (
	( isset( $_SERVER['HTTP_X_FORWARDED_PROTO'] ) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https' )
	|| ( isset( $_SERVER['HTTP_X_FORWARDED_SSL'] ) && $_SERVER['HTTP_X_FORWARDED_SSL'] === 'on' )
) {
	$_SERVER['HTTPS'] = 'on';
}

/**
 * Dynamic site URL configuration for Railway deployment.
 */
if ( getenv( 'WP_HOME' ) ) {
	define( 'WP_HOME', getenv( 'WP_HOME' ) );
} else if ( isset( $_SERVER['HTTP_HOST'] ) ) {
	$scheme = ( isset( $_SERVER['HTTPS'] ) && $_SERVER['HTTPS'] === 'on' ) ? 'https://' : 'http://';
	define( 'WP_HOME', $scheme . $_SERVER['HTTP_HOST'] );
}

if ( getenv( 'WP_SITEURL' ) ) {
	define( 'WP_SITEURL', getenv( 'WP_SITEURL' ) );
} else if ( defined( 'WP_HOME' ) ) {
	define( 'WP_SITEURL', WP_HOME );
}

define( 'FS_METHOD', 'direct' );

// Display errors for debugging 500 issues
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', true );
@ini_set( 'display_errors', '1' );

/* That's all, stop editing! Happy publishing. */

if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

require_once ABSPATH . 'wp-settings.php';
