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
                target: 'http://localhost/zhihu-daily.php?',
                changeOrigin: true,
            },
        },
    },
}