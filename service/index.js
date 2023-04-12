/** 服务端代码SSR：
 *  createSSRApp
 *  renderToString：
 *  接收一个 Vue 应用实例作为参数，返回一个 Promise，当 Promise resolve 时得到应用渲染的 HTML
 *  也可以使用 Node.js Stream API 或者 Web Streams API 来执行流式渲染
 */
import express from 'express'
import { createApp } from '../app.js'
import { renderToString } from 'vue/server-renderer'

const server = express()

server.get('/', async (req, res) => {
    const app = createApp()
    const htmlString = await renderToString(app)
    console.log(htmlString)

    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">${htmlString}</div>
      </body>
    </html>
    `)
})

server.listen(8000, () => {
    console.log('server start--')
})
