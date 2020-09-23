import { RichText, InnerBlocks } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

import Inspector from './inspector';

const ALLOWED_BLOCKS = [ 'ideabox/nutrition-item' ];

const edit = ( props ) => {
	const { attributes, setAttributes, isSelected } = props;

	if ( isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}

	return (
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<div
				id={ `ib-nutrition-facts-${ attributes.blockId }` }
				className={ props.className }
			>
				<div
					className="ib-nutrition-facts-block"
					style={ {
						borderWidth: attributes.borderWidth,
						backgroundColor: attributes.backgroundColor,
						color: attributes.textColor,
						'--separator': attributes.textColor,
					} }
				>
					<RichText
						tagName="h3"
						className="ib-nutrition-facts-title"
						value={ attributes.title }
						onChange={ ( title ) => setAttributes( { title } ) }
						placeholder={ __(
							'Nutrition Facts',
							'ib-nutrition-facts'
						) }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						keepPlaceholderOnFocus={ true }
						disableLineBreaks
						style={ {
							fontSize: attributes.titleFontSize
								? attributes.titleFontSize + 'px'
								: undefined,
						} }
					/>
					<div className="ib-nutrition-facts-serving-size">
						<RichText
							tagName="span"
							className="ib-nutrition-facts-label"
							value={ attributes.servingSizeText }
							onChange={ ( servingSizeText ) =>
								setAttributes( { servingSizeText } )
							}
							placeholder={ __(
								'Serving Size',
								'ib-nutrition-facts'
							) }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							keepPlaceholderOnFocus={ true }
							disableLineBreaks
						/>
						<span className="ib-nutrition-facts-spacer"></span>
						<RichText
							tagName="span"
							className="ib-nutrition-facts-value"
							value={ attributes.servingSizeValue }
							onChange={ ( servingSizeValue ) =>
								setAttributes( { servingSizeValue } )
							}
							placeholder={ 1 }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							keepPlaceholderOnFocus={ true }
							disableLineBreaks
						/>
						<RichText
							tagName="span"
							className="ib-nutrition-facts-unit"
							value={ attributes.servingSizeUnit }
							onChange={ ( servingSizeUnit ) =>
								setAttributes( { servingSizeUnit } )
							}
							placeholder={ __( 'plate', 'ib-nutrition-facts' ) }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							keepPlaceholderOnFocus={ true }
							disableLineBreaks
						/>
					</div>
					<div className="ib-nutrition-facts-servings">
						<RichText
							tagName="span"
							className="ib-nutrition-facts-label"
							value={ attributes.servingsText }
							onChange={ ( servingsText ) =>
								setAttributes( { servingsText } )
							}
							placeholder={ __(
								'Servings',
								'ib-nutrition-facts'
							) }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							keepPlaceholderOnFocus={ true }
							disableLineBreaks
						/>
						<span className="ib-nutrition-facts-spacer"></span>
						<RichText
							tagName="span"
							className="ib-nutrition-facts-value"
							value={ attributes.servingsValue }
							onChange={ ( servingsValue ) =>
								setAttributes( { servingsValue } )
							}
							placeholder={ 2 }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							keepPlaceholderOnFocus={ true }
							disableLineBreaks
						/>
					</div>

					<div className="ib-nutrition-facts-separator is-heavy"></div>

					<RichText
						tagName="div"
						className="ib-nutrition-facts-per-serving"
						value={ attributes.perServingText }
						onChange={ ( perServingText ) =>
							setAttributes( { perServingText } )
						}
						placeholder={ __(
							'Amount Per Serving',
							'ib-nutrition-facts'
						) }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						keepPlaceholderOnFocus={ true }
						disableLineBreaks
					/>

					<div className="ib-nutrition-facts-separator is-lite"></div>

					<div className="ib-nutrition-facts-calories">
						<RichText
							tagName="span"
							className="ib-nutrition-facts-label"
							value={ attributes.caloriesText }
							onChange={ ( caloriesText ) =>
								setAttributes( { caloriesText } )
							}
							placeholder={ __(
								'Calories',
								'ib-nutrition-facts'
							) }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							keepPlaceholderOnFocus={ true }
							disableLineBreaks
						/>
						<span className="ib-nutrition-facts-spacer"></span>
						<RichText
							tagName="span"
							className="ib-nutrition-facts-value"
							value={ attributes.caloriesValue }
							onChange={ ( caloriesValue ) =>
								setAttributes( { caloriesValue } )
							}
							placeholder={ 100 }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							keepPlaceholderOnFocus={ true }
							disableLineBreaks
						/>
					</div>

					<div className="ib-nutrition-facts-separator is-medium"></div>

					<RichText
						tagName="div"
						className="ib-nutrition-facts-daily-value"
						value={ attributes.dailyValueText }
						onChange={ ( dailyValueText ) =>
							setAttributes( { dailyValueText } )
						}
						placeholder={ __(
							'% Daily Value *',
							'ib-nutrition-facts'
						) }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						keepPlaceholderOnFocus={ true }
						disableLineBreaks
					/>

					<div className="ib-nutrition-facts-separator is-lite"></div>

					<div className="ib-nutrition-facts-items">
						<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
					</div>

					<RichText
						tagName="div"
						className="ib-nutrition-facts-footer-note"
						value={ attributes.footerNote }
						onChange={ ( footerNote ) =>
							setAttributes( { footerNote } )
						}
						placeholder={ __(
							'* % Daily Values are based on a 2,000 calories diet. Your daily value may be higher or lower depending on your calorie needs.',
							'ib-nutrition-facts'
						) }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						keepPlaceholderOnFocus={ true }
					/>
				</div>
			</div>
		</>
	);
};

export default edit;
