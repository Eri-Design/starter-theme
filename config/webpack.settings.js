/* global module */

// Webpack settings exports.
module.exports = {
	entries: {
		// JS files.
		'admin': './assets/js/admin/admin.js',
		'blocks': './assets/js/blocks/blocks.js',
		'frontend': './assets/js/frontend/frontend.js',
		'shared': './assets/js/shared/shared.js',
		'styleguide': './assets/js/styleguide/styleguide.js',
		'blocks-editor': './includes/blocks/blocks-editor.js',

		// CSS files.
		'admin-style': './assets/css/admin/admin-style.css',
		'editor-style': './assets/css/frontend/editor-style.css',
		'shared-style': './assets/css/shared/shared-style.css',
		'style': './assets/css/frontend/style.css',
		'styleguide-style': './assets/css/styleguide/styleguide.css'
	},
	filename: {
		js: 'js/[name].js',
		css: 'css/[name].css'
	},
	paths: {
		src: {
			base: './assets/',
			css: './assets/css/',
			js: './assets/js/'
		},
		dist: {
			base: './dist/',
			clean: ['./images', './css', './js']
		},
	},
	stats: {
		// Copied from `'minimal'`.
		all: false,
		errors: true,
		modules: true,
		warnings: true,
		// Our additional options.
		assets: true,
		errorDetails: true,
		excludeAssets: /\.(jpe?g|png|gif|svg|woff|woff2)$/i,
		moduleTrace: true,
		performance: true
	},
	copyWebpackConfig: {
		from: 'assets/**/*.{jpg,jpeg,png,gif,svg,eot,ttf,woff,woff2}',
		to: '[path][name].[ext]'
	},
	BrowserSyncConfig: {
		host: 'localhost',
		port: 3000,
		proxy: 'http://eri-scaffold.test',
		open: false,
		files: [
			'**/*.php',
			'dist/js/**/*.js',
			'dist/css/**/*.css',
			'dist/svg/**/*.svg',
			'dist/images/**/*.{jpg,jpeg,png,gif}',
			'dist/fonts/**/*.{eot,ttf,woff,woff2,svg}'
		]
	},
	performance: {
		maxAssetSize: 100000
	},
	manifestConfig: {
		basePath: ''
	},
};
