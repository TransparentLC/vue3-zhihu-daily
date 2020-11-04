<template>
    <svg :fill="color" :width="size" :height="size" viewBox="0 0 24 24">
        <path :d="icon" />
    </svg>
</template>
<script>
import { computed } from 'vue';

export default {
    props: {
        color: String,
        icon: String,
        xSmall: {
            type: Boolean,
            default: false,
        },
        small: {
            type: Boolean,
            default: false,
        },
        medium: {
            type: Boolean,
            default: false,
        },
        large: {
            type: Boolean,
            default: false,
        },
        xLarge: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        return {
            size: computed(() => [24, 12, 16, 28, 36, 40][['xSmall', 'small', 'medium', 'large', 'xLarge'].map(e => props[e]).indexOf(true) + 1]),
        };
    },
}
</script>