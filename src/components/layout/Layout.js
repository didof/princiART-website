import React from 'react';
import Header from './header/Header';

// hooks
import useContext_Logs from 'hooks/useContext_Logs';

// utilites
import { injectClass } from 'utilities/injecters/inject';

export default function Layout({ children }) {
	const [{ template }, dispatch] = useContext_Logs('themes');

	const mainContent = {
		base: `h-full w-full absolute bg-${template.background}-200`,
		sm: 'px-2 py-6',
		md: 'px-2 py-8',
		lg: 'px-3 py-8',
		xl: 'px-4 py-12',
	};

	//overflow-y-hidden
	return (
		<div className='h-screen relative'>
			{/* <button onClick={() => dispatch({ type: 'setTheme', payload: 'sea' })}>
				change theme
			</button> */}
			<div className={injectClass(mainContent)}>{children}</div>
			<Header />
		</div>
	);
}
