import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDmMD6TPToi3ciu8wns3Xf9yMjCSEsp_yg',
	authDomain: 'jakob-photo-gallery-app.firebaseapp.com',
	databaseURL: 'https://jakob-photo-gallery-app.firebaseio.com',
	projectId: 'jakob-photo-gallery-app',
	storageBucket: 'jakob-photo-gallery-app.appspot.com',
	messagingSenderId: '548910093549',
	appId: '1:548910093549:web:4f844446dd5b36dbabe8e4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
