module.exports = {
	app: {
		title: 'PrinciART',
		themeColor: '#4285f4',
		defaultTemplateName: 'dawn',
	},
	navigation: {
		pages: [
			{
				label: 'Gallery',
				url: '/',
			},
			{
				label: 'Biography',
				url: '/bio',
			},
			{
				label: 'Contact',
				url: '/contact',
			},
		],
	},
	dev: {
		lorem: function (num) {
			const template =
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat, nisi quis blandit fringilla, arcu nisl dictum velit, ac mattis turpis dolor eu nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris euismod dolor vitae urna maximus, aliquet posuere odio dictum. Fusce lobortis neque at eros eleifend, ac ultrices felis condimentum. Praesent arcu est, tempor in sagittis sed, suscipit ac lacus. Duis aliquam ex quis fringilla egestas. Ut commodo ligula semper, lacinia quam vitae, pellentesque nunc. Phasellus aliquam, nunc vitae interdum porttitor, dui erat semper arcu, interdum dignissim nunc erat at leo. Morbi sollicitudin justo sed nibh convallis malesuada. Phasellus ligula ex, dapibus at fringilla vitae, ullamcorper nec justo. Etiam libero arcu, laoreet vel eros imperdiet, dapibus elementum metus. Sed pretium dui eget mollis rhoncus. Proin aliquam bibendum odio ac tristique.';
			let output = template;
			while (num > 0) {
				output += template;
				num--;
			}
			return output;
		},
	},
};
