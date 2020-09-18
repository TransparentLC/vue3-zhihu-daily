<template>
    <div class="navbar bg-primary p-fixed" style="z-index:1000;width:100%;top:0">
        <div class="navbar-section p-2 container grid-sm">
            <span class="navbar-brand text-bold mr-2" style="color:#fff!important">知乎日报</span>
            <router-link to="/" class="btn btn-link" style="color:#fff!important">Home</router-link>
            <router-link to="/about" class="btn btn-link" style="color:#fff!important">About</router-link>
            <span style="flex-grow:1"></span>
            <div id="navbar-item" class="d-flex"></div>
        </div>
    </div>

    <div class="container grid-sm px-0">
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component v-if="$route.meta.keepAlive" :is="Component" :key="$route.path"></component>
            </keep-alive>
            <component v-if="!$route.meta.keepAlive" :is="Component"></component>
        </router-view>
    </div>
</template>

<style lang="sass">
$primary-color: #1976D2;
$secondary-color: #E3F2FD;

@import "node_modules/spectre.css/src/spectre";
@import "node_modules/spectre.css/src/_calendars";

body
    padding-top: 52px;
</style>