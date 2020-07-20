import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import Context from 'components/Contexts';

import 'assets/css/global.css';

// modules
import 'assets/css/app.module.css';
import 'assets/css/layout.module.css';

// the following asset is the outcome of the npm script "prebuild"
import 'assets/css/tailwind.output.css';

function Index() {
	return (
		<Context>
			<App />
		</Context>
	);
}

ReactDOM.render(<Index />, document.getElementById('root'));
