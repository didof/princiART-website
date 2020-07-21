import React from 'react';
import { NavLink } from 'react-router-dom';

import { navigation } from 'assets/globals';

export default function Navigator() {
	return (
		<nav id="nav" className='flex flex-row hidden md:block'>
			{navigation.pages.map(({ label, url }, i) => {
				return (
					<NavLink
						to={url}
						key={i}
						className='p-5'
						isActive={(match) => {
							if (!match) return false;
							return match.url === url;
						}}
					>
						{label}
					</NavLink>
				);
			})}
		</nav>
	);
}
