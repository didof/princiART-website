import React from 'react';


export default function Card({ data }) {
	const { title, description, tecnique, realDimension } = data;
	return (
		<div className='max-w-sm rounded overflow-hidden shadow-lg'>
			<img
				className='w-full rounded-lg'
				src={`src/assets/pictures/${data.title}.jpg`}
				style={{ objectFit: 'cover' }}
			/>
		</div>
	);
}
