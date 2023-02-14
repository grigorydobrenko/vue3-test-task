import {createRouter, createWebHistory} from 'vue-router'
import Table from '../views/Table.vue'
import Layout from "@/views/Layout";

const routes = [
    {
        path: '/table',
        name: 'table',
        component: Table
    },
    {
        path: '/layout',
        name: 'layout',
        component: Layout
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
