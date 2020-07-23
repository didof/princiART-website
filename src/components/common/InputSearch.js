import React from 'react';

import searchIcon from 'assets/svg/searchIcon';

export default function InputSearch() {
	return (
		<div className='flex items-center rounded-full bg-white shadow-xl text-gray-600'>
			<input
				type='search'
				placeholder='type picture title'
				className='rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none'
			/>
			<div className='p-2'>
				<button className='bg-blue-500 text-white rounded-full p-2 focus:outline-none w-12 h-12 flex items-center justify-center shadow-xl'>
					{searchIcon}
				</button>
			</div>
		</div>
	);
}
