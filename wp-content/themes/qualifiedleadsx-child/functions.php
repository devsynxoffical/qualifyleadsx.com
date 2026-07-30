<?php
/**
 * QualifiedLeadsX Child Theme functions.
 *
 * @package QualifiedLeadsX_Child
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'QLX_CHILD_VERSION', '1.0.0' );
define( 'QLX_CHILD_DIR', get_stylesheet_directory() );
define( 'QLX_CHILD_URI', get_stylesheet_directory_uri() );

/**
 * Enqueue child theme stylesheet and React homepage bundle.
 */
function qlx_child_enqueue_assets() {
	wp_enqueue_style(
		'qualifiedleadsx-child',
		get_stylesheet_uri(),
		array(),
		QLX_CHILD_VERSION
	);

	if ( ! is_front_page() ) {
		return;
	}

	$dist_dir  = QLX_CHILD_DIR . '/assets/dist';
	$dist_uri  = QLX_CHILD_URI . '/assets/dist';
	$css_file  = $dist_dir . '/homepage.css';
	$js_file   = $dist_dir . '/homepage.js';

	if ( file_exists( $css_file ) ) {
		wp_enqueue_style(
			'qlx-homepage',
			$dist_uri . '/homepage.css',
			array(),
			(string) filemtime( $css_file )
		);
	}

	if ( file_exists( $js_file ) ) {
		wp_enqueue_script(
			'qlx-homepage',
			$dist_uri . '/homepage.js',
			array(),
			(string) filemtime( $js_file ),
			true
		);
	}
}
add_action( 'wp_enqueue_scripts', 'qlx_child_enqueue_assets', 20 );

/**
 * Load homepage bundle as ES module.
 *
 * @param string $tag    Script tag.
 * @param string $handle Script handle.
 * @return string
 */
function qlx_child_module_script_tag( $tag, $handle ) {
	if ( 'qlx-homepage' === $handle ) {
		return str_replace( '<script ', '<script type="module" ', $tag );
	}

	return $tag;
}
add_filter( 'script_loader_tag', 'qlx_child_module_script_tag', 10, 2 );

/**
 * Add body class for React homepage styling hooks.
 *
 * @param string[] $classes Body classes.
 * @return string[]
 */
function qlx_child_body_class( $classes ) {
	if ( is_front_page() ) {
		$classes[] = 'qlx-redesign-page';
	}

	return $classes;
}
add_filter( 'body_class', 'qlx_child_body_class' );

/**
 * Use minimal document shell on the front page.
 *
 * @param string $template Current template path.
 * @return string
 */
function qlx_child_front_page_template( $template ) {
	if ( is_front_page() ) {
		$custom = QLX_CHILD_DIR . '/front-page.php';
		if ( file_exists( $custom ) ) {
			return $custom;
		}
	}

	return $template;
}
add_filter( 'template_include', 'qlx_child_front_page_template', 99 );

/**
 * Dequeue Astra/Elementor front-page assets that conflict with the React layout.
 */
function qlx_child_dequeue_conflicting_assets() {
	if ( ! is_front_page() ) {
		return;
	}

	wp_dequeue_style( 'elementor-post-11' );
	wp_dequeue_script( 'elementor-frontend' );
}
add_action( 'wp_enqueue_scripts', 'qlx_child_dequeue_conflicting_assets', 100 );
