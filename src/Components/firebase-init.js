import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDxKO4ktQ3ID1E764Q6Wmkj_vj2hpZBbts",
  authDomain: "discount-pro-adee0.firebaseapp.com",
  projectId: "discount-pro-adee0",
  storageBucket: "discount-pro-adee0.firebasestorage.app",
  messagingSenderId: "208295480271",
  appId: "1:208295480271:web:84a0f1a31e72aefd30e0ba"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth