<template>
    <div class="auth">
        <div class="tabs is-toggle is-centered">
            <ul>
                <li :class="{ 'is-active': !register }">
                    <a @click.prevent="register = false" class="has-text-grey-dark">登入</a>
                </li>
                <li :class="{ 'is-active': register }">
                    <a @click.prevent="register = true" class="has-text-grey-dark">註冊</a>
                </li>
            </ul>
        </div>

        <div class="card auth-form">
            <div class="card-content">
                <div v-cloak class="title has-text-centered">{{ formTitle }}</div>

                <form @submit.prevent="onSubmit">
                    <div class="field">
                        <label class="label">信箱</label>
                        <div class="control">
                            <input
                                v-model="credentials.email"
                                class="input"
                                placeholder="example@email.com"
                                type="email"
                            />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">密碼</label>
                        <div class="control pwd-wrap">
                            <input
                                v-model="credentials.pwd"
                                class="input"
                                placeholder="請輸入密碼..."
                                type="password"
                                ref="pwdInputRef"
                            />
                            <span
                                v-cloak
                                @click="toggleVisibility"
                                class="material-symbols-rounded has-text-grey-light is-size-5"
                                ref="pwdVisibilityRef"
                                >visibility</span
                            >
                        </div>
                    </div>

                    <div class="field is-grouped is-grouped-centered">
                        <p class="control">
                            <button class="button is-warning">{{ formTitle }}</button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
// imports
import { ref, reactive, computed } from "vue";
import { useStoreAuth } from "@/stores/storeAuth";

// store
const storeAuth = useStoreAuth();

// login / register
const register = ref(false);

// form title
const formTitle = computed(() => {
    return register.value ? "註冊" : "登入";
});

// show / hide password
const showPwd = ref(false);
const pwdInputRef = ref(null);
const pwdVisibilityRef = ref(null);

const toggleVisibility = () => {
    if (!showPwd.value) {
        pwdInputRef.value.type = "text";
        pwdVisibilityRef.value.innerText = "visibility_off";
    } else {
        pwdInputRef.value.type = "password";
        pwdVisibilityRef.value.innerText = "visibility";
    }
    showPwd.value = !showPwd.value;
};

// credentials
const credentials = reactive({
    email: "",
    pwd: "",
});

// submit
const onSubmit = () => {
    if (!credentials.email || !credentials.pwd) alert("請輸入帳號及密碼！");
    else {
        if (register.value) {
            storeAuth.registerUser(credentials);
        } else {
            storeAuth.loginUser(credentials);
        }
    }
};
</script>

<style lang="scss" scoped>
.tabs.is-toggle li.is-active a {
    background-color: #ffe08a;
    border-color: #ffe08a;
}

.auth-form {
    max-width: 400px;
    margin: 0 auto;
}

.pwd-wrap {
    position: relative;

    span {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        user-select: none;
        cursor: pointer;

        &:hover {
            color: hsl(48, 100%, 67%);
        }
    }
}
</style>
