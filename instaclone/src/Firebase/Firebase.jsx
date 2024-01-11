import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZBvg1VPuHNJLPN6PsMQb7ZBRpAktJxfQ",
  authDomain: "instaclone-f7ef1.firebaseapp.com",
  projectId: "instaclone-f7ef1",
  storageBucket: "instaclone-f7ef1.appspot.com",
  messagingSenderId: "402497630804",
  appId: "1:402497630804:web:7f3d508a0e5f2e589233c1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };