import { createRouter, createWebHistory } from 'vue-router'

import TeamsList from './pages/TeamsList.vue'
import UsersList from './pages/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './pages/NotFound.vue'
import TeamsFooter from './pages/TeamsFooter.vue'
import UsersFooter from './pages/UsersFooter.vue'

const router = createRouter({
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams',
            meta: { needsAuth: true },
            // component: TeamsList,
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [
                { name: "team-members", path: ':teamId', component: TeamMembers, props: true }
            ]
        },
        {
            name: "users",
            path: '/users',
            components: {
                default: UsersList, footer: UsersFooter
            },
            beforeEnter(to, from, next) {
                console.log('users beforeEnter')
                console.log(to, from)
                next()
            }
        },

        // { path: '/:notFound(.*)', redirect: '/teams' }
        { path: '/:notFound(.*)', component: NotFound }
    ],
    scrollBehavior(_, _2, savedPosition) {
        // console.log(to, from, savedPosition)
        if (savedPosition) {
            return savedPosition
        }
        return { left: 0, top: 0 }
    },
    history: createWebHistory()
})

router.beforeEach(function (to, from, next) {
    console.log('Global beforeEach')
    console.log(to, from)
    // if (to.name === 'team-members') {
    //     next()
    // } else {
    //     next({ name: 'team-members', params: { teamId: 't2' } })
    // }
    console.log('needs auth', to.name, to.meta.needsAuth)
    next()
})

router.afterEach(function (to, from) {
    console.log('Global afterEach')
    console.log(to, from)
})

export default router