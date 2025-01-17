<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com',
                    isFavourite: true
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com',
                    isFavourite: false
                }
            ]
        }
    },
    methods: {
        toggleFavouriteStatus(friendId) {
            const friend = this.friends.find(friend => friend.id === friendId);
            friend.isFavourite = !friend.isFavourite;
        }
    }
}
</script>
<template>
    <header>
        <h1>My Friends</h1>
    </header>

    <ul>
        <FriendContact v-for="friend in friends" :key="friend.id" :friend="friend"
            @toggleFavourite="toggleFavouriteStatus"></FriendContact>

    </ul>
</template>