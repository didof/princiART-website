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
			className={`bg-${template.secondary}-300 flex items-center justify-around fixed w-full`}
		>
			<Brand />
			<Burger />
			<Navigator />
		</header>
	);
}