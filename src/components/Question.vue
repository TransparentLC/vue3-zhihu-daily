<template>
    <div class="text-bold h5" style="margin:16px 0">{{ title }}</div>

    <div v-if="avatar || author || bio" class="my-2">
        <div v-if="avatar" class="avatar avatar-lg mr-2 bg-gray float-left">
            <img :src="avatar">
        </div>
        <div v-if="author || bio">
            <div class="text-bold">{{ author }}</div>
            <div class="text-gray text-ellipsis">{{ bio || '&nbsp;' }}</div>
        </div>
    </div>

    <div ref="container" v-html="content"></div>

    <!-- <a
        v-if="origin"
        :href="origin"
        class="btn d-block my-2"
        target="_blank"
    >查看知乎原文</a> -->
    <a
        v-if="discuss"
        :href="discuss"
        class="btn d-block mt-2"
        style="margin-bottom:24px"
        target="_blank"
    >查看知乎讨论</a>
</template>

<script>
import {
    ref,
    nextTick,
    onMounted,
    onBeforeUnmount,
} from 'vue';

const lazyloadObserver = new IntersectionObserver(
    entries => entries
        .filter(entry => entry.isIntersecting)
        .map(entry => entry.target)
        .forEach(img => {
            const preload = new Image;
            const src = img.getAttribute('data-src');
            preload.onload = preload.onerror = () => {
                img.src = src;
                img.removeAttribute('data-src');
                img.style.cssText = '';
                img.classList.remove('s-rounded');
            };
            preload.src = src;
            lazyloadObserver.unobserve(img);
        })
);

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
    setup(props) {
        const container = ref(null);
        let image;

        onMounted(() => {
            image = Array.from(container.value.querySelectorAll('img[data-src]'));
            nextTick(() => image.forEach(img => lazyloadObserver.observe(img)));
        });

        onBeforeUnmount(() => image.forEach(img =>lazyloadObserver.unobserve(img)));

        return {
            container,
        };
    },
}
</script>