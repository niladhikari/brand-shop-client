
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-IXJpu_WKZA2s1Fr5TUbnyUVeBopQksA",
  authDomain: "brand-shop-67942.firebaseapp.com",
  projectId: "brand-shop-67942",
  storageBucket: "brand-shop-67942.appspot.com",
  messagingSenderId: "255297482426",
  appId: "1:255297482426:web:bf7a53f284dd1f14f05c83"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
