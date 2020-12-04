import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        }
    ]
})

export default router