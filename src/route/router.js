import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                redirect: '/index',
            },
            {
                path: '/index',
                name: 'index',
                component: import('../pages/user-info/index.vue'),
            },
            {
                path: '/user',
                name: 'user',
                component: import('../pages/user-page/index.vue'),
            },
        ],
    })
}
