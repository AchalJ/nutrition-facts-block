import { __ } from '@wordpress/i18n';

const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},
	title: {
		type: 'string',
		default: __( 'Nutrition Facts', 'ib-nutrition-facts' ),
	},
	servingSizeText: {
		type: 'string',
		default: __( 'Serving Size', 'ib-nutrition-facts' ),
	},
	servingSizeValue: {
		type: 'number',
		default: '1',
	},
	servingSizeUnit: {
		type: 'string',
		default: __( 'plate', 'ib-nutrition-facts' ),
	},
	servingsText: {
		type: 'string',
		default: __( 'Servings', 'ib-nutrition-facts' ),
	},
	servingsValue: {
		type: 'number',
		default: '2',
	},
	perServingText: {
		type: 'string',
		default: __( 'Amount Per Serving', 'ib-nutrition-facts' ),
	},
	caloriesText: {
		type: 'string',
		default: __( 'Calories', 'ib-nutrition-facts' ),
	},
	caloriesValue: {
		type: 'number',
		default: '100',
	},
	dailyValueText: {
		type: 'string',
		default: __( '% Daily Value *', 'ib-nutrition-facts' ),
	},
	footerNote: {
		type: 'string',
		default: __(
			'* % Daily Values are based on a 2,000 calories diet. Your daily value may be higher or lower depending on your calorie needs.',
			'ib-nutrition-facts'
		),
	},

	titleFontSize: {
		type: 'number',
	},
	backgroundColor: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
	borderWidth: {
		type: 'number',
	},
};

export default attributes;
