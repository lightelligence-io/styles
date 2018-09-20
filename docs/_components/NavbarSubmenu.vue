<template>
    <div class="olt-navbar-submenu">
        <a class="olt-navbar-submenu__item"
            v-bind:class="{ 'olt-navbar-submenu__item--is-active' : active === 'dashboard'}"
            v-on:click="setActive('dashboard')"
        >
            Dashboard
        </a>
        <a class="olt-navbar-submenu__item"
            v-bind:class="{ 'olt-navbar-submenu__item--is-active' : active === 'device_types'}"
            v-on:click="setActive('device_types')"
        >
            Device Types
        </a>
        <a class="olt-navbar-submenu__item"
            v-bind:class="{ 'olt-navbar-submenu__item--is-active' : active === 'devices'}"
            v-on:click="setActive('devices')"
        >
            Manage Devices
        </a>
        <a class="olt-navbar-submenu__item"
            v-bind:class="{ 'olt-navbar-submenu__item--is-active' : active === 'users'}"
            v-on:click="setActive('users')"
        >
            Manage Users
        </a>
    </div>
</template>

<script>
var data1 = {
    active : null,
};
export default {
    name: 'navbar-submenu',

    data() {
        return data1;
    },

    methods: {
        setActive: (val) => {
            data1.active = val;
        },
    },
};
</script>
