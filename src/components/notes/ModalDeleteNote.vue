<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card" ref="modalCardRef">
            <header class="modal-card-head">
                <p class="modal-card-title">刪除筆記？</p>
                <button @click="closeModal" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">您是否確定要刪除這則筆記？</section>
            <footer class="modal-card-foot is-justify-content-flex-end">
                <button @click="closeModal" class="button">取消</button>
                <button @click="storeNotes.deleteNote(noteId)" class="button is-danger">刪除</button>
            </footer>
        </div>
    </div>
</template>

<script setup>
// imports
import { ref, onMounted, onUnmounted } from "vue";
import { useStoreNotes } from "@/stores/storeNotes.js";
import { onClickOutside } from "@vueuse/core";

// store
const storeNotes = useStoreNotes();

// props
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    noteId: {
        type: String,
        required: true,
    },
});

// emits
const emits = defineEmits(["update:modelValue"]);

// close modal
const closeModal = () => {
    emits("update:modelValue", false);
};

// click outside to close
const modalCardRef = ref(null);

onClickOutside(modalCardRef, closeModal);

// keyboard control
const handleKeyboard = (e) => {
    if (e.key === "Escape") closeModal();
};

onMounted(() => {
    document.addEventListener("keyup", handleKeyboard);
});

onUnmounted(() => {
    document.removeEventListener("keyup", handleKeyboard);
});
</script>
