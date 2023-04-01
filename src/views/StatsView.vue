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
    </div>
</template>

<script setup>
// imports
import { useStoreNotes } from "../stores/storeNotes";

// store
const storeNotes = useStoreNotes();
</script>
