import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDEt6Vthj3Xpvkpk_qb7Gs4-SHwnRGlOFo",
    authDomain: "crwn-db-dfa10.firebaseapp.com",
    databaseURL: "https://crwn-db-dfa10.firebaseio.com",
    projectId: "crwn-db-dfa10",
    storageBucket: "",
    messagingSenderId: "1004558762849",
    appId: "1:1004558762849:web:5678da02f029376c"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
        
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promp: `select_account` });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;