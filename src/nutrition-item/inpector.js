/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { nutrients } from './helpers';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const { itemType, separatorType } = attributes;

	const getItemOptions = () => {
		let items = [];

		Object.keys( nutrients ).map( ( item ) => {
			if (
				'undefined' === typeof nutrients[ item ].parent ||
				! nutrients[ item ].parent
			) {
				let label = `${ nutrients[ item ].name } (${ nutrients[ item ].unit })`;
				items.push( {
					value: item,
					label: label,
				} );
			}
		} );

		return items;
	};

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Content', 'ib-testimonial' ) }>
				<SelectControl
					label={ __( 'Nutrition Type', 'ib-nutrition-facts' ) }
					value={ itemType }
					options={ getItemOptions() }
					onChange={ ( value ) => {
						setAttributes( { itemType: value } );
					} }
				/>
				<SelectControl
					label={ __( 'Separator', 'ib-nutrition-facts' ) }
					value={ separatorType }
					options={ [
						{
							value: 'heavy',
							label: __( 'Heavy', 'ib-nutrition-facts' ),
						},
						{
							value: 'medium',
							label: __( 'Medium', 'ib-nutrition-facts' ),
						},
						{
							value: 'lite',
							label: __( 'Lite', 'ib-nutrition-facts' ),
						},
					] }
					onChange={ ( value ) => {
						setAttributes( { separatorType: value } );
					} }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
