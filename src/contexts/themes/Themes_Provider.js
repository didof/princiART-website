import React from 'react';

import reducer, { initialState } from './themes.reducer';

export const ThemesContext = React.createContext();

export default function Themes_Provider({ children }) {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	return (
		<ThemesContext.Provider value={[state, dispatch]}>
			{children}
		</ThemesContext.Provider>
	);
}
