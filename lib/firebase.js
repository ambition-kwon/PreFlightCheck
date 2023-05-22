import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBPIHZWdAScfCyY_ixDGgXhAYgB5kv8MZo',
  authDomain: 'preflightcheck-f80e1.firebaseapp.com',
  projectId: 'preflightcheck-f80e1',
  storageBucket: 'preflightcheck-f80e1.appspot.com',
  messagingSenderId: '672709071020',
  appId: '1:672709071020:ios:a4872a2258bd311de08f09',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
