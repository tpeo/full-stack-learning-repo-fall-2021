import firebase from "firebase/compat/app";
import "firebase/compat/auth"; //v9

//TODO: ADD configuration
const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };
