import firebase from 'firebase';

const   firebaseConfig = {
    apiKey: "AIzaSyCIQ3hVMLk7CC-RJYMsDOuhPZF1VNMYI7o",
    authDomain: "task-manager-1a3cb.firebaseapp.com",
    databaseURL: "https://task-manager-1a3cb.firebaseio.com",
    projectId: "task-manager-1a3cb",
    storageBucket: "task-manager-1a3cb.appspot.com",
    messagingSenderId: "603956923046",
    appId: "1:603956923046:web:de8e9ab7bbb307ffb68267"
  };
  
const fire = firebase.initializeApp(firebaseConfig);



export default  fire;