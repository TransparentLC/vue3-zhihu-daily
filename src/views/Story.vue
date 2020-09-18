<template>
    <loading-circle v-if="loading"></loading-circle>

    <template v-else>
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

        <div style="padding:0 16px">
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

        <div class="modal" :class="{ 'active': commentDialog.visible }">
            <div class="modal-overlay"></div>
            <div class="modal-container">
                <div class="modal-header">
                    <button class="btn btn-clear float-right" @click="commentDialog.visible = false"></button>
                    <div class="modal-title h5">评论</div>
                </div>
                <div class="modal-body">
                    <loading-circle v-if="commentDialog.loading"></loading-circle>
                    <template v-else>
                        <div class="text-bold text-large my-2">{{ commentDialog.long.length }} 条长评</div>
                        <comment
                            v-for="item in commentDialog.long"
                            :key="item.id"
                            :id="item.id"
                            :author="item.author"
                            :content="item.content"
                            :avatar="item.avatar"
                            :time="item.time"
                            :likes="item.likes"
                            :reply="item.reply"
                        ></comment>
                        <div class="text-bold text-large my-2">{{ commentDialog.short.length }} 条短评</div>
                        <comment
                            v-for="item in commentDialog.short"
                            :key="item.id"
                            :id="item.id"
                            :author="item.author"
                            :content="item.content"
                            :avatar="item.avatar"
                            :time="item.time"
                            :likes="item.likes"
                            :reply="item.reply"
                        ></comment>
                    </template>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" @click="commentDialog.visible = false">关闭</button>
                </div>
            </div>
        </div>

        <teleport to="#navbar-item">
            <button
                class="btn btn-sm bg-primary d-flex ml-1"
                style="align-items:center"
            >
                <!-- https://github.com/Templarian/MaterialDesign-SVG/blob/master/svg/thumb-up.svg -->
                <svg fill="#fff" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"/>
                </svg>
                <span class="ml-1">{{ extra.popularity }}</span>
            </button>
            <button
                class="btn btn-sm bg-primary d-flex ml-1"
                style="align-items:center"
                @click="commentDialog.visible = true; loadComment()"
            >
                <!-- https://github.com/Templarian/MaterialDesign-SVG/blob/master/svg/comment-text.svg -->
                <svg fill="#fff" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M5,5V7H19V5H5M5,9V11H13V9H5M5,13V15H15V13H5Z"/>
                </svg>
                <span class="ml-1">{{ extra.comments }}</span>
            </button>
        </teleport>
    </template>
</template>

<script>
import {
    ref,
    reactive,
    computed,
    onMounted,
    nextTick,
} from 'vue';
import {
    useRoute,
    useRouter,
} from 'vue-router';
import axios from 'axios';
import LoadingCircle from '@/components/LoadingCircle.vue';
import Question from '@/components/Question.vue';
import Comment from '@/components/Comment.vue';

export default {
    components: {
        LoadingCircle,
        Question,
        Comment,
    },
    setup() {
        const loading = ref(false);
        const questions = reactive([]);
        const title = ref('');
        const image = ref('');
        const credit = ref('');
        const extra = reactive({
            longComments: 0,
            shortComments: 0,
            popularity: 0,
            comments: 0,
        });
        const commentDialog = reactive({
            visible: false,
            loading: true,
            loaded: false,
            long: [],
            short: [],
        });
        const id = useRoute().params.id;

        const loadStory = async () => {
            loading.value = true;

            const [response, extraResponse] = await Promise.all([
                axios.get(`./news/${id}`),
                axios.get(`./story-extra/${id}`),
            ]);
            title.value = response.data.title;
            image.value = response.data.image;
            credit.value = response.data.image_source;
            extra.longComments = extraResponse.data.long_comments;
            extra.shortComments = extraResponse.data.short_comments;
            extra.popularity = extraResponse.data.popularity;
            extra.comments = extraResponse.data.comments;

            const parsed = (new DOMParser).parseFromString(response.data.body, 'text/html');
            Array.from(parsed.querySelectorAll('.question')).forEach(el => {
                const title = el.querySelector('.question-title')?.innerText;
                const author = el.querySelector('.meta .author')?.innerText.replace(/，$/, '');
                const bio = el.querySelector('.meta .bio')?.innerText;
                const avatar = el.querySelector('.meta img.avatar')?.src;
                const origin = el.querySelector('.meta .originUrl')?.href;

                const viewMore = el.querySelector('.view-more');
                let discuss;
                if (viewMore) {
                    discuss = viewMore.querySelector('a')?.href;
                    viewMore.parentNode.removeChild(viewMore);
                }

                const contentDOM = el.querySelector('.content');
                Array.from(contentDOM.querySelectorAll('p')).forEach(p => {
                    if (!p.innerHTML.replace(/&nbsp;/, ' ').trim()) p.parentNode.removeChild(p);
                });
                Array.from(contentDOM.querySelectorAll('img.content-image')).forEach(img => {
                    const parentNode = img.parentNode;
                    const grandNode = parentNode.parentNode;
                    img.setAttribute('data-src', img.src);
                    // 1px #f7f7f7
                    img.src = 'data:image/gif;base64,R0lGODdhAQABAIAAAPf39wAAACwAAAAAAQABAAACAkQBADs=';
                    img.style.cssText = 'width:100%;height:240px';
                    img.classList.add('s-rounded', 'img-responsive');

                    if (parentNode.tagName !== 'p') {
                        const imgWrapper = document.createElement('p');
                        imgWrapper.appendChild(img);
                        grandNode.insertBefore(imgWrapper, parentNode);
                        grandNode.removeChild(parentNode);
                    }
                });
                Array.from(contentDOM.querySelectorAll('a')).forEach(a => {
                    if (a.href.match(/^https?:\/\/link\.zhihu\.com\/\?target=/)) {
                        a.href = decodeURIComponent(new URL(a.href).searchParams.get('target'));
                    }
                });
                Array.from(contentDOM.querySelectorAll('pre')).forEach(pre => {
                    pre.style.overflowY = 'auto';
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
        }

        const loadComment = async () => {
            if (commentDialog.loaded) return;

            commentDialog.loading = true;

            const [ longResponse, shortResponse ] = await Promise.all([
                axios.get(`./story/${id}/long-comments`),
                axios.get(`./story/${id}/short-comments`),
            ]);

            commentDialog.long = longResponse.data.comments.map(e => {
                e.time = new Date(e.time * 1000);
                if (e.reply_to) {
                    e.reply = e.reply_to;
                    delete e.reply_to;
                } else {
                    e.reply = {};
                }
                return e;
            });
            commentDialog.short = shortResponse.data.comments.map(e => {
                e.time = new Date(e.time * 1000);
                if (e.reply_to) {
                    e.reply = e.reply_to;
                    delete e.reply_to;
                } else {
                    e.reply = {};
                }
                return e;
            });

            commentDialog.loading = false;
            commentDialog.loaded = true;
        };

        onMounted(loadStory);

        return {
            loading,
            questions,
            title,
            image,
            credit,
            extra,
            commentDialog,
            loadComment,
        };
    },
}
</script>