const webpack = require('webpack')

module.exports = {
	chainWebpack: (config) => {
		config
			.plugin('ContextReplacementPlugin')
			.use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/])
	},
	devServer: {
		proxy: {
			'/api': {
				target: process.env.VUE_APP_HOST,
				ws: true,
				secure: false,
				changeOrigin: true
			},
			'/foo': {
				target: '<other_url>'
			}
		}
	},
    css: {
		// 是否使用css分离插件
		extract: true,
		// 开启 CSS source maps?
		sourceMap: false,
		// css预设器配置项
		loaderOptions: {
			sass: {
				additionalData: `
					@import '@/styles/variable.scss';
				`
			},
			postcss: {
				plugins: [
					require('postcss-pxtorem')({
						rootValue: 32,
						propList: ['*'],
						minPixelValue: 1,
						exclude: 'vant'
					})
				]
			}
		},
	}
}