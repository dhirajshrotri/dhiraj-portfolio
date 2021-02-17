import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/experience',
            name: 'experience',
            component: () => import('./views/Experience.vue')
        },
        // {
        //     path: '/contact',
        //     name: 'contact',
        //     component: () => import('./views/Contact.vue')
        // }
    ]
});