import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCU2nQ_GOQa2nQ2twvKtLweOak3c8RDXCY",
  authDomain: "astra-talent-556e8.firebaseapp.com",
  databaseURL: "https://astra-talent-556e8.firebaseio.com",
  projectId: "astra-talent-556e8",
  storageBucket: "astra-talent-556e8.appspot.com",
  messagingSenderId: "741274177625",
  appId: "1:741274177625:web:d9f5df3202a012f967e148"
};


const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(fire);

export default { fire, db };