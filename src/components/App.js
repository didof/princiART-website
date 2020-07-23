import React from 'react';
import { Route } from 'react-router-dom';

import Layout from 'components/layout/Layout';
import Router from 'components//Router';
import Biography from 'components/pages/biography/Biography';
import Gallery from 'components/pages/gallery/Gallery';
import Contact from 'components/pages/contact/Contact';

import useContext_Logs from 'hooks/useContext_Logs';

function App() {
	const [state, dispatch] = useContext_Logs('languages', false);

	return (
		<Router>
			<Layout>
				<Route exact path='/' component={Gallery} />
				<Route path='/bio' component={Biography} />
				<Route path='/contact' component={Contact} />
			</Layout>
		</Router>
	);
}

export default App;
