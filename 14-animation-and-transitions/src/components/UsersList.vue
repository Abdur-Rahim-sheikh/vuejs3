<script>
export default {
    data() {
        return {
            users: ['max', 'manu', 'julie', 'Angela', 'micheal'],
            newUser: ''
        }
    },
    methods: {
        addUser() {
            if (this.newUser === '' || this.users.includes(this.newUser)) {
                alert('Please enter a valid username');
                return;
            }
            this.users.push(this.newUser);
            this.newUser = '';
        },
        removeUser(user) {
            this.users = this.users.filter(u => u !== user);
        }
    }
}
</script>

<template>

    <transition-group tag="ul" name="user">
        <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
    </transition-group>


    <div>
        <input v-model.lazy="newUser" type="text">
        <button @click="addUser">Add User</button>
    </div>
</template>

<style scoped>
ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}

li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
    cursor: alias;
}

.user-enter-from,
.user-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

.user-enter-active,
.user-leave-active {
    transition: all 1s ease-out;
}

.user-enter-to,
.user-leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>