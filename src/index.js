import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Context from './components/Contexts';

import './assets/css/global.css';
import './assets/css/app.module.css'
import './assets/css/layout.module.css'

function Index() {
	return (
		<Context>
			{/* <App /> */}
			<div className='bg-black'>test</div>
		</Context>
	);
}

ReactDOM.render(<Index />, document.getElementById('root'));
