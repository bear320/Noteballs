import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/js/firebase";

export const useStoreAuth = defineStore("storeAuth", {
    state: () => {
        return {};
    },
    actions: {
        registerUser(credentials) {
            createUserWithEmailAndPassword(auth, credentials.email, credentials.pwd)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    console.log("Error message:", error.message);
                });
        },
        loginUser(credentials) {
            signInWithEmailAndPassword(auth, credentials.email, credentials.pwd)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    console.log("Error message:", error.message);
                });
        },
        logoutUser() {
            signOut(auth)
                .then(() => {
                    console.log("User signed out!");
                })
                .catch((error) => {
                    console.log("Error message:", error.message);
                });
        },
    },
});
