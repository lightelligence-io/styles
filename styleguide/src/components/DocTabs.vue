<template>
    <section class="doc-tabs">
        <div class="tab-items">
            <div class="item" :class="{'is-active': activeItem === 0}" @click="activeItem = 0">
                Example
            </div>
            <div class="item" :class="{'is-active': activeItem === 1}" @click="activeItem = 1">
                Code
            </div>
        </div>
        <div class="tab" v-show="activeItem === 0">
            <slot name="example"></slot>
        </div>
        <div class="tab" v-show="activeItem === 1">
            <slot name="code"></slot>
        </div>
    </section>
</template>

<script>
export default {
    name: 'doc-tabs',

    data() {
        return {
            activeItem: 0,
        };
    },
};
</script>

<style>
    @import "http://localhost:8080/olt-ui.css";

    .body {
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .doc-tabs {
        margin-top: 16px;
        box-sizing: border-box;
        width: 100%;
        padding: 16px;
        border-radius: 4px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.16);
    }
    .tab-items {
        width: 100%;
    }
    .tab-items .item {
        display: inline-block;
        min-width: 88px;
        padding: 8px 16px;
        text-align: center;
        border-radius: 4px;
        cursor: pointer;
        transition: all 300ms;
    }
    .tab-items .item.is-active {
        background: #E3E4E5;
        color: #000;
    }
    .doc-tabs .tab {
        margin-top: 16px;
        min-height: 128px;
    }


    /* General Theming */
    a {
        color: #FF6600;
    }

    a.sidebar-link:hover {
        color: #FF6600;
    }

    a.sidebar-link.active {
        color: #FF6600;
        border-left-color: #FF6600;
    }

    .search-box input{
        border-radius: 4px;
        border-width: 2px;
        border-color: #fff;
    }

    .search-box input:focus {
        border-width: 2px;
        border-color: #FF6600;
        width: 15rem;
    }

    .search-box .suggestion {
        line-height: 1.4;
        padding: 0.4rem 0.6rem;
        border-radius: 4px;
        cursor: pointer;
    }
    .search-box .suggestion a {
        white-space: normal;
        color: #5d82a6;
    }
    .search-box .suggestion a .page-title {
        font-weight: 600;
    }
    .search-box .suggestion a .header {
        font-size: 0.9em;
        margin-left: 0.25em;
    }
    .search-box .suggestion.focused {
        background-color: #f3f4f5;
    }
    .search-box .suggestion.focused a {
        color: #ff6600;
    }

    .sidebar-open .sidebar-button .icon {
        color: #FF6600;
    }

    .sidebar-button {
        cursor: pointer;
    }

    .sidebar-button .icon {
        color: #fff;
    }

    .navbar {
        background: #000;
    }

    .navbar .site-name {
        color: #FFF;
    }

    .navbar .links {
        background-color: transparent;
    }

    .nav-links a:hover {
        color: #FF6600;
    }

    .navbar .nav-item {
        color: #fff;
    }

    .navbar .nav-item a:hover {
        color: #FF6600;
    }

    .content pre, .content pre[class*="language-"] {
        white-space: pre;
        word-break: keep-all;
    }
</style>
