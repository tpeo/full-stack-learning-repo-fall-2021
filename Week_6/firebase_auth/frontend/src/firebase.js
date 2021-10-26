import firebase from "firebase/compat/app";
import "firebase/compat/auth"; //v9

const firebaseConfig = {
  // Put your auth here
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };
