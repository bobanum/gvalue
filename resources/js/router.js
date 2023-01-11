import { createRouter, createWebHistory } from 'vue-router';
// Pages
import Home from './pages/Home.vue';
import Register from './pages/Register.vue';
import Login from './pages/Login.vue';
import Dashboard from './pages/user/Dashboard.vue';
import AdminDashboard from './pages/admin/Dashboard.vue';
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            auth: undefined
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            auth: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            auth: true
        }
    },
    {
        path: '/admin',
        name: 'admin.dashboard',
        component: AdminDashboard,
        meta: {
            auth: {
                roles: [1,2],
                redirect: { name: 'login' },
                forbiddenRedirect: '/403'
            }
        }
    },
];
export default (app) => {
    app.router = createRouter({
        hashbang: false,
        history: createWebHistory(),
        routes,
    });
    app.use(app.router);
};