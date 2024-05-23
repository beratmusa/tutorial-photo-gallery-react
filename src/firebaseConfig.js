// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx0pH2F1NVXFZG9QtSqaivgkwS51IEvxY",
  authDomain: "otopark-63660.firebaseapp.com",
  databaseURL:
    "https://otopark-63660-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "otopark-63660",
  storageBucket: "otopark-63660.appspot.com",
  messagingSenderId: "600769344792",
  appId: "1:600769344792:web:f7beea5beb6ace90451a6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database };
