const attributes = {
	itemType: {
		type: 'string',
		default: 'fatContent',
	},
	itemName: {
		type: 'string',
	},
	itemMass: {
		type: 'string',
	},
	itemChildren: {
		type: 'object',
		default: {
			saturatedFatContent: {
				name: '',
				mass: '',
			},
			transFatContent: {
				name: '',
				mass: '',
			},
			fiberContent: {
				name: '',
				mass: '',
			},
			sugarContent: {
				name: '',
				mass: '',
			},
		},
	},
	separatorType: {
		type: 'string',
		default: 'lite',
	},
};

export default attributes;
