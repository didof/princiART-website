export function injectClass(model, testing = false) {
	const colors = {
		base: 'white',
		sm: 'yellow',
		md: 'red',
		lg: 'green',
		xl: 'blue'
	}

	let string = '';
	Object.entries(model).forEach(function ([key, value]) {
		let prefix = '';
		if (key !== 'base') {
			prefix = String(key) + ':';
		}
		string += prefix + value + ' ';
		if (testing) {
			string += prefix + 'bg-' + colors[key] + '-500 ';
		}
	});
	return String(string);
}
