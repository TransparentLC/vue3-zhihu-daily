<template>
    <router-link :to="`/story/${id}`" custom v-slot="{ navigate }">
        <div class="card mb-2 c-hand" @click="navigate">
            <div class="card-body">
                <div
                    class="float-right s-rounded"
                    :style="{
                        'background-image': `url(${image})`,
                        'width': '54px',
                        'height': '54px',
                    }"
                ></div>
                <div>
                    <div class="card-title h5 text-ellipsis pr-1" :title="title">{{ title }}</div>
                    <div class="card-subtitle text-gray pr-1">{{ hint }}</div>
                </div>
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    props: {
        id: Number,
        title: String,
        url: String,
        hint: String,
        image: String,
        hue: String,
    },
}
</script>