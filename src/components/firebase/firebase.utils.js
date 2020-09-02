import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAJwGw-RGizLMbVD_GwXR3ptPkM5SH0iJA",
    authDomain: "e-commerce-pranav-khapra.firebaseapp.com",
    databaseURL: "https://e-commerce-pranav-khapra.firebaseio.com",
    projectId: "e-commerce-pranav-khapra",
    storageBucket: "e-commerce-pranav-khapra.appspot.com",
    messagingSenderId: "252662779588",
    appId: "1:252662779588:web:7122d105ff4e699fd6c391",
    measurementId: "G-M6R41DDPZF"
  };


   export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
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
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;