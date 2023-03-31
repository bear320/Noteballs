<template>
    <div class="notes">
        <AddEditNote v-model="newNote" label="新增筆記" placeholder="請輸入筆記內容..." ref="addEditNoteRef">
            <template #buttons>
                <button :disabled="!newNote" @click="addNote" class="button is-link is-warning">新增</button>
            </template>
        </AddEditNote>

        <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import Note from "@/components/notes/Note.vue";
import AddEditNote from "@/components/notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes.js";

// store
const storeNotes = useStoreNotes();

// notes
const newNote = ref("");
const addEditNoteRef = ref(null);

const addNote = () => {
    storeNotes.addNote(newNote.value);
    newNote.value = "";
    addEditNoteRef.value.focusTextarea();
};
</script>
