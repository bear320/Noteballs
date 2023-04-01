<template>
    <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop px-2">
            <div class="navbar-brand">
                <router-link class="navbar-item is-size-4 brand" to="/">隨手記</router-link>

                <a
                    :class="{ 'is-active': showBurger }"
                    @click.prevent="showBurger = !showBurger"
                    class="navbar-burger"
                    aria-expanded="false"
                    aria-label="menu"
                    data-target="navbarBasicExample"
                    role="button"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div :class="{ 'is-active': showBurger }" id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-end">
                    <router-link @click="showBurger = false" class="navbar-item" active-class="is-active" to="/"
                        >隨手記</router-link
                    >
                    <router-link @click="showBurger = false" class="navbar-item" active-class="is-active" to="/stats"
                        >統計數據</router-link
                    >
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
// imports
import { ref } from "vue";

// mobile nav
const showBurger = ref(false);
</script>

<style lang="scss">
@media (max-width: 1023px) {
    .navbar-item.brand {
        padding: 0;
    }

    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>
