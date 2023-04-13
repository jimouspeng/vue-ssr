// app.js (在服务器和客户端之间共享)
import Vue from 'vue'
import App from './src/App.vue'

/** 路由配置 */
import { createRouter } from './src/router.js'
// 返回工厂函数，避免状态单例
export const createApp = function (context) {
    const router = createRouter()
    const app = new Vue({
        data: {
            url: context?.url,
        },
        router,
        render: (h) => h(App),
    })
    return { app, router }
}
