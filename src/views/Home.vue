<template>
    <loading-circle v-if="loading && daily.length === 0"></loading-circle>

    <div v-else style="padding:16px 16px">
        <template v-for="dailyItem in daily" :key="dailyItem.date">
            <div class="text-bold h3 mb-2" style="margin-top:24px">{{ dailyItem.date }}</div>
            <template
                v-for="storyItem in dailyItem.stories"
                :key="storyItem.id"
            >
                <router-link :to="`/story/${storyItem.id}`" custom v-slot="{ navigate }">
                    <story-card
                        :id="storyItem.id"
                        :title="storyItem.title"
                        :url="storyItem.url"
                        :hint="storyItem.hint"
                        :image="storyItem.images[0]"
                        :hue="storyItem.hue"
                        @click="navigate"
                    ></story-card>
                </router-link>
            </template>
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

        <div class="modal modal-sm" :class="{ 'active': calendarDialogVisible }">
            <div class="modal-overlay"></div>
            <div class="modal-container">
                <div class="modal-header">
                    <button class="btn btn-clear float-right" @click="calendarDialogVisible = false"></button>
                    <div class="modal-title h5">查看历史日报</div>
                </div>
                <div class="modal-body">
                    <calendar @clickDate="calendarClick"></calendar>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" @click="calendarDialogVisible = false">关闭</button>
                </div>
            </div>
        </div>

        <teleport to="#navbar-item">
            <button
                v-if="$route.path === '/'"
                class="btn btn-link"
                style="color:#fff!important"
                @click="calendarDialogVisible = true"
            >查看历史日报</button>
        </teleport>
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
import Calendar from '@/components/Calendar.vue';

export default {
    components: {
        storyCard,
        LoadingCircle,
        Calendar,
    },
    setup() {
        const daily = reactive([]);
        const loading = ref(false);
        const nextLoadDate = ref(new Date);
        const loadMoreBtn = ref(null);
        const calendarDialogVisible = ref(false);

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

        /**
         * @param {Date} date
         */
        const calendarClick = date => {
            if (date.getTime() > Date.now()) return;
            nextLoadDate.value = date;
            calendarDialogVisible.value = false;
            daily.length = 0;
            loadStories();
        };

        onMounted(() => {
            loadStories();
        });

        return {
            loading,
            daily,
            nextLoadDate,
            loadStories,
            loadMoreBtn,
            calendarDialogVisible,
            calendarClick,
        };
    },
}
</script>