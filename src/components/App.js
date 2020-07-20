import React from 'react';
import Layout from './layout/Layout';

import Welcome from 'components/pages/welcome/Welcome';

import useContext_Logs from 'hooks/useContext_Logs';

function App() {

	const [state, dispatch] = useContext_Logs('languages');

	return (
		<Layout>
			<Welcome />
		</Layout>
	);
}

export default App;
