<template>
    <div class="large-container">
        <div class="olt-navbar">
            <div class="olt-navbar__left hide-for-mobile-only">
                <div class="olt-navbar__item">
                    <div class="olt-navbar__item-body">
                        <img src="../../source/assets/logo_lightelligence.svg" />
                    </div>
                </div>
                <div class="olt-navbar__item
                    olt-navbar__item--is-button"
                    v-bind:class="{ 'olt-navbar__item--is-active' : active === 'personal_dashboard'}"
                    v-on:click="setActive('personal_dashboard')"
                    >
                    <div class="olt-navbar__item-body">
                        Personal Dashboard
                    </div>
                </div>
                <div class="olt-navbar__item
                    olt-navbar__item--is-button"
                    v-on:click="toggleExpand()"
                    >
                    <div class="olt-navbar__item-body">
                        <i class="olt-tenant-avatar">T</i>
                        <span class="olt-navbar__item-icon-label">
                            MyTenant
                        </span>
                        <span class="olt-navbar__item-toggle olt-navbar__item-toggle--is-expanded">
                            <i class="material-icons">{{ expanded ? 'close' : 'keyboard_arrow_down'}}</i>
                        </span>
                    </div>
                </div>
                <div class="olt-navbar__separator"></div>
                <div class="olt-navbar__item
                    olt-navbar__item--is-button"
                    v-bind:class="{
                        'olt-navbar__item--is-active' : active === 'documentation'
                    }"
                    v-on:click="setActive('documentation')"
                    >
                    <div class="olt-navbar__item-body">
                        Documentation
                    </div>
                </div>
            </div>
            <div class="olt-navbar__left show-for-mobile-only">
                <div class="olt-navbar__item
                    olt-navbar__item--is-button"
                    v-bind:class="{
                        'olt-navbar__menu-button--is-open' : menuIsOpen
                    }"
                    v-on:click="toggleMenuIsOpen()"
                    >
                    <div class="olt-navbar__item-body">
                        <i class="material-icons">{{ menuIsOpen ? 'close' : 'menu'}}</i>
                    </div>
                </div>
            </div>
            <div class="olt-navbar__center show-for-mobile-only">
                <div class="olt-navbar__item">
                    <div class="olt-navbar__item-body">
                        <img src="../../source/assets/logo_lightelligence.svg" />
                    </div>
                </div>
            </div>
            <div class="olt-navbar__right">
                <div class="olt-navbar__item
                    olt-navbar__item--is-button"
                    v-bind:class="{
                        'olt-navbar__item--is-active' : active === 'profile'
                    }"
                    v-on:click="setActive('profile')"
                    >
                    <div class="olt-navbar__item-body">
                        <i class="olt-user-avatar ">W</i>
                        <span class="olt-navbar__item-icon-label hide-for-mobile-only">
                            Profile
                        </span>
                    </div>
                </div>
                <div class="olt-navbar__item olt-navbar__item--is-button hide-for-mobile-only">
                    <div class="olt-navbar__item-body">
                    Logout
                    </div>
                </div>
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
