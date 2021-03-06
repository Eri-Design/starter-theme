<?php
/**
 * WP Theme constants and setup functions
 *
 * @package EriScaffold
 */

// Useful global constants.
define( 'ERI_SCAFFOLD_VERSION', '0.1.0' );
define( 'ERI_SCAFFOLD_TEMPLATE_URL', get_template_directory_uri() );
define( 'ERI_SCAFFOLD_PATH', get_template_directory() . '/' );
define( 'ERI_SCAFFOLD_INC', ERI_SCAFFOLD_PATH . 'includes/' );

require_once ERI_SCAFFOLD_INC . 'core.php';
require_once ERI_SCAFFOLD_INC . 'overrides.php';
require_once ERI_SCAFFOLD_INC . 'template-tags.php';
require_once ERI_SCAFFOLD_INC . 'utility.php';
require_once ERI_SCAFFOLD_INC . 'blocks.php';

// Run the setup functions.
EriScaffold\Core\setup();
EriScaffold\Blocks\setup();

// Require Composer autoloader if it exists.
if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once 'vendor/autoload.php';
}

if ( ! function_exists( 'wp_body_open' ) ) {

	/**
	 * Shim for the the new wp_body_open() function that was added in 5.2
	 */
	function wp_body_open() {
		do_action( 'wp_body_open' );
	}
}
