import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAJgGs84_n4VwN0m3O2U9TRnld8J4kd2AM",
    authDomain: "taskmanager-1f1e7.firebaseapp.com",
    projectId: "taskmanager-1f1e7",
    storageBucket: "taskmanager-1f1e7.appspot.com",
    messagingSenderId: "479471698642",
    appId: "1:479471698642:web:f08e2e80b13f076aef230b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);