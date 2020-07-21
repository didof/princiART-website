export const initialState = {
	selected: 0,
	avaiable: ['italiano', 'english'],
	template: {
		italiano: {
			test: 'ita',
		},
		english: {
			test: 'eng',
		},
	},
};

export default function (state, { type, payload }) {
	switch (type) {
		case 'setLanguage':
			console.log('new language:', payload);
			break;
		default:
			break;
	}
	return state;
}
