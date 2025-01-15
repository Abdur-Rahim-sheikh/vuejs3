const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'nadu',
                    name: 'Nadia Islam',
                    phone: '9929557',
                    email: 'nadu@yahoo.com'
                },
                {
                    id: 'abir',
                    name: 'Abir Loves Nadia',
                    phone: '789654258',
                    email: 'abir@hohoo.com'
                },
            ]
        }
    }
});

app.component('friend-contact', {
    props: {
        friend: {
            type: Object,
            required: true,
        },
    },

    template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="showDetails=!showDetails">{{showDetails?'Hide':'Show'}} Details</button>
        <ul v-if="showDetails">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            showDetails: false,
        }
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails
        }
    }
})

app.mount('#app')