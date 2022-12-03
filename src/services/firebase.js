// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyC8Y3kR26pK8CShXuA5qXmYZkkWzQ3MjOg",

  authDomain: "projfinal-react-portfolio.firebaseapp.com",

  projectId: "projfinal-react-portfolio",

  storageBucket: "projfinal-react-portfolio.appspot.com",

  messagingSenderId: "497485803892",

  appId: "1:497485803892:web:e936ba3e40a2a50d617c21",

  databaseURL: "https://projfinal-react-portfolio-default-rtdb.firebaseio.com/"
};


// Initialize Firebase

initializeApp(firebaseConfig);
const database = getDatabase();

export { database };