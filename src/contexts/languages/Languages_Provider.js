import React from 'react';

import reducer, { initialState } from './languages.reducer';

export const LanguagesContext = React.createContext();

export default function Languages_Provider({ children }) {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	return (
		<LanguagesContext.Provider value={[state, dispatch]}>
			{children}
		</LanguagesContext.Provider>
	);
}
