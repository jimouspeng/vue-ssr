// app.js (在服务器和客户端之间共享)
import fs from 'fs'
import Vue from 'vue'
import { createRenderer } from 'vue-server-renderer'
import App from './src/App.vue'

/** 路由配置 */
import { createRouter } from './src/route/router.js'

const indexTemplate = fs.readFileSync('./template.html', 'utf-8')

export const renderIndex = createRenderer({
    // 注入页面模板
    template: indexTemplate,
})
// 返回工厂函数，避免状态单例
export const createApp = function (context) {
    const router = createRouter()
    const app = new Vue({
        data: {
            url: context.url,
        },
        router,
        render: (h) => h(App),
    })
    return { app, router }
}
