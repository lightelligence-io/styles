<template>
    <div class="olt-navbar-submenu">
        <div class="olt-navbar-submenu__item"
            v-bind:class="{ 'olt-navbar-submenu__item--is-active' : active === 'dashboard'}"
            v-on:click="setActive('dashboard')"
        >
            Dashboard
        </div>
        <div class="olt-navbar-submenu__item"
            v-bind:class="{ 'olt-navbar-submenu__item--is-active' : active === 'device_types'}"
            v-on:click="setActive('device_types')"
        >
            Device Types
        </div>
        <div class="olt-navbar-submenu__item"
            v-bind:class="{ 'olt-navbar-submenu__item--is-active' : active === 'devices'}"
            v-on:click="setActive('devices')"
        >
            Manage Devices
        </div>
        <div class="olt-navbar-submenu__item"
            v-bind:class="{ 'olt-navbar-submenu__item--is-active' : active === 'users'}"
            v-on:click="setActive('users')"
        >
            Manage Users
        </div>
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
