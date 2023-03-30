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

        <Note v-for="note in notes" :key="note.id" :note="note" @deleteClicked="deleteNote" />
    </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import Note from "@/components/notes/Note.vue";

// notes
const newNote = ref("");
const newNoteRef = ref(null);

const notes = ref([
    {
        id: "id1",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, illum!",
    },
    {
        id: "id2",
        content: "This is a shorter note!",
    },
]);

const addNote = () => {
    const noteId = new Date().getTime().toString();

    const note = {
        id: noteId,
        content: newNote.value,
    };

    notes.value.unshift(note);
    newNote.value = "";
    newNoteRef.value.focus();
};

// delete note
const deleteNote = (id) => {
    notes.value = notes.value.filter((note) => {
        return note.id !== id;
    });
};
</script>
