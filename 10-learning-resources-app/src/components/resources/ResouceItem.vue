<script>
export default {
    props: ["resource"]
}
</script>

<template>
    <li>
        <div>
            <header>
                <h3>{{ resource.title }}</h3>
                <button>Delete</button>
            </header>
        </div>
        <p>{{ resource.description }}</p>
        <nav>
            <a :href="resource.link">View Resource</a>
        </nav>
    </li>
</template>