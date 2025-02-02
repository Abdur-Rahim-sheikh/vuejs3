// import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import CoachesList from './pages/coaches/CoachesList.vue'
import store from './store/index.js'

// router does not definceAsyncComponent to make it work.
const CoachDetail = () => import('./pages/coaches/CoachDetail.vue')
const CoachRegistration = () => import('./pages/coaches/CoachRegistration.vue')
const NotFound = () => import('./pages/NotFound.vue')
const RequestsReceived = () => import('./pages/requests/RequestsReceived.vue')
const UserAuth = () => import('./pages/auth/UserAuth.vue')
const ContactCoach = () => import('./pages/requests/ContactCoach.vue')

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