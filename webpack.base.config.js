// 基本配置 (base config) 包含在两个环境共享的配置，例如，输出路径 (output path)，别名 (alias) 和 loader
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    output: {
        // clean: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(s[ac]|c)ss/,
                use: ['vue-style-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [new VueLoaderPlugin()],
    mode: 'development',
}
