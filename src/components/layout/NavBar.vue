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
                    ref="navbarBurgerRef"
                    role="button"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div :class="{ 'is-active': showBurger }" id="navbarBasicExample" class="navbar-menu" ref="navbarMenuRef">
                <div class="navbar-end navbar-links">
                    <router-link @click="showBurger = false" class="navbar-item" active-class="is-active" to="/"
                        >隨手記</router-link
                    >
                    <router-link @click="showBurger = false" class="navbar-item" active-class="is-active" to="/stats"
                        >統計數據</router-link
                    >
                    <button
                        :class="{ 'ml-2': showBurger }"
                        @click="storeAuth.logoutUser"
                        class="button is-small has-background-warning-dark has-text-white px-3"
                    >
                        登出
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
// imports
import { ref } from "vue";
import { useStoreAuth } from "@/stores/storeAuth";
import { onClickOutside } from "@vueuse/core";

// store
const storeAuth = useStoreAuth();

// mobile nav
const showBurger = ref(false);

// click outside to close
const navbarMenuRef = ref(null);
const navbarBurgerRef = ref(null);

onClickOutside(
    navbarMenuRef,
    (event) => {
        showBurger.value = false;
    },
    { ignore: [navbarBurgerRef] }
);
</script>

<style lang="scss">
.navbar-links {
    align-items: center !important;

    button {
        line-height: 100%;
        border-color: hsl(48, 100%, 29%);
    }
}

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
