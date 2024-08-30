import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDT---DQs1wcnZ6o3YEGoB-UCEbxGvcPnQ",
  authDomain: "courselisting-830ef.firebaseapp.com",
  databaseURL: "https://courselisting-830ef-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "courselisting-830ef",
  storageBucket: "courselisting-830ef.appspot.com",
  messagingSenderId: "710278556303",
  appId: "1:710278556303:web:676da5749a2d2b311e9efa",
 
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);  

export { database };
