<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ characterLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <a class="card-footer-item" href="#">編輯</a>
            <a @click.prevent="storeNotes.deleteNote(note.id)" class="card-footer-item" href="#">刪除</a>
        </footer>
    </div>
</template>

<script setup>
// imports
import { computed } from "vue";
import { useStoreNotes } from "@/stores/storeNotes.js";

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
</script>
