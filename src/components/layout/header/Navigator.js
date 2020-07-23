import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { navigation } from 'assets/globals';

import useContext_Logs from 'hooks/useContext_Logs';

export default function Navigator() {
	const { pathname } = useLocation();
	const [{ template }] = useContext_Logs('themes');

	return (
		<nav id='nav' className='absolute right-0 bottom-0 flex flex-row hidden md:block items-stretch'>
			{navigation.pages.map(({ label, url }, i) => {
				return (
					<NavLink
						to={url}
						key={i}
						className={`inline-block bg-${template.background}-300 border-t border-l border-r rounded-t ${pathname == url ? 'text-color-blue' : 'text-red-500'} mr-3 px-4 py-1`}
					>
						{label}
					</NavLink>
				);
			})}
		</nav>
	);
}
