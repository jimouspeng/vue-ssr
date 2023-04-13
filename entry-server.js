// 服务端启动入口

import { createApp } from './app'

export default (context) => {
    /** 在服务端实现路由逻辑,路由处理，数据预取... */
    return new Promise((resolve, reject) => {
        const { app, router } = createApp(context)

        // 设置服务端 router 位置
        router.push(context.url)
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            console.log(context.url, '---', matchedComponents)
            // 匹配不到的路由，执行 reject 函数，并返回 404
            if (!matchedComponents.length) {
                return reject({ code: 404 })
            }
            // Promise 应该 resolve 应用程序实例，以便它可以渲染
            resolve(app)
        })
    }).catch((err) => {
        console.log(err, '执行报错')
    })
}
