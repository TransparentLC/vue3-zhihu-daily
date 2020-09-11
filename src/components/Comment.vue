<template>
    <div class="tile my-2">
        <div class="tile-icon">
            <div class="avatar">
                <img :src="avatar">
            </div>
        </div>
        <div class="tile-content">
            <div class="tile-title d-flex">
                <div class="text-bold">{{ author }}</div>
                <div style="flex-grow:1"></div>
                <div class="text-gray d-flex" style="align-items:center">
                    <!-- https://github.com/Templarian/MaterialDesign-SVG/blob/master/svg/thumb-up.svg -->
                    <svg fill="#bcc3ce" width="18" height="18" viewBox="0 0 24 24">
                        <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
                    </svg>
                    <span class="ml-1">{{ likes }}</span>
                </div>
            </div>
            <div class="tile-subtitle">
                <div style="white-space:pre-wrap">{{ content }}</div>
                <div v-if="reply.content" class="p-2 s-rounded" style="background-color:#f3f3f3">
                    <span class="text-bold">{{ reply.author }}：</span>
                    <span style="white-space:pre-wrap">{{ reply.content }}</span>
                </div>
            </div>
            <small class="text-gray">
                {{ `${time.getFullYear()}-${(time.getMonth() + 1).toString().padStart(2, 0)}-${time.getDate().toString().padStart(2, 0)}` }}
                {{ `${time.getHours().toString().padStart(2, 0)}:${time.getMinutes().toString().padStart(2, 0)}:${time.getSeconds().toString().padStart(2, 0)}` }}
            </small>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        author: String,
        content: String,
        avatar: String,
        time: Date,
        likes: Number,
        reply: Object,
    },
}
</script>