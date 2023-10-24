import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'main',
        redirect: { name: 'margarita' },
    },
    {
        path: '/margarita',
        component: () => import('@/pages/PageCoctails.vue'),
        name: 'margarita',
    },
    {
        path: '/mojito',
        component: () => import('@/pages/PageCoctails.vue'),
        name: 'mojito',
    },
    {
        path: '/a1',
        component: () => import('@/pages/PageCoctails.vue'),
        name: 'a1',
    },
    {
        path: '/kir',
        component: () => import('@/pages/PageCoctails.vue'),
        name: 'kir',
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404',
    },
    {
        path: '/404',
        name: 'PageError',
        component: () => import('@/pages/PageError.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
