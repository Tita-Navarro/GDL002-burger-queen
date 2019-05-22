import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAp3y10PwZGtux6fjGzuxbah8ZAXp-0GDI",
    authDomain: "burger-queen-app-2acf2.firebaseapp.com",
    databaseURL: "https://burger-queen-app-2acf2.firebaseio.com",
    projectId: "burger-queen-app-2acf2",
    storageBucket: "burger-queen-app-2acf2.appspot.com",
    messagingSenderId: "926575748960",
    appId: "1:926575748960:web:7fe256498b079386"
  };
  firebase.initializeApp(firebaseConfig);
export default firebase;