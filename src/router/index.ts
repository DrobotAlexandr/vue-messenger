import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        component: () => import(/* webpackChunkName: "main" */ '../views/MainView/MainView.vue'),
        alias: '/m/'
    },
    {
        path: '/m/:chatId',
        name: 'chat',
        component: () => import(/* webpackChunkName: "chat" */ '../views/ChatView/ChatView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
