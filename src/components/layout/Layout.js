import React from 'react';
import Header from './header/Header';

export default function Layout({ children }) {
	return (
		<div id='layout'>
			<Header />
			{children}
		</div>
	);
}
