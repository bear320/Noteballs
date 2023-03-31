import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
    state: () => {
        return {
            notes: [
                {
                    id: "id1",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, illum!",
                },
                {
                    id: "id2",
                    content: "This is a shorter note!",
                },
            ],
        };
    },
    actions: {
        addNote(newNoteContent) {
            const noteId = new Date().getTime().toString();

            const note = {
                id: noteId,
                content: newNoteContent,
            };

            this.notes.unshift(note);
        },
        deleteNote(id) {
            this.notes = this.notes.filter((note) => {
                return note.id !== id;
            });
        },
    },
});
