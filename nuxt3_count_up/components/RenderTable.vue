<script setup>
const { table } = defineProps(['table'])

</script>

<template>
    <span v-if="table.length === 0">No data provided</span>
    <div v-else>
        <table>
            <tr>
                <th>id</th>
                <th>age</th>
                <th>weight</th>
                <th>height</th>
            </tr>

            <tr v-for="row in table" :key="row[0]">
                <td>{{ row[0] }}</td>
                <td>{{ row[1] }}</td>
                <td>{{ row[2] }}</td>
                <td>{{ row[3] }}</td>
            </tr>

        </table>
    </div>
</template>