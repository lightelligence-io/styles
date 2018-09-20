<template>
    <div class="olt-navdrawer">
        <a class="olt-navdrawer__item olt-navdrawer__item--is-button"
            v-bind:class="{ 'olt-navdrawer__item--is-active' : active === 'personal_dashboard'}"
            v-on:click="setActive('personal_dashboard')"
            >
            Personal Dashboard
        </a>
        <a v-on:click="toggleExpand()" class="olt-navdrawer__item olt-navdrawer__item--is-button">
            <i class="olt-tenant-avatar ">T</i>
            <span class="olt-spacing--xs-left">
                MyTenant
            </span>
            <i class="material-icons olt-spacing--xs-left">{{ expanded ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}}</i>
        </a>
        <div class="olt-navdrawer__submenu" v-if="expanded">
            <a class="olt-navdrawer__submenu-item olt-navdrawer__submenu-item--is-button"
                v-bind:class="{ 'olt-navdrawer__submenu-item--is-active' : active === 'dashboard'}"
                v-on:click="setActive('dashboard')"
            >
                Dashboard
            </a>
            <a class="olt-navdrawer__submenu-item olt-navdrawer__submenu-item--is-button"
                v-bind:class="{ 'olt-navdrawer__submenu-item--is-active' : active === 'tenant_device_types'}"
                v-on:click="setActive('tenant_device_types')"
            >
                Device Types
            </a>
            <a class="olt-navdrawer__submenu-item olt-navdrawer__submenu-item--is-button"
                v-bind:class="{ 'olt-navdrawer__submenu-item--is-active' : active === 'tenant_devices'}"
                v-on:click="setActive('tenant_devices')"
            >
                Manage Devices
            </a>
            <a class="olt-navdrawer__submenu-item olt-navdrawer__submenu-item--is-button"
                v-bind:class="{ 'olt-navdrawer__submenu-item--is-active' : active === 'tenant_users'}"
                v-on:click="setActive('tenant_users')"
            >
                Tenant Users
            </a>
        </div>
        <div class="olt-navdrawer__separator"></div>
        <a class="olt-navdrawer__item olt-navdrawer__item--is-button"
            v-bind:class="{ 'olt-navdrawer__item--is-active' : active === 'documentation'}"
            v-on:click="setActive('documentation')"
        >
            Documentation
        </a>
        <a class="olt-navdrawer__item olt-navdrawer__item--is-button">
            Logout
        </a>
    </div>
</template>

<script>
var data1 = {
    expanded : false,
    active : null,
};
export default {
    name: 'navdrawer',

    data() {
        return data1;
    },

    methods: {
        toggleExpand : () => {
            data1.expanded = !data1.expanded;
        },
        setActive: (val) => {
            data1.active = val;
        },
    },
};
</script>
