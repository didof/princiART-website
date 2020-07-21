import React from 'react';

import { LanguagesContext } from 'contexts/languages/Languages_Provider';
import { ThemesContext } from 'contexts/themes/Themes_Provider';

import { isPopulated } from 'utilities/logs/testers';

export default function useContext_Logs(contextName, log = false) {
	let outcome;
	switch (contextName) {
		case 'languages':
			outcome = React.useContext(LanguagesContext);
			break;
		case 'themes':
			outcome = React.useContext(ThemesContext);
			break;
		default:
			throw new Error(`[context:${contextName}] | not recognized`);
	}

	const [state, dispatch] = outcome;
	if (!log) {
		return [state, dispatch];
	} else {
		if (!isPopulated(state, `[reducer:${contextName}]`)) {
			return [
				{ error: `${contextName} encoutered some trouble, please fix it` },
				null,
			];
		}
	}
}
