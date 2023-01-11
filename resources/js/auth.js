import { createAuth } from '@websanova/vue-auth';
import auth from '@websanova/vue-auth/dist/drivers/auth/bearer.esm';
import http from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm.js';
import router from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js';
import driverOAuth2Google from '@websanova/vue-auth/dist/drivers/oauth2/google.esm.js';
import driverOAuth2Facebook from '@websanova/vue-auth/dist/drivers/oauth2/facebook.esm.js';

export default (app) => {
    const config = {
        plugins: {
            http: app.axios,
            router: app.router,
        },
        drivers: {
            auth,
            http,
            router,
            oauth2: {
                google: driverOAuth2Google,
                facebook: driverOAuth2Facebook,
            },
        },
        options: {
            tokenDefaultName: 'laravel-vue-spa',
            tokenStore: ['localStorage'],
            registerData: { url: 'api/auth/register', method: 'POST', redirect: '/login' },
            loginData: { url: 'api/auth/login', method: 'POST', redirect: '', fetchUser: true },
            logoutData: { url: 'api/auth/logout', method: 'POST', redirect: '/', makeRequest: true },
            fetchData: { url: 'api/auth/user', method: 'GET', enabled: true },
            refreshData: { url: 'api/auth/refresh', method: 'GET', enabled: true, interval: 30 },
            rolesKey: 'role',
        },
    };
    app.auth = createAuth(config);
    app.use(app.auth);
};