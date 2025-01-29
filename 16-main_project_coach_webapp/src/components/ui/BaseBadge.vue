<script>
import { mapActions } from 'vuex';

export default {
    props: {
        type: {
            type: String,
            required: true,
        },
        title: String
    },
    computed: {
        text() {
            return this.title.toUpperCase();
        },
    },
    methods: {
        ...mapActions('coaches', ['badgeExist']),


    },
    created() {
        if (!this.badgeExist(this.type)) {
            console.warn(`Invalid type: ${this.type}`);
        }
    }
};
</script>

<template>
    <span class="badge" :class="type">{{ text }}</span>
</template>

<style>
.badge {
    background-color: #ccc;
    color: #252525;
    border-radius: 30px;
    padding: 0.5rem 1.5rem;
    display: inline-block;
    margin-right: 0.5rem;
}

.frontend {
    background-color: #3d008d;
    color: white;
}

.backend {
    background-color: #71008d;
    color: white;
}

.career {
    background-color: #8d006e;
    color: white;
}
</style>