import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        component: () => import(/* webpackChunkName: "main" */ '../views/MainView/MainView.vue'),
    },
    {
        path: '/chat/:chatId',
        name: 'chat',
        component: () => import(/* webpackChunkName: "chat" */ '../views/ChatView/ChatView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "chat" */ '../views/LoginView/LoginView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
