module.exports = {
	extends: '@10up/eslint-config',
	plugins: ['react'],
	rules: {
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
	},
	globals: {
		module: true,
		process: true,
		wp: true,
		lodash: true,
	},
};
