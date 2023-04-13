import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import IndexPage from '../pages/user-info/index.vue'
import UserPage from '../pages/user-page/index.vue'

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
                // component: import('../pages/user-info/index.vue'),
                component: IndexPage,
            },
            {
                path: '/user',
                name: 'user',
                // component: import('../pages/user-page/index.vue'),
                component: UserPage,
            },
        ],
    })
}
