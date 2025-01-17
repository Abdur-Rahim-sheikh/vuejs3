<script>
export default {
    emits: ['addFriend'],
    data() {
        return {
            name: '',
            phone: '',
            email: ''
        }
    },
    methods: {
        submitFriendData() {
            this.$emit('addFriend', {
                name: this.name,
                phone: this.phone,
                email: this.email
            });
        }
    }
};
</script>

<template>
    <form @submit.prevent="submitFriendData">
        <div>
            <label>Name</label>
            <input v-model="name" type="text" placeholder="Name" />
        </div>
        <div>
            <label>Phone</label>
            <input v-model="phone" type=" tel" placeholder="Phone" />
        </div>
        <div>
            <label>Email</label>
            <input v-model="email" type="email" placeholder="Email" />
        </div>
        <div>
            <button type="submit">Add Friend</button>
        </div>

    </form>
</template>