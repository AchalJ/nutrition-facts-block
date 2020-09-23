import { __ } from '@wordpress/i18n';

export const nutrients = {
	fatContent: {
		name: __( 'Total Fat', 'ib-nutrition-facts' ),
		unit: 'g',
		dv: 65,
	},
	saturatedFatContent: {
		name: __( 'Saturated Fat', 'ib-nutrition-facts' ),
		unit: 'g',
		dv: 20,
		parent: 'fatContent',
	},
	transFatContent: {
		name: __( 'Trans Fat', 'ib-nutrition-facts' ),
		unit: 'g',
		parent: 'fatContent',
	},
	cholesterolContent: {
		name: __( 'Cholesterol', 'ib-nutrition-facts' ),
		unit: 'mg',
		dv: 300,
	},
	sodiumContent: {
		name: __( 'Sodium', 'ib-nutrition-facts' ),
		unit: 'mg',
		dv: 2400,
	},
	potassiumContent: {
		name: __( 'Potassium', 'ib-nutrition-facts' ),
		unit: 'mg',
		dv: 3500,
	},
	carbohydrateContent: {
		name: __( 'Total Carbohydrate', 'ib-nutrition-facts' ),
		unit: 'g',
		dv: 300,
	},
	fiberContent: {
		name: __( 'Dietary Fiber', 'ib-nutrition-facts' ),
		unit: 'g',
		dv: 25,
		parent: 'carbohydrateContent',
	},
	sugarContent: {
		name: __( 'Sugar', 'ib-nutrition-facts' ),
		unit: 'g',
		parent: 'carbohydrateContent',
	},
	proteinContent: {
		name: __( 'Protein', 'ib-nutrition-facts' ),
		unit: 'g',
		dv: 50,
	},

	vitaminA: {
		name: __( 'Vitamin A', 'ib-nutrition-facts' ),
		unit: 'IU',
		dv: 5000,
		footer: true,
	},
	vitaminB6: {
		name: __( 'Vitamin B6', 'ib-nutrition-facts' ),
		unit: 'mg',
		dv: 2,
		footer: true,
	},
	vitaminB12: {
		name: __( 'Vitamin B12', 'ib-nutrition-facts' ),
		unit: 'mcg',
		dv: 6,
		footer: true,
	},
	vitaminC: {
		name: __( 'Vitamin C', 'ib-nutrition-facts' ),
		unit: 'mg',
		dv: 60,
		footer: true,
	},
	vitaminD: {
		name: __( 'Vitamin D', 'ib-nutrition-facts' ),
		unit: 'IU',
		dv: 400,
		footer: true,
	},
	vitaminE: {
		name: __( 'Vitamin E', 'ib-nutrition-facts' ),
		unit: 'IU',
		dv: 30,
		footer: true,
	},
	thiamin: {
		name: __( 'Thiamin', 'ib-nutrition-facts' ),
		unit: 'mg',
		dv: 1.5,
		footer: true,
	},
	riboflavin: {
		name: __( 'Riboflavin', 'ib-nutrition-facts' ),
		unit: 'mg',
		dv: 1.7,
		footer: true,
	},
	niacin: {
		name: __( 'Niacin', 'ib-nutrition-facts' ),
		unit: 'mg',
		dv: 20,
		footer: true,
	},
	calcium: {
		name: __( 'Calcium', 'ib-nutrition-facts' ),
		unit: 'g',
		dv: 1,
		footer: true,
	},
	iron: {
		name: __( 'Iron', 'ib-nutrition-facts' ),
		unit: 'mg',
		dv: 18,
		footer: true,
	},
	folicAcid: {
		name: __( 'Folic Acid', 'ib-nutrition-facts' ),
		unit: 'mg',
		dv: 0.4,
		footer: true,
	},
	phosphorus: {
		name: __( 'Phosphorus', 'ib-nutrition-facts' ),
		unit: 'g',
		dv: 1.0,
		footer: true,
	},
	iodine: {
		name: __( 'Iodine', 'ib-nutrition-facts' ),
		unit: 'mcg',
		dv: 150,
		footer: true,
	},
	magnesium: {
		name: __( 'Magnesium', 'ib-nutrition-facts' ),
		unit: 'mg',
		dv: 400,
		footer: true,
	},
	zinc: {
		name: __( 'Zinc', 'ib-nutrition-facts' ),
		unit: 'mg',
		dv: 15,
		footer: true,
	},
	copper: {
		name: __( 'Copper', 'ib-nutrition-facts' ),
		unit: 'mg',
		dv: 2,
		footer: true,
	},
	biotin: {
		name: __( 'Biotin', 'ib-nutrition-facts' ),
		unit: 'mg',
		dv: 0.3,
		footer: true,
	},
	pantothenicAcid: {
		name: __( 'Pantothenic Acid', 'ib-nutrition-facts' ),
		unit: 'mg',
		dv: 10,
		footer: true,
	},
};

export const parseMass = ( mass ) => {
	if ( isNaN( mass ) ) {
		const matches = mass.match( /[+-]?\d+(?:\.\d+)?/g );

		if ( null !== matches && matches[ 0 ] ) {
			return Number( matches[ 0 ] );
		}
	}

	return mass;
};

export const renderSeparator = ( separatorType = 'lite' ) => {
	let classes = [ 'ib-nutrition-facts-separator', `is-${ separatorType }` ];

	return <div className={ classes.join( ' ' ) }></div>;
};

export const renderUnit = ( mass, unit ) => {
	if ( isNaN( mass ) ) {
		unit = mass.replace( /[+-]?\d+(?:\.\d+)?/g, unit );
	}
	return unit;
};
