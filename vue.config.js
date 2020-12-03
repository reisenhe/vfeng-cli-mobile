module.exports = {
    css: {
		// 是否使用css分离插件
		extract: true,
		// 开启 CSS source maps?
		sourceMap: false,
		// css预设器配置项
		loaderOptions: {
			postcss: {
				plugins: [
					//假如设计图给的宽度是750，我们通常就会把remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
					require('postcss-px2rem')({
						remUnit: 75
					})
				]
			}
		},
	},
}