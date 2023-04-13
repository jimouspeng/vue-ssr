// 服务端代码
const process = require('process')
const fs = require('fs')
const path = require('path')
const express = require('express')
const server = express()
// const { createApp, renderIndex } = require('./app.js')

const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const indexTemplate = fs.readFileSync('./template.html', 'utf-8')
const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    template: indexTemplate, // （可选）页面模板
    clientManifest, // （可选）客户端构建 manifest
})

console.log('renderer: ', renderer)

server.use('/dist', express.static(path.resolve(process.cwd(), 'dist')))

server.get('*', (req, res) => {
    if (req.url === '/favicon.ico') {
        res.end('')
        return
    }
    // const app = createApp({
    //     url: req.url,
    // })
    /** context: 渲染上下文对象 作为 renderToString 函数的第二个参数，来提供插值数据 */
    const context = {
        url: req.url,
        name: 'jimous',
        meta: `<meta name="keyword" content="vue,ssr">`,
    }
    renderer.renderToString(context, (err, htmlStr) => {
        if (!htmlStr) {
            res.status(500).end('Internal Server Error')
        } else {
            res.end(htmlStr)
        }
        console.log(err, '???????????????')
    })
    console.log('\n内存使用：', process.memoryUsage().heapUsed)
})

server.listen(8000, () => {
    console.log('server start ~~')
})
