import React from 'react';
import Header from './header/Header';

// hooks
import useContext_Logs from 'hooks/useContext_Logs';

// utilites
import { injectClass } from 'utilities/injecters/inject';

export default function Layout({ children }) {
	const [{ template }, dispatch] = useContext_Logs('themes');

	const mainContent = {
		base: 'px-4 py-3 h-screen',
		sm: 'px-8 py-6',
		md: 'px-10 py-8',
		lg: 'px-14 py-8',
		xl: 'px-20 py-12',
	};

	return (
		<div className={`h-screen bg-${template.background}-200`}>
			{/* <button onClick={() => dispatch({ type: 'setTheme', payload: 'sea' })}>
				change theme
			</button> */}
			<Header />
			<div className={injectClass(mainContent)}>{children}</div>
		</div>
	);
}
