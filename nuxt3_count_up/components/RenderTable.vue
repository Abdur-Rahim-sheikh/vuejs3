<script setup>
const { table } = defineProps(['table'])

</script>

<template>
    <span v-if="table.length === 0">No data provided</span>
    <div v-else>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>id</th>
                    <th>age</th>
                    <th>weight</th>
                    <th>height</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in table" :key="row[0]">
                    <td>{{ row[0] }}</td>
                    <td>
                        <CountUp :value="row[1]" />
                    </td>
                    <td>
                        <CountUp :value="row[2]" />
                    </td>
                    <td>
                        <CountUp :value="row[3]" />
                    </td>
                </tr>
            </tbody>
        </table>
        <div>Here
            <CountUp :value="5" />
        </div>
    </div>
</template>