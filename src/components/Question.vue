<template>
    <div class="text-bold h5 my-2">{{ title }}</div>

    <div v-if="avatar || author || bio" style="margin:16px 0">
        <div v-if="avatar" class="avatar avatar-lg mr-2 bg-gray float-left">
            <img :src="avatar">
        </div>
        <div v-if="author || bio">
            <div class="text-bold">{{ author }}</div>
            <div class="text-gray text-ellipsis">{{ bio || '&nbsp;' }}</div>
        </div>
    </div>

    <div v-html="content"></div>

    <!-- <a
        v-if="origin"
        :href="origin"
        class="btn d-block my-2"
        target="_blank"
    >查看知乎原文</a> -->
    <a
        v-if="discuss"
        :href="discuss"
        class="btn d-block my-2"
        target="_blank"
    >查看知乎讨论</a>
</template>

<script>
export default {
    props: {
        title: String,
        author: String,
        bio: String,
        avatar: String,
        origin: String,
        discuss: String,
        content: String,
    },
}
</script>