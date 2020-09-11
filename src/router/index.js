import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Story from '@/views/Story.vue';

/** @type {import('vue-router').RouteRecordRaw[]} */
const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            keepAlive: true,
        },
    },
    {
        path: '/about',
        component: About,
        meta: {
            keepAlive: true,
        },
    },
    {
        path: '/story/:id(\\d+)',
        component: Story,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;