<template>
    <div class="large-container">
        <div class="olt-navbar">
            <div class="olt-navbar__left hide-for-mobile-only">
                <a class="olt-navbar__item">
                    <img src="../../source/assets/logo_lightelligence.svg" />
                </a>
                <a class="olt-navbar__item
                    olt-navbar__item--is-button"
                    v-bind:class="{ 'olt-navbar__item--is-active' : active === 'personal_dashboard'}"
                    v-on:click="setActive('personal_dashboard')"
                    >
                    Personal Dashboard
                </a>
                <a class="olt-navbar__item
                    olt-navbar__item--is-button"
                    v-on:click="toggleExpand()"
                    >

                    <i class="olt-tenant-avatar">T</i>
                    <span class="olt-spacing--xs-left">
                        MyTenant
                    </span>
                    <i class="material-icons olt-spacing--xs-left">{{ expanded ? 'close' : 'keyboard_arrow_down'}}</i>

                </a>
                <div class="olt-navbar__separator"></div>
                <a class="olt-navbar__item
                    olt-navbar__item--is-button"
                    v-bind:class="{
                        'olt-navbar__item--is-active' : active === 'documentation'
                    }"
                    v-on:click="setActive('documentation')"
                    >
                    Documentation
                </a>
            </div>
            <div class="olt-navbar__left show-for-mobile-only">
                <a class="olt-navbar__item
                    olt-navbar__item--is-button"
                    v-bind:class="{
                        'olt-navbar__menu-button--is-open' : menuIsOpen
                    }"
                    v-on:click="toggleMenuIsOpen()"
                    >
                    <i class="material-icons olt-spacing--xs-left">{{ menuIsOpen ? 'close' : 'menu'}}</i>
                </a>
            </div>
            <div class="olt-navbar__center show-for-mobile-only">
                <a class="olt-navbar__item">

                    <img src="../../source/assets/logo_lightelligence.svg" />

                </a>
            </div>
            <div class="olt-navbar__right">
                <a class="olt-navbar__item
                    olt-navbar__item--is-button"
                    v-bind:class="{
                        'olt-navbar__item--is-active' : active === 'profile'
                    }"
                    v-on:click="setActive('profile')"
                    >
                    <i class="olt-user-avatar ">W</i>
                    <span class="olt-spacing--xs-left hide-for-mobile-only">
                        Profile
                    </span>
                </a>
                <a class="olt-navbar__item
                    olt-navbar__item--is-button hide-for-mobile-only">
                    Logout
                </a>
            </div>
        </div>
    </div>
</template>

<script>
var data1 = {
    expanded : false,
    active : null,
    menuIsOpen: false,
};
export default {
    name: 'navbar',

    data() {
        return data1;
    },

    methods: {
       toggleExpand: () => {
            data1.expanded = !data1.expanded;
        },
        toggleMenuIsOpen: () => {
            data1.menuIsOpen = !data1.menuIsOpen;
        },
        setActive: val => {
            data1.active = val;
        },
    },
};
</script>
