// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx0pH2F1NVXFZG9QtSqaivgkwS51IEvxY",
  authDomain: "otopark-63660.firebaseapp.com",
  projectId: "otopark-63660",
  storageBucket: "otopark-63660.appspot.com",
  messagingSenderId: "600769344792",
  appId: "1:600769344792:web:f7beea5beb6ace90451a6d",
  databaseURL: "https://otopark-63660-default-rtdb.firebaseio.com", // Realtime Database URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database };
