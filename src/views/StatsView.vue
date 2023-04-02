<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>統計項目</th>
                    <th>數據</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>全部筆記數量</td>
                    <td>{{ storeNotes.totalNotesCount }}</td>
                </tr>
                <tr>
                    <td>全部筆記字元數 (characters)</td>
                    <td>{{ storeNotes.totalCharatersCount }}</td>
                </tr>
            </tbody>
        </table>

        <input
            v-model="comments"
            v-autofocus
            class="input"
            maxlength="50"
            placeholder="您喜歡「隨手記」嗎？"
            type="text"
        />
    </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import { useStoreNotes } from "../stores/storeNotes";
import { vAutofocus } from "../directives/vAutofocus";
import { useWatchCharacters } from "../use/useWatchCharacters";

// store
const storeNotes = useStoreNotes();

// comments
const comments = ref("");

useWatchCharacters(comments, 50);
</script>
