<?php
/**
 * Plugin Name:     Nutrition Facts
 * Description:     A block to display nutrition facts label for a recipe.
 * Version:         1.0.0
 * Author:          Achal Jain
 * Author URI:  	https://achalj.github.io
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     ib-nutrition-facts
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function ib_nutrition_facts_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "ideabox/nutrition-facts" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'ib-nutrition-facts-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'ideabox-testimonial-block-editor', 'ib-nutrition-facts' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'ib-nutrition-facts-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'ib-nutrition-facts-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'ideabox/nutrition-facts', array(
		'editor_script' => 'ib-nutrition-facts-block-editor',
		'editor_style'  => 'ib-nutrition-facts-block-editor',
		'style'         => 'ib-nutrition-facts-block',
	) );
}
add_action( 'init', 'ib_nutrition_facts_block_init' );
