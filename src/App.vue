<template>
    <div class="container grid-sm px-0">
        <div class="navbar p-2">
            <div class="navbar-section">
                <span class="navbar-brand text-primary text-bold mr-2">知乎日报</span>
                <router-link to="/" class="btn btn-link">Home</router-link>
                <router-link to="/about" class="btn btn-link">About</router-link>
            </div>
        </div>

        <router-view v-slot="{ Component }">
            <keep-alive>
                <component v-if="$route.meta.keepAlive" :is="Component" :key="$route.fullPath"></component>
            </keep-alive>
            <component v-if="!$route.meta.keepAlive" :is="Component"></component>
        </router-view>
    </div>
</template>

<style lang="sass">
$primary-color: #1976D2;
$secondary-color: #E3F2FD;

@import "node_modules/spectre.css/src/spectre";
</style>