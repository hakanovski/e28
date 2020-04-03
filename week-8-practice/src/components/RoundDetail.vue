<template>
    <div v-if='!deleted'>
            <ul>
                <li>Round #: {{ number }}</li>
                <li>Winner: {{ winner }}</li>
                <li><slot name='coin'></slot></li>
                <li><slot name='choice'></slot></li>
            </ul>
            <button @click='$emit("delete-round", number)'>Delete round</button>
        </div>
</template>

<script>
export default {
    data: function () {
        return {
            deleted: false
        }
    },
    props: {
        // `number` has an expected data type of Number, and it defaults to 0
        number: {
            type: Number,
            default: 0
        },
        // `winner` has an expected data type of String, with no default set
        winner: String,
    },
    template: '#round-detail',
    methods: {

    }
}
</script>

<style>
ul {
    border: 3px solid red;
}
</style>