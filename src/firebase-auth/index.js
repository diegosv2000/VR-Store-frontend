import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC6QQlzwAXq4l816NNCDOGChPrevhpJ8jM',
  authDomain: 'virtual-market-cb3f4.firebaseapp.com',
  databaseURL: 'https://virtual-market-cb3f4-default-rtdb.firebaseio.com',
  projectId: 'virtual-market-cb3f4',
  storageBucket: 'virtual-market-cb3f4.appspot.com',
  messagingSenderId: '522703209948',
  appId: '1:522703209948:web:f7c85fa7ce7b69a3947b19',
  measurementId: 'G-0QBGFTE71X',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
