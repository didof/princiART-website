import React from 'react';

import InputSearch from 'components/common/InputSearch';
import Masonry from 'components/pages/gallery/Masonry';

import pics from 'assets/pictures/pics';

// function generateCards(q = 12) {
// 	function random(l) {
// 		return Math.floor(Math.random() * l);
// 	}

// 	const colors = ['red', 'blue', 'yellow', 'green', 'pink', 'orange'];
// 	const widths = [1, 2];
// 	const heights = [1, 2];

// 	const arr = [];
// 	while (q >= 0) {
// 		arr.push({
// 			backgroundColor: colors[random(colors.length)],
// 			gridColumn: 'auto / span ' + widths[random(widths.length)],
// 			gridRow: 'auto / span ' + heights[random(heights.length)],
// 		});
// 		q--;
// 	}
// 	return arr;
// }

// const cards = generateCards(40);

function generatePictures(data) {
	const autoSpan = 'auto / span ';
	return data.map(function (el) {
		// const [c, r] = el.gridDimensions.split(' ');
		const [c, r] = el.realDimensions.split('x');
		return {
			grid: {
				gridColumn: autoSpan + c / 10,
				gridRow: autoSpan + r / 10,
			},
			meta: {
				category: el.category,
				tags: el.tags,
				alt: el.alt,
			},
			title: el.title,
			description: el.description,
			tecnique: el.tecnique,
			realDimensions: el.realDimensions,
			mainColor: el.mainColor,
			image: require(`../../../assets/pictures/${el.title}.jpg`)
		};
	});
}

const pictures = generatePictures(pics);

export default function Gallery() {
	return (
		<main className='mt-2'>
			<div className='flex mb-4 justify-between'>
				<InputSearch />
			</div>
			<Masonry bricks={pictures} />
		</main>
	);
}
