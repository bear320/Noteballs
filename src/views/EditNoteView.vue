<template>
    <div class="edit-note">
        <AddEditNote v-model="noteContent" bgColor="info" label="編輯內容" placeholder="編輯筆記" ref="addEditNoteRef">
            <template #buttons>
                <button class="button is-link is-light has-text-info mr-3" @click="$router.back()">取消</button>
                <button class="button is-link is-info" :disabled="!noteContent" @click="handleUpdateNote">
                    儲存修改
                </button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "@/components/notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

// router
const route = useRoute();
const router = useRouter();

// store
const storeNotes = useStoreNotes();

// notes
const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id);

// update note
const handleUpdateNote = () => {
    storeNotes.updateNote(route.params.id, noteContent.value);
    router.push("/");
};
</script>
