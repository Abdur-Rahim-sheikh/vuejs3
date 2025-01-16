<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                }
            ]
        }
    }
}
</script>
<template>
    <header>
        <h1>My Friends</h1>
    </header>

    <ul>
        <FriendContact name="abir" phone="019" email="@kabir" isFavourite="2"></FriendContact>
        <FriendContact name="nadu" email="@nabir"></FriendContact>

    </ul>
</template>