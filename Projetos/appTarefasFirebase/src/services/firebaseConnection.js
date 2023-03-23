import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyCzGiuAVslag5bEri2xRumEXcFFaCF-x0I",
    authDomain: "my-app-bbbfb.firebaseapp.com",
    databaseURL: "https://my-app-bbbfb-default-rtdb.firebaseio.com",
    projectId: "my-app-bbbfb",
    storageBucket: "my-app-bbbfb.appspot.com",
    messagingSenderId: "1042231098047",
    appId: "1:1042231098047:web:6f7035db449ae22fd6e40a",
    measurementId: "G-MVXXP4DVTH"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;