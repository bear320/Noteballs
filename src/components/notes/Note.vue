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
            <a @click.prevent="deleteNote" class="card-footer-item" href="#">刪除</a>
        </footer>
    </div>
</template>

<script setup>
// imports
import { computed } from "vue";

// props
const props = defineProps({
    note: {
        type: Object,
        required: true,
    },
});

// emits
const emits = defineEmits(["deleteClicked"]);

// character length
const characterLength = computed(() => {
    const length = props.note.content.length;
    const desc = length > 1 ? "characters" : "character";
    return `${length} 字元 (${desc})`;
});

// delete note
const deleteNote = () => {
    emits("deleteClicked", props.note.id);
};
</script>
