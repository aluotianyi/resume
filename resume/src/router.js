import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Index.vue')
        },
        {
            path: '/mobile',
            name: 'home',
            component: () => import('./views/mobile.vue')
        },
        {
            path: '/pc',
            name: 'home',
            component: () => import('./views/pc.vue')
        },
    ]
})
