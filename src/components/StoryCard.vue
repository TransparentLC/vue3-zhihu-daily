<template>
    <div class="card mb-2 c-hand">
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