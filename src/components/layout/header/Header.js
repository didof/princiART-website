import React from 'react';

import Brand from './Brand';
import Burger from './Burger';
import Navigator from './Navigator';

import useContext_Logs from 'hooks/useContext_Logs';

export default function Header() {
	const [{ template }] = useContext_Logs('themes');

	return (
		<header
			id='header'
			className={`relative bg-${template.secondary}-300 fixed w-full flex justify-between items-center px-4 h-12 border-b`}
		>
			<Brand />
			<Burger />
			<Navigator />
		</header>
	);
}
