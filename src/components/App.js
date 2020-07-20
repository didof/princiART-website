import React from 'react';
import Layout from './layout/Layout';

import { LanguagesContext } from '@contexts/languages/Languages_Provider';

function App() {
	const [state, dispatch] = React.useContext(LanguagesContext);
	console.log(state ? 'reducer ok' : 'reducer NO');

	return <Layout><div>main</div></Layout>;
}

export default App;
