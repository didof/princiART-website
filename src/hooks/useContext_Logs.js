import React from 'react';

import { LanguagesContext } from 'contexts/languages/Languages_Provider';

import { check } from 'utilites/logs/testers';

export default function useContext_Logs(contextName) {
	let outcome;
	switch (contextName) {
		case 'languages':
			outcome = React.useContext(LanguagesContext);
			break;
		default:
			throw new Error(`context:${contextName} is not recognized`);
	}

	const [state, dispatch] = outcome;
	if (check(state, '[reducer:LanguagesContext]')) {
		return [state, dispatch];
	} else {
		return [
			{ error: `${contextName} encoutered some trouble, please fix it` },
			null,
		];
	}
}
