import React from 'react';
import Card from './Card';

import * as style from 'assets/css/gallery.module.css';

export default function Masonry({ bricks }) {
	const defaultClass =
		'flex justify-center align-center rounded-lg shadow-xl border-solid bg-gray-200';

	return (
		<div className={style.masonry}>
			{bricks.map(function (c, i) {
				const { grid } = c;
				return (
					<div
						key={`brick-${i}`}
						className={defaultClass}
						style={{ ...grid, border: `${c.mainColor} 1px solid` }}
					>
						<Card data={c} />
					</div>
				);
			})}
		</div>
	);
}
