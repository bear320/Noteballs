import { defineStore } from "pinia";
import { collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc, query, orderBy } from "firebase/firestore";
import { db } from "@/js/firebase";
import { useStoreAuth } from "@/stores/storeAuth";

let notesCollectionRef, notesCollectionQuery;

let getNotesSnapshot = null;

export const useStoreNotes = defineStore("storeNotes", {
    state: () => {
        return {
            notes: [],
            notesLoaded: false,
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
        init() {
            const storeAuth = useStoreAuth();

            notesCollectionRef = collection(db, "users", storeAuth.user.id, "notes");
            notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));
            this.getNotes();
        },
        async getNotes() {
            this.notesLoaded = false;

            getNotesSnapshot = onSnapshot(
                notesCollectionQuery,
                (querySnapshot) => {
                    let notes = [];
                    querySnapshot.forEach((doc) => {
                        let note = {
                            id: doc.id,
                            content: doc.data().content,
                            date: doc.data().date,
                        };
                        notes.push(note);
                    });
                    this.notes = notes;
                    this.notesLoaded = true;
                },
                (error) => {
                    console.log(error.message);
                }
            );
        },
        clearNotes() {
            this.notes = [];

            // unsubscribe from any active listener
            if (getNotesSnapshot) getNotesSnapshot();
        },
        async addNote(content) {
            const date = new Date().getTime().toString();

            await addDoc(notesCollectionRef, {
                content,
                date,
            });
        },
        async deleteNote(id) {
            await deleteDoc(doc(notesCollectionRef, id));
        },
        async updateNote(id, content) {
            await updateDoc(doc(notesCollectionRef, id), {
                content,
            });
        },
    },
});
