<template>
    <loading-circle v-if="loading && daily.length === 0"></loading-circle>

    <div style="padding:16px 16px">
        <template v-for="dailyItem in daily" :key="dailyItem.date">
            <div class="text-bold h3 mb-2" style="margin-top:24px">{{ dailyItem.date }}</div>
            <story-card
                v-for="storyItem in dailyItem.stories"
                :key="storyItem.id"
                :id="storyItem.id"
                :title="storyItem.title"
                :url="storyItem.url"
                :hint="storyItem.hint"
                :image="storyItem.images[0]"
                :hue="storyItem.hue"
            ></story-card>
        </template>

        <button
            v-show="daily.length"
            ref="loadMoreBtn"
            class="btn btn-lg btn-primary d-block my-2"
            :class="{
                'loading': loading,
            }"
            style="width:100%"
            :disabled="loading"
            @click="loadStories"
        >加载更多</button>
    </div>
</template>

<script>
import {
    ref,
    reactive,
    onMounted,
} from 'vue';
import axios from 'axios';
import storyCard from '@/components/StoryCard.vue';
import LoadingCircle from '@/components/LoadingCircle.vue';

export default {
    components: {
        storyCard,
        LoadingCircle
    },
    setup() {
        const daily = reactive([]);
        const loading = ref(false);
        const nextLoadDate = ref(new Date);
        const loadMoreBtn = ref(null);

        const loadStories = async () => {
            loading.value = true;

            const beforeDate = new Date(nextLoadDate.value.getTime() + 86400000);
            const padStart20 = val => val.toString().padStart(2, 0);

            const request = await axios.get(`./news/before/${beforeDate.getFullYear() + padStart20(beforeDate.getMonth() + 1) + padStart20(beforeDate.getDate())}`);
            daily.push({
                date: `${nextLoadDate.value.getFullYear()} 年 ${nextLoadDate.value.getMonth() + 1} 月 ${nextLoadDate.value.getDate()} 日`,
                stories: request.data.stories,
            });
            nextLoadDate.value.setDate(nextLoadDate.value.getDate() - 1);
            loading.value = false;
        }

        onMounted(() => {
            loadStories();
            new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) loadStories();
            }).observe(loadMoreBtn.value);
        });


        return {
            loading,
            daily,
            nextLoadDate,
            loadStories,
            loadMoreBtn,
        };
    },
}
</script>