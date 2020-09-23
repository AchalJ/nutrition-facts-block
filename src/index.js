import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import attributes from './attributes';
import edit from './edit';
import save from './save';
import example from './example';
import metadata from '../block.json';
import './style.scss';
import './editor.scss';
import './nutrition-item';

const { name, icon, category, keywords, supports } = metadata;

registerBlockType( name, {
	title: __( 'Nutrition Facts', 'ib-testimonial' ),
	description: __(
		'A block to display nutrition facts label for a recipe.',
		'ib-nutrition-facts'
	),
	icon,
	category,
	keywords,
	supports,
	attributes,
	edit,
	save,
	example,
} );
