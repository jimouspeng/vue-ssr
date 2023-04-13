const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin.js')
const baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
    entry: {
        server: './entry-server.js',
    },
    output: {
        filename: './server/[name]_[hash].js',
    },
    // 这允许 webpack 以 Node 适用方式(Node-appropriate fashion)处理动态导入(dynamic import)，
    // 并且还会在编译 Vue 组件时，
    // 告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
    target: 'node',
    devtool: 'source-map',
    // 使用 Node 风格导出模块(Node-style exports)
    output: {
        libraryTarget: 'commonjs2',
    },
    // 不打包 node_modules第三方包, 而保留 require 方式直接加载，因为是node应用进程用，所以直接require即可
    externals: nodeExternals({
        // 白名单中的资源依然正常打包
        allowlist: /\.css$/,
    }),
    optimization: {
        splitChunks: false, // 关闭代码切割
    },
    // 这是将服务器的整个输出
    // 构建为单个 JSON 文件的插件。
    // 默认文件名为 `vue-ssr-server-bundle.json`
    plugins: [new VueSSRServerPlugin()],
})
