import React from 'react';

import Languages_Provider from 'contexts/languages/Languages_Provider';

export default function Contexts({ children }) {
	return <Languages_Provider>{children}</Languages_Provider>;
}
