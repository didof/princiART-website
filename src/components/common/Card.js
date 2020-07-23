import React from 'react';

function loadImage(name, img) {
	import(`../../assets/pictures/${name}.jpg`)
		.then((src) => (img.src = src.default))
		.catch((err) => console.error(err));
}

function generateImage(container, name) {
	const img = document.createElement('img');
	img.classList.add('w-full', 'rounded-lg');
	container.appendChild(img);

	loadImage(name, img);
}

export default function Card({ data }) {
	const imageRef = React.useRef(null);

	React.useEffect(() => {
		generateImage(imageRef.current, data.title);
	}, []);

	const { title, description, tecnique, realDimension } = data;
	return (
		<div
			className='max-w-sm rounded overflow-hidden shadow-lg'
			ref={imageRef}
		></div>
	);
}
