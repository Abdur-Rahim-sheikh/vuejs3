import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'

const router = createRouter({
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams',
            // component: TeamsList,
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [
                { name: "team-members", path: ':teamId', component: TeamMembers, props: true }
            ]
        },
        { name: "users", path: '/users', components: { default: UsersList, footer: UsersFooter } },

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
    next()
})

const app = createApp(App)
app.use(router);
app.mount('#app');
