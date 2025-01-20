<script>
export default {
    inject: ['addResource'],
    methods: {
        submitData() {
            // error handling

            const title = this.$refs.title.value
            const description = this.$refs.description.value
            const link = this.$refs.link.value
            console.log(title, description, link)
            this.addResource(title, description, link)

        }
    }
}
</script>

<template>
    <BaseCard>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input ref="title" id="title" name="title" type="text" />
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea ref="description" name="description" id="description" rows="3"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input ref="link" name="link" id="link" type="url" />
            </div>
            <div>
                <BaseButton type="submit">Add resource</BaseButton>
            </div>
        </form>
    </BaseCard>
</template>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>