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
    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter((note) => {
                    return note.id === id;
                })[0].content;
            };
        },
        totalNotesCount: (state) => {
            return state.notes.length;
        },
        totalCharatersCount: (state) => {
            let count = 0;
            state.notes.forEach((note) => (count += note.content.length));
            return count;
        },
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
            this.notes = this.notes.filter((note) => note.id !== id);
        },
        updateNote(id, content) {
            let index = this.notes.findIndex((note) => note.id === id);
            this.notes[index].content = content;
        },
    },
});
