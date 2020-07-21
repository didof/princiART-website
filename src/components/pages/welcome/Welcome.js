import React from 'react';

import { dev } from 'assets/globals';

export default function Welcome() {
	return (
		<section>
			welcome<div>{dev.lorem(20)}</div>
		</section>
	);
}
