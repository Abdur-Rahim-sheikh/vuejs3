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
            this.users.unshift(this.newUser);
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


    <div class="insert-list">
        <input v-model.lazy="newUser" type="text" @keyup.enter="addUser" />
        <button @click="addUser">Add User</button>
    </div>
</template>

<style scoped>
.insert-list {
    display: flex;
}

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

.user-enter-active {
    transition: all 1s ease-out;
}

.user-leave-active {
    transition: all 1s ease-in;
    position: absolute;
}

.user-enter-to,
.user-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.user-move {
    transition: transform 1s ease;
}
</style>