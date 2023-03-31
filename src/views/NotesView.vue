<template>
    <div class="notes">
        <div class="card has-background-warning-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea
                        v-model="newNote"
                        class="textarea"
                        placeholder="請輸入筆記內容..."
                        ref="newNoteRef"
                    ></textarea>
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button :disabled="!newNote" @click="addNote" class="button is-link is-warning">新增筆記</button>
                </div>
            </div>
        </div>

        <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import Note from "@/components/notes/Note.vue";
import { useStoreNotes } from "@/stores/storeNotes.js";

// store
const storeNotes = useStoreNotes();

// notes
const newNote = ref("");
const newNoteRef = ref(null);

const addNote = () => {
    storeNotes.addNote(newNote.value);
    newNote.value = "";
    newNoteRef.value.focus();
};
</script>
