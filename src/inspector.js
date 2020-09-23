/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
	FontSizePicker,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		titleFontSize,
		backgroundColor,
		textColor,
		borderWidth,
	} = attributes;

	const setBackgroundColor = ( backgroundColor ) => {
		setAttributes( { backgroundColor } );
	};

	const setTextColor = ( textColor ) => {
		setAttributes( { textColor } );
	};

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Heading', 'ib-nutrition-facts' ) }>
				<FontSizePicker
					value={ titleFontSize }
					onChange={ ( titleFontSize ) =>
						setAttributes( { titleFontSize } )
					}
				/>
			</PanelBody>
			<PanelColorSettings
				title={ __( 'Color', 'ib-nutrition-facts' ) }
				initialOpen={ false }
				colorSettings={ [
					{
						value: backgroundColor,
						onChange: setBackgroundColor,
						label: __( 'Background color', 'ib-nutrition-facts' ),
					},
					{
						value: textColor,
						onChange: setTextColor,
						label: __( 'Text color', 'ib-nutrition-facts' ),
					},
				] }
			>
				<ContrastChecker
					{ ...{
						textColor: textColor,
						backgroundColor: backgroundColor,
						fallbackTextColor: '#323232',
						fallbackBackgroundColor: '#ffffff',
					} }
				/>
			</PanelColorSettings>
			<PanelBody
				title={ __( 'Border', 'ib-nutrition-facts' ) }
				initialOpen={ false }
			>
				<RangeControl
					label={ __( 'Border Width', 'ib-nutrition-facts' ) }
					value={ borderWidth }
					onChange={ ( borderWidth ) =>
						setAttributes( { borderWidth } )
					}
					min={ 0 }
					max={ 10 }
					allowReset
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
