import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

export default function Router({ children }) {
	return (
		<BrowserRouter>
			<Switch>{children}</Switch>
		</BrowserRouter>
	);
}
