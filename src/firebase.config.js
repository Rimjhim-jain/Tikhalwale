import {getApp,getApps,initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAkW65c-TPXAu7BZO3CGERejqyVNHiRl5I",
    authDomain: "tikhalwale-34bdf.firebaseapp.com",
    databaseURL: "https://tikhalwale-34bdf-default-rtdb.firebaseio.com",
    projectId: "tikhalwale-34bdf",
    storageBucket: "tikhalwale-34bdf.appspot.com",
    messagingSenderId: "465702330914",
    appId: "1:465702330914:web:310e01860cb319c637a07b"
  };

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,firestore,storage};

