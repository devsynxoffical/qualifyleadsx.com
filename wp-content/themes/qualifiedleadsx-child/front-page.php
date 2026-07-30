<?php
/**
 * Front page template — React redesign mount point.
 *
 * @package QualifiedLeadsX_Child
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>
<body <?php body_class( 'qlx-redesign-page' ); ?>>
<?php wp_body_open(); ?>
<div id="qlx-root" role="main"></div>
<?php wp_footer(); ?>
</body>
</html>
