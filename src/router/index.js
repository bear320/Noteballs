import { createRouter, createWebHashHistory } from "vue-router";
import NotesView from "@/views/NotesView.vue";
import EditNoteView from "@/views/EditNoteView.vue";
import StatsView from "@/views/StatsView.vue";
import AuthView from "@/views/AuthView.vue";

const routes = [
    {
        path: "/",
        name: "notes",
        component: NotesView,
    },
    {
        path: "/editNote/:id",
        name: "edit-note",
        component: EditNoteView,
    },
    {
        path: "/stats",
        name: "stats",
        component: StatsView,
    },
    {
        path: "/auth",
        name: "auth",
        component: AuthView,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
