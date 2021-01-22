module.exports = {
    publicPath: '',
    integrity: true,
    productionSourceMap: false,
    pluginOptions: {
        webpackBundleAnalyzer: {
            // analyzerMode: 'disabled',
            openAnalyzer: false,
        },
    },
    devServer: {
        proxy: {
            '/*': {
                // target: 'https://zhihu-daily.transparentlc.workers.dev',
                target: 'http://localhost/vue3-zhihu-daily/zhihu-daily.php?',
                changeOrigin: true,
            },
        },
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.externals = {
                'axios': 'axios',
                'vue': 'Vue',
                'vue-router': 'VueRouter',
            };
        }
    },
}