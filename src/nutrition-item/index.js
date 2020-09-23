import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import attributes from './attributes';
import edit from './edit';
import save from './save';
import metadata from './block.json';
import './style.scss';
import './editor.scss';

const { name, icon, category, keywords, supports } = metadata;

registerBlockType( name, {
	title: __( 'Nutrition Item', 'ib-testimonial' ),
	description: __(
		'Add a nutrition item to Nutrition Facts.',
		'ib-nutrition-facts'
	),
	category,
	icon,
	keywords,
	supports,
	attributes,
	edit,
	save,
	parent: [ 'ideabox/nutrition-facts' ],
} );
