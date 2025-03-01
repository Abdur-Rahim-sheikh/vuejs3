<script setup>

const generate = (m) => {
    const data = reactive([])
    for (let i = 0; i < m; i++) {

        data.push([
            i,
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100)
        ])
    }
    return data
}
const increment = (table) => {
    let x = Math.floor(Math.random() * table.value.length)
    let y = Math.floor(Math.random() * (table.value[0].length - 1)) + 1
    table.value[x][y] += Math.floor(Math.random() * 10) + 1

    console.log(x, y, table.value[x][y])
}

const table = useState('table', () => generate(3))
console.log(table.value)
let id = null;
onMounted(() => {
    // table.value = generate(3)
    id = setInterval(() => {
        increment(table)
    }, 5 * 1000)
})

onUnmounted(() => {
    clearInterval(id)
})
</script>

<template>
    <div>
        <RenderTable :table="table" />
    </div>
</template>
