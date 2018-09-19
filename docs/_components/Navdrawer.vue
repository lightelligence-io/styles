<template>
    <div class="olt-navdrawer">
        <div class="olt-navdrawer__item olt-navdrawer__item--is-button"
            v-bind:class="{ 'olt-navdrawer__item--is-active' : active === 'personal_dashboard'}"
            v-on:click="setActive('personal_dashboard')"
            >
            <div class="olt-navdrawer__item-body">
                Personal Dashboard
            </div>
        </div>
        <div v-on:click="toggleExpand()" class="olt-navdrawer__item olt-navdrawer__item--is-button">
            <div class="olt-navdrawer__item-body">
                <span class="olt-navdrawer__item-icon">
                    <i class="olt-tenant-avatar ">T</i>
                </span>
                <span class="olt-navdrawer__item-icon-label">
                    MyTenant
                </span>
                <span class="olt-navdrawer__item-toggle olt-navdrawer__item-toggle--is-expanded">
                    <i class="material-icons">{{ expanded ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}}</i>
                </span>
            </div>
        </div>
        <div class="olt-navdrawer__submenu" v-if="expanded">
            <div class="olt-navdrawer__submenu-item olt-navdrawer__submenu-item--is-button"
                v-bind:class="{ 'olt-navdrawer__submenu-item--is-active' : active === 'dashboard'}"
                v-on:click="setActive('dashboard')"
            >
                <div class="olt-navdrawer__submenu-item-body">
                    Dashboard
                </div>
            </div>
            <div class="olt-navdrawer__submenu-item olt-navdrawer__submenu-item--is-button"
                v-bind:class="{ 'olt-navdrawer__submenu-item--is-active' : active === 'tenant_device_types'}"
                v-on:click="setActive('tenant_device_types')"
            >
                <div class="olt-navdrawer__submenu-item-body">
                    Device Types
                </div>
            </div>
            <div class="olt-navdrawer__submenu-item olt-navdrawer__submenu-item--is-button"
                v-bind:class="{ 'olt-navdrawer__submenu-item--is-active' : active === 'tenant_devices'}"
                v-on:click="setActive('tenant_devices')"
            >
                <div class="olt-navdrawer__submenu-item-body">
                    Manage Devices
                </div>
            </div>
            <div class="olt-navdrawer__submenu-item olt-navdrawer__submenu-item--is-button"
                v-bind:class="{ 'olt-navdrawer__submenu-item--is-active' : active === 'tenant_users'}"
                v-on:click="setActive('tenant_users')"
            >
                <div class="olt-navdrawer__submenu-item-body">
                    Tenant Users
                </div>
            </div>
        </div>
        <div class="olt-navdrawer__separator"></div>
        <div class="olt-navdrawer__item olt-navdrawer__item--is-button"
            v-bind:class="{ 'olt-navdrawer__item--is-active' : active === 'documentation'}"
            v-on:click="setActive('documentation')"
        >
            <div class="olt-navdrawer__item-body">
                Documentation
            </div>
        </div>
        <div class="olt-navdrawer__item olt-navdrawer__item--is-button">
            <div class="olt-navdrawer__item-body">
                Logout
            </div>
        </div>
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
