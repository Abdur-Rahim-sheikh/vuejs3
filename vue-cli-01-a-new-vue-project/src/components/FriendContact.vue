<script>
export default {
    // props: ['name', 'phone', 'email', 'isFavourite'],
    props: {
        friend: {
            type: Object,
            required: true
        }
    },
    emits: ['toggleFavourite', 'deleteFriend'],
    // emits: {
    //     toggleFavourite(id) {
    //         if (id) {
    //             return true;
    //         } else {
    //             console.warn('id is Missing');
    //             return false;
    //         }
    //     }
    // },
    data() {
        return {
            visible: false,
        }

    },
    methods: {
        toggleVisibility() {
            this.visible = !this.visible;
        },
        toggleFavourite() {
            console.log('toggleFavourite');
            this.$emit('toggleFavourite', this.friend.id);
        },
        // emited on-spot
        // deleteFriend() {
        //     this.$emit('deleteFriend', this.friend.id);
        // }
    }
};
</script>

<template>
    <li>
        <h1>{{ friend.name }} {{ friend.isFavourite ? "(dear)" : "" }}</h1>
        <button @click="toggleFavourite">{{ friend.isFavourite ? 'Unfavourite' : 'Favourite' }}</button>
        <button @click="toggleVisibility">Show Details</button>

        <ul v-if="visible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
        <button @click="this.$emit('deleteFriend', friend.id)">Delete</button>
    </li>
</template>
