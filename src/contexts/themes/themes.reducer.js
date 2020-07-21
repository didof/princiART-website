import { app } from 'assets/globals';
const { defaultTemplateName } = app

const templates = {
	dawn: {
		primary: 'yellow',
		secondary: 'teal',
		background: 'gray',
	},
	sea: {
		primary: 'indigo',
		secondary: 'green',
		background: 'gray',
	},
};

export const initialState = {
	selected: defaultTemplateName,
	template: templates[defaultTemplateName],
};

export default function (state, { type, payload }) {

	switch (type) {
		case 'setTheme':
			console.log('[reducer:themes] setTheme:', payload);
			return {
				selected: payload,
				template: templates[payload],
			};
		default:
			break;
	}

	return state;
}
