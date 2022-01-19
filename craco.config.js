const CracoLessPlugin = require('craco-less');

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@primary-color': '#e5171a',
							'@table-row-hover-bg': '#ffe9e6'
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
