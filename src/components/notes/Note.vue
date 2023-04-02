<template>
    <div class="card mb-4">
        <div class="card-content">
            <div v-cloak class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small v-cloak>{{ characterLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <router-link :to="`/editNote/${note.id}`" class="card-footer-item has-text-grey-dark">編輯</router-link>
            <a @click.prevent="modals.deleteNote = true" class="card-footer-item has-text-grey-dark" href="#">刪除</a>
        </footer>

        <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note.id" />
    </div>
</template>

<script setup>
// imports
import { reactive, computed } from "vue";
import { useStoreNotes } from "@/stores/storeNotes.js";
import ModalDeleteNote from "@/components/notes/ModalDeleteNote.vue";

// store
const storeNotes = useStoreNotes();

// props
const props = defineProps({
    note: {
        type: Object,
        required: true,
    },
});

// character length
const characterLength = computed(() => {
    const length = props.note.content.length;
    const desc = length > 1 ? "characters" : "character";
    return `${length} 字元 (${desc})`;
});

// modals
const modals = reactive({
    deleteNote: false,
});
</script>
