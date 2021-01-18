import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCXIucZMQXe6V3neuQ370Gbl99uRzGb3wM',
  authDomain: 'crwn-db-186e9.firebaseapp.com',
  projectId: 'crwn-db-186e9',
  storageBucket: 'crwn-db-186e9.appspot.com',
  messagingSenderId: '144524860863',
  appId: '1:144524860863:web:7d26f30652960992f6d50a',
  measurementId: 'G-DLDLB3KN2R',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
