import { RichText } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

import Inspector from './inpector';

import { nutrients, parseMass, renderSeparator, renderUnit } from './helpers';

const edit = ( props ) => {
	const { attributes, setAttributes } = props;

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}

	const {
		itemType,
		itemName,
		itemMass,
		itemChildren,
		separatorType,
	} = attributes;

	const updateItemChildProp = ( itemType, key, value ) => {
		let newValue =
			! value && 'name' === key ? nutrients[ itemType ].name : value;
		let children = {
			...itemChildren[ itemType ],
			[ key ]: newValue,
		};

		setAttributes( {
			itemChildren: { ...itemChildren, [ itemType ]: children },
		} );
	};

	const getItemChildProp = ( itemType, key ) => {
		const value = itemChildren[ itemType ][ key ];

		if ( 'name' === key && ! value ) {
			const newValue = nutrients[ itemType ].name;
			updateItemChildProp( itemType, 'name', newValue );
			return newValue;
		}

		return value;
	};

	const getItemComponent = ( type, itemType, key ) => {
		return (
			<>
				<RichText
					tagName="span"
					className={ `ib-nutrition-facts-${ type }` }
					value={ getItemChildProp( itemType, key ) }
					onChange={ ( value ) => {
						updateItemChildProp( itemType, key, value );
					} }
					placeholder={
						'name' === key
							? __( 'Item Name', 'ib-nutrition-facts' )
							: '0'
					}
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					keepPlaceholderOnFocus={ true }
					disableLineBreaks
				/>
				{ 'name' === key && (
					<span className="ib-nutrition-facts-spacer"></span>
				) }
				{ 'mass' === key && '' !== itemChildren[ itemType ].mass && (
					<RichText.Content
						tagName="span"
						className="ib-nutrition-facts-unit"
						value={ renderUnit(
							itemChildren[ itemType ].mass,
							nutrients[ itemType ].unit
						) }
					/>
				) }
			</>
		);
	};

	const renderSubItem = ( subItemType ) => {
		return (
			<div className="ib-nutrition-facts-item" key={ subItemType }>
				<div className="ib-nutrition-facts-item-inner">
					<div className="ib-nutrition-facts-item-info">
						{ getItemComponent( 'label', subItemType, 'name' ) }
						{ getItemComponent( 'value', subItemType, 'mass' ) }
					</div>
					<div className="ib-nutrition-facts-item-dv">
						{ nutrients[ subItemType ].dv &&
							'' !== itemChildren[ subItemType ].mass && (
								<span>
									{ Math.ceil(
										( parseMass(
											itemChildren[ subItemType ].mass
										) /
											nutrients[ subItemType ].dv ) *
											100
									) }
									%
								</span>
							) }
					</div>
				</div>
				{ renderSeparator( separatorType ) }
			</div>
		);
	};

	const renderSubItems = ( itemType ) => {
		if ( 'fatContent' !== itemType && 'carbohydrateContent' !== itemType ) {
			return renderSeparator( separatorType );
		}
		return (
			<>
				<div className="ib-nutrition-facts-sub-items">
					{ renderSeparator( separatorType ) }
					{ 'fatContent' === itemType && [
						renderSubItem( 'saturatedFatContent' ),
						renderSubItem( 'transFatContent' ),
					] }
					{ 'carbohydrateContent' === itemType && [
						renderSubItem( 'fiberContent' ),
						renderSubItem( 'sugarContent' ),
					] }
				</div>
				{ renderSeparator( separatorType ) }
			</>
		);
	};

	return (
		<>
			<Inspector { ...{ attributes, setAttributes } } />
			<div
				className={ `ib-nutrition-facts-item${
					nutrients[ itemType ].footer ? ' is-footer-item' : ''
				}` }
			>
				<div className="ib-nutrition-facts-item-inner">
					<div className="ib-nutrition-facts-item-info">
						<RichText
							tagName="span"
							className="ib-nutrition-facts-label"
							value={
								itemName ? itemName : nutrients[ itemType ].name
							}
							onChange={ ( itemName ) =>
								setAttributes( { itemName } )
							}
							placeholder={ __(
								'Item Name',
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
							value={ itemMass }
							onChange={ ( itemMass ) =>
								setAttributes( { itemMass } )
							}
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							placeholder="0"
							keepPlaceholderOnFocus={ true }
							disableLineBreaks
						/>
						{ nutrients[ itemType ] && itemMass && (
							<RichText.Content
								tagName="span"
								className="ib-nutrition-facts-unit"
								value={ renderUnit(
									itemMass,
									nutrients[ itemType ].unit
								) }
							/>
						) }
					</div>
					<div className="ib-nutrition-facts-item-dv">
						{ nutrients[ itemType ].dv && itemMass && (
							<span>
								{ Math.ceil(
									( parseMass( itemMass ) /
										nutrients[ itemType ].dv ) *
										100
								) }
								%
							</span>
						) }
					</div>
				</div>
				{ renderSubItems( itemType ) }
			</div>
		</>
	);
};
export default edit;
