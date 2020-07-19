import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import "./assets/css/global.css"

function Index() {
	return (
		<div>
			<p>Index</p>
			<App />
		</div>
	);
}

ReactDOM.render(<Index />, document.getElementById('root'));
