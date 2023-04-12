module.exports = {
    entry: './service/index.js',
    devtool: 'source-map',
    target: 'node',
    output: {
        libraryTarget: 'commonjs2',
    },
    optimization: {
        splitChunks: false, // 关闭代码切割
    },
}
