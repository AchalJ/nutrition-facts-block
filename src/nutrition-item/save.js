import { RichText } from '@wordpress/block-editor';
import { nutrients, parseMass, renderSeparator, renderUnit } from './helpers';

const save = ( { attributes, className } ) => {
	const {
		itemType,
		itemName,
		itemMass,
		itemChildren,
		separatorType,
	} = attributes;

	const getItemName = () => {
		return itemName || nutrients[ itemType ].name;
	};

	const getItemChildProp = ( itemType, key ) => {
		const value = itemChildren[ itemType ][ key ];

		if ( 'name' === key && ! value ) {
			return nutrients[ itemType ].name;
		}

		return value;
	};

	const getItemComponent = ( type, itemType, key ) => {
		const value =
			'name' === key && ! getItemChildProp( itemType, key )
				? nutrients[ itemType ].name
				: getItemChildProp( itemType, key );
		return (
			! RichText.isEmpty( getItemChildProp( itemType, key ) ) && (
				<>
					<RichText.Content
						tagName="span"
						className="ib-nutrition-facts-label"
						value={ value }
					/>
					{ 'name' === key && (
						<span className="ib-nutrition-facts-spacer"></span>
					) }
					{ 'mass' === key && (
						<RichText.Content
							tagName="span"
							className="ib-nutrition-facts-unit"
							value={ renderUnit(
								value,
								nutrients[ itemType ].unit
							) }
						/>
					) }
				</>
			)
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
		<div
			className={ `ib-nutrition-facts-item${
				nutrients[ itemType ].footer ? ' is-footer-item' : ''
			}` }
		>
			<div className="ib-nutrition-facts-item-inner">
				<div className="ib-nutrition-facts-item-info">
					{ ! RichText.isEmpty( getItemName() ) && (
						<RichText.Content
							tagName="span"
							className="ib-nutrition-facts-label"
							value={ getItemName() }
						/>
					) }
					<span className="ib-nutrition-facts-spacer"></span>
					{ ! RichText.isEmpty( itemMass ) && (
						<>
							<RichText.Content
								tagName="span"
								className="ib-nutrition-facts-value"
								value={ itemMass }
							/>
							<RichText.Content
								tagName="span"
								className="ib-nutrition-facts-unit"
								value={ renderUnit(
									itemMass,
									nutrients[ itemType ].unit
								) }
							/>
						</>
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
	);
};
export default save;
