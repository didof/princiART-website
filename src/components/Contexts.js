import React from 'react';

import Languages_Provider from 'contexts/languages/Languages_Provider';
import Themes_Provider from 'contexts/themes/Themes_Provider';

export default function Contexts({ children }) {
	return (
		<Languages_Provider>
			<Themes_Provider>{children}</Themes_Provider>
		</Languages_Provider>
	);
}
