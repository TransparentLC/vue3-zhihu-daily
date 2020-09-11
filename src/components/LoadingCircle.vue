<template>
    <template v-if="loading">
        <div class="loading loading-lg my-2"></div>
        <div class="text-center text-primary">
            <small>Loading</small>
        </div>
    </template>
</template>

<script>
export default {
    props: {
        loading: Boolean,
    },
}
</script>