import { createRouter, createWebHistory } from 'vue-router'
import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestsReceived from './pages/requests/RequestsRecieved.vue'
import NotFound from './pages/NotFound.vue'
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
        { path: '/register', name: 'register-coach', component: CoachRegistration },
        { path: '/requests', name: 'requests', component: RequestsReceived },
        { path: '/:notFound(.*)', name: 'not-found', component: NotFound },
    ]
});

export default router;