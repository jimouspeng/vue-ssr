## vue-ssr

#### vue@2.6.14 vue-server-renderer@2.6.14 node@16.14.0

vue-server-renderer 和 vue 必须匹配版本

#### vue-server-renderer/server-plugin

`const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')`

生成的默认文件是：
vue-ssr-server-bundle.json 用于服务器端插件；
vue-ssr-client-manifest.json 用于客户端插件

创建插件实例时可以自定义文件名
`const plugin = new VueSSRServerPlugin({
    filename: 'my-server-bundle.json'
})`

#### render function or template not defined in component: anonymous
动态路由未处理导致报错