import { createRouter, createWebHistory } from 'vue-router'
import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestsReceived from './pages/requests/RequestsRecieved.vue'
import NotFound from './pages/NotFound.vue'
import UserAuth from './pages/auth/UserAuth.vue'

import store from './store/index.js'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', name: "coaches", component: CoachesList },
        {
            path: '/coaches/:id',
            name: "coach-detail",
            component: CoachDetail,
            props: true,
            children: [
                { path: 'contact', name: 'coach-contact', component: ContactCoach }
            ]
        },
        { path: '/register', name: 'register-coach', component: CoachRegistration, meta: { requiresAuth: true } },
        { path: '/requests', name: 'requests', component: RequestsReceived, meta: { requiresAuth: true } },
        { path: '/auth', name: 'auth', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/:notFound(.*)', name: 'not-found', component: NotFound },
    ]
});

router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next({ name: 'auth' });
    }
    else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        next({ name: 'coaches' });
    }
    else {
        next();
    }
});

export default router;