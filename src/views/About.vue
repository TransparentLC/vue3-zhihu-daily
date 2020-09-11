<template>
    <h1>关于</h1>
    <p>Vue 3 试水项目，知乎日报网页版。</p>
    <p>API 文档来自<a href="https://www.jianshu.com/p/ee556871da51" target="_blank">知乎日报 API 分析</a>，本项目与知乎无关。</p>
</template>

<script>
import { onMounted } from 'vue';

export default {
    setup() {
        onMounted(() => console.log('about mounted'));
    },
}
</script>