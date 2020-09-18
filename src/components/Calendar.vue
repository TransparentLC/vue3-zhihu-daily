<template>
    <div class="calendar">
        <div class="calendar-nav navbar">
            <button
                class="btn btn-action btn-link btn-lg"
                @click="prevMonth"
            >
                <!-- https://github.com/Templarian/MaterialDesign-SVG/blob/master/svg/chevron-left.svg -->
                <svg fill="#3b4351" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
                </svg>
            </button>
            <div class="navbar-primary">{{ header }}</div>
            <button
                class="btn btn-action btn-link btn-lg"
                @click="nextMonth"
            >
                <!-- https://github.com/Templarian/MaterialDesign-SVG/blob/master/svg/chevron-right.svg -->
                <svg fill="#3b4351" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                </svg>
            </button>
        </div>

        <div class="calendar-container">
            <div class="calendar-header">
                <div
                    v-for="(item, index) in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']"
                    :key="index"
                    class="calendar-date"
                >{{ item }}</div>
            </div>

            <div class="calendar-body">
                <div
                    v-for="n in firstWeekly"
                    :key="n"
                    class="calendar-date prev-month">
                    <button class="date-item disabled"></button>
                </div>

                <div
                    v-for="n in lastDay"
                    :key ="n"
                    class="calendar-date"
                >
                    <button class="date-item" @click="clickDate(n)">{{ n }}</button>
                </div>

                <div
                    v-for="n in (6 - lastWeekly)"
                    :key="n"
                    class="calendar-date next-month">
                    <button class="date-item disabled"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    ref,
    watch,
    computed,
} from 'vue';

// 如果能直接让Date变成响应式的，哪还有这么多破事？

export default {
    props: {
        year: {
            type: Number,
            default: () => (new Date).getFullYear(),
        },
        month: {
            type: Number,
            default: () => (new Date).getMonth(),
        },
        day: {
            type: Number,
            default: () => (new Date).getDate(),
        },
    },
    setup(props, context) {
        const year = ref(props.year);
        const month = ref(props.month);
        const day = ref(props.day);
        const date = new Date(year.value, month.value, day.value);
        const updateDateProps = () => {
            year.value = date.getFullYear();
            month.value = date.getMonth();
            day.value = date.getDate();
        };

        const header = computed(() => `${year.value} 年 ${month.value + 1} 月`);
        const lastDay = computed(() => (new Date(year.value, month.value + 1, 0).getDate()));
        const firstWeekly = computed(() => (new Date(year.value, month.value, 1).getDay()));
        const lastWeekly = computed(() => (new Date(year.value, month.value + 1, 0).getDay()));

        watch(year, newval => {
            context.emit('update:year', newval);
            date.setFullYear(newval);
            updateDateProps();
        });
        watch(month, newval => {
            context.emit('update:month', newval);
            date.setMonth(newval);
            updateDateProps();
        });
        watch(day, newval => {
            context.emit('update:day', newval);
            date.setDate(newval);
            updateDateProps();
        });

        const prevMonth = () => month.value--;
        const nextMonth = () => month.value++;
        const clickDate = day => context.emit('clickDate', new Date(year.value, month.value, day));

        return {
            date,
            prevMonth,
            nextMonth,
            header,
            lastDay,
            firstWeekly,
            lastWeekly,
            clickDate,
        };
    },
}
</script>