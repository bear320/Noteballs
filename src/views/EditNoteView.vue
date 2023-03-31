<template>
    <div class="edit-note">
        <AddEditNote v-model="noteContent" bgColor="info" label="編輯內容" placeholder="編輯筆記" ref="addEditNoteRef">
            <template #buttons>
                <button class="button is-link is-light has-text-info mr-3" @click="$router.push('/')">取消</button>
                <button class="button is-link is-info" :disabled="!noteContent">儲存修改</button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import AddEditNote from "@/components/notes/AddEditNote.vue";

// notes
const noteContent = ref("");
</script>
