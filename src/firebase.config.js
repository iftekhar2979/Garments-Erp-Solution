// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

 //Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDaa3JB3VeDRgvNFLjMfPERnQBvv3eImmw",
  authDomain: "garments-erp.firebaseapp.com",
  projectId: "garments-erp",
  storageBucket: "garments-erp.appspot.com",
  messagingSenderId: "298443362909",
  appId: "1:298443362909:web:9f98b2cc5bba3b5cc6b3b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app

