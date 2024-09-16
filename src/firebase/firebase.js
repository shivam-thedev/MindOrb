import { initializeApp } from "firebase/app";
import { conf } from "../conf/conf";
const firebaseConfig = {
    apiKey: conf.firebaseApiKey,
    authDomain: conf.firebaseAuthDomain,
    projectId: conf.firebaseProjectId,
    storageBucket: conf.firebaseStorageBucket,
    messagingSenderId:conf.firebaseMessagingSenderId,
    appId: conf.firebaseAppId,
    databaseURL:conf.firebaseDatabaseUrl
};

export const app = initializeApp(firebaseConfig);