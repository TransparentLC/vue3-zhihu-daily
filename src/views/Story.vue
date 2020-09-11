<template>
    <loading-circle :loading="loading"></loading-circle>

    <template v-if="!loading">
        <div
            :style="{
                'height': '320px',
                'background-image': `url(${image})`,
                'background-position': 'center',
                'background-size': 'cover',
            }"
            class="p-relative"
        >
            <div
                :style="{
                    'bottom':0,
                    'padding':'1em',
                    'padding-top': '3em',
                    'background': 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5),rgba(0,0,0,.7))',
                    'width': '100%',
                }"
                class="p-absolute"
            >
                <div class="text-bold h4 text-light">{{ title }}</div>
                <div class="text-tiny text-light text-right" style="opacity:.7">{{ credit }}</div>
            </div>
        </div>

        <div class="px-2">
            <question
                v-for="(item, index) in questions"
                :key="index"
                :title="item.title"
                :author="item.author"
                :bio="item.bio"
                :avatar="item.avatar"
                :origin="item.origin"
                :discuss="item.discuss"
                :content="item.content"
            ></question>
        </div>
    </template>
</template>

<script>
import {
    ref,
    reactive,
    computed,
    onMounted,
} from 'vue';
import {
    useRoute,
    useRouter,
} from 'vue-router';
import axios from 'axios';
import LoadingCircle from '@/components/LoadingCircle.vue';
import Question from '@/components/Question.vue';

export default {
    components: {
        LoadingCircle,
        Question,
    },
    setup() {
        const loading = ref(false);
        const questions = reactive([]);
        const title = ref('');
        const image = ref('');
        const credit = ref('');
        const hue = ref('');

        onMounted(async () => {
            loading.value = true;

            const response = await axios.get(`./news/${useRoute().params.id}`);
            title.value = response.data.title;
            image.value = response.data.image;
            credit.value = response.data.image_source;
            hue.value = response.data.image_hue.replace(/^0x/, '#');

            const parsed = (new DOMParser).parseFromString(response.data.body, 'text/html');
            Array.from(parsed.querySelectorAll('.question')).forEach(el => {
                const title = el.querySelector('.question-title')?.innerText;
                const author = el.querySelector('.meta .author')?.innerText.replace(/，$/, '');
                const bio = el.querySelector('.meta .bio')?.innerText;
                const avatar = el.querySelector('.meta img.avatar')?.src;
                const origin = el.querySelector('.meta .originUrl')?.href;

                const viewMore = el.querySelector('.view-more');
                const discuss = viewMore.querySelector('a')?.href;
                viewMore.parentNode.removeChild(viewMore);

                const contentDOM = el.querySelector('.content');
                Array.from(contentDOM.querySelectorAll('p')).forEach(p => {
                    if (!p.innerHTML.replace(/&nbsp;/, ' ').trim()) p.parentNode.removeChild(p);
                });
                Array.from(contentDOM.querySelectorAll('figure img.content-image')).forEach(img => {
                    const parentNode = img.parentNode;
                    const grandNode = parentNode.parentNode;
                    const imgWrapper = document.createElement('p');
                    img.classList.add('img-responsive');
                    imgWrapper.appendChild(img);
                    grandNode.insertBefore(imgWrapper, parentNode);
                    grandNode.removeChild(parentNode);
                });
                Array.from(contentDOM.querySelectorAll('a.wrap.external')).forEach(a => {
                    if (a.href.match(/^https?:\/\/link\.zhihu\.com\/\?target=/)) {
                        a.href = decodeURIComponent(new URL(a.href).searchParams.get('target'));
                    }
                });

                const content = contentDOM.innerHTML;
                questions.push({
                    title,
                    author,
                    bio,
                    avatar,
                    origin,
                    discuss,
                    content,
                });
            });

            loading.value = false;
        });

        return {
            loading,
            questions,
            title,
            image,
            credit,
        };
    },
}
</script>