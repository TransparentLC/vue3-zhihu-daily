<template>
    <loading-circle :loading="loading && daily.length === 0"></loading-circle>

    <div class="px-2">
        <template v-for="dailyItem in daily" :key="dailyItem.date">
            <div class="text-bold text-large my-2">{{ dailyItem.date }}</div>
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
            v-if="daily.length"
            class="btn btn-primary d-block my-2"
            :class="{
                'loading': loading,
            }"
            style="width:100%"
            :disabled="loading"
            @click="loadStories(nextDate); nextDate.setDate(nextDate.getDate() - 1)"
        >加载更多</button>
    </div>
</template>

<script>
import {
    ref,
    reactive,
    watch,
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
        const nextDate = ref(new Date)

        /**
         * @param {Date} date
         */
        const loadStories = async date => {
            loading.value = true;

            const beforeDate = new Date(date.getTime() + 86400000);
            const padStart20 = val => val.toString().padStart(2, 0);

            const request = await axios.get(`./news/before/${beforeDate.getFullYear() + padStart20(beforeDate.getMonth() + 1) + padStart20(beforeDate.getDate())}`);
            daily.push({
                date: `${date.getFullYear()} 年 ${date.getMonth() + 1} 月 ${date.getDate()} 日`,
                stories: request.data.stories,
            });
            loading.value = false;
        }

        onMounted(() => {
            loadStories(nextDate.value);
            nextDate.value.setDate(nextDate.value.getDate() - 1);
        });

        return {
            loading,
            daily,
            nextDate,
            loadStories,
        };
    },
}
</script>