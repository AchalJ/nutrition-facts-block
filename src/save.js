import { RichText, InnerBlocks } from '@wordpress/block-editor';

const save = ( { attributes, className } ) => {
	return (
		<div>
			<div
				id={ `ib-nutrition-facts-${ attributes.blockId }` }
				className={ className }
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
					{ ! RichText.isEmpty( attributes.title ) && (
						<RichText.Content
							tagName="h3"
							className="ib-nutrition-facts-title"
							value={ attributes.title }
							style={ {
								fontSize: attributes.titleFontSize
									? attributes.titleFontSize + 'px'
									: undefined,
							} }
						/>
					) }
					<div className="ib-nutrition-facts-serving-size">
						{ ! RichText.isEmpty( attributes.servingSizeText ) && (
							<RichText.Content
								tagName="span"
								className="ib-nutrition-facts-label"
								value={ attributes.servingSizeText }
							/>
						) }

						<span className="ib-nutrition-facts-spacer"></span>

						{ ! RichText.isEmpty( attributes.servingSizeValue ) && (
							<>
								<RichText.Content
									tagName="span"
									className="ib-nutrition-facts-value"
									value={ attributes.servingSizeValue }
								/>
								<span className="ib-nutrition-facts-unit">
									{ attributes.servingSizeUnit }
								</span>
							</>
						) }
					</div>
					<div className="ib-nutrition-facts-servings">
						{ ! RichText.isEmpty( attributes.servingsText ) && (
							<RichText.Content
								tagName="span"
								className="ib-nutrition-facts-label"
								value={ attributes.servingsText }
							/>
						) }

						<span className="ib-nutrition-facts-spacer"></span>

						{ ! RichText.isEmpty( attributes.servingsValue ) && (
							<RichText.Content
								tagName="span"
								className="ib-nutrition-facts-value"
								value={ attributes.servingsValue }
							/>
						) }
					</div>

					<div className="ib-nutrition-facts-separator is-heavy"></div>

					{ ! RichText.isEmpty( attributes.perServingText ) && (
						<RichText.Content
							tagName="div"
							className="ib-nutrition-facts-per-serving"
							value={ attributes.perServingText }
						/>
					) }

					<div className="ib-nutrition-facts-separator is-lite"></div>

					<div className="ib-nutrition-facts-calories">
						{ ! RichText.isEmpty( attributes.caloriesText ) && (
							<RichText.Content
								tagName="span"
								className="ib-nutrition-facts-label"
								value={ attributes.caloriesText }
							/>
						) }

						<span className="ib-nutrition-facts-spacer"></span>

						{ ! RichText.isEmpty( attributes.caloriesValue ) && (
							<RichText.Content
								tagName="span"
								className="ib-nutrition-facts-value"
								value={ attributes.caloriesValue }
							/>
						) }
					</div>

					<div className="ib-nutrition-facts-separator is-medium"></div>

					{ ! RichText.isEmpty( attributes.dailyValueText ) && (
						<RichText.Content
							tagName="div"
							className="ib-nutrition-facts-daily-value"
							value={ attributes.dailyValueText }
						/>
					) }

					<div className="ib-nutrition-facts-separator is-lite"></div>

					<div className="ib-nutrition-facts-items">
						<InnerBlocks.Content />
					</div>

					{ ! RichText.isEmpty( attributes.footerNote ) && (
						<RichText.Content
							tagName="div"
							className="ib-nutrition-facts-footer-note"
							value={ attributes.footerNote }
						/>
					) }
				</div>
			</div>
		</div>
	);
};

export default save;
