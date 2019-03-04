export const webRouter = [{
        path: '/',
        name: 'home',
        component: () => import( /* home */ '@/views/index.vue')
    }
]

export const routers = [
    ...webRouter
]