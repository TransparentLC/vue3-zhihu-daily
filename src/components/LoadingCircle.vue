<template>
    <div v-if="loading" style="margin:32px 0">
        <div class="loading loading-lg my-2"></div>
        <div class="text-center text-primary">
            <small>Loading</small>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        loading: Boolean,
    },
}
</script>