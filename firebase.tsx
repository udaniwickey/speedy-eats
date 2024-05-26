import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBcrI9SrWQ2Yr2zYmC7tUZtwHENiWTuuUM',
  authDomain: 'speedy-eats-20c78.firebaseapp.com',
  databaseURL: 'https://speedy-eats-20c78-default-rtdb.firebaseio.com',
  projectId: 'speedy-eats-20c78',
  storageBucket: 'speedy-eats-20c78.appspot.com',
  messagingSenderId: '596913908264',
  appId: '1:596913908264:web:8ae8e55e4424a3817ba31d',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
