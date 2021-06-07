import firebase from 'firebase';
const keys = {
        apiKey: "AIzaSyA9a_tIOX7uHiyswAcyYANxjeKsP4gxN3Q",
        authDomain: "walk-dogs-9cf04.firebaseapp.com",
        projectId: "walk-dogs-9cf04",
        storageBucket: "walk-dogs-9cf04.appspot.com",
        messagingSenderId: "672225973123",
        appId: "1:672225973123:web:6c1a081ce5a68cea089cb6",
        measurementId: "G-W22PRE9S5K"
};

firebase.initializeApp(keys);
const db = firebase.firestore();
//firebase.analytics();

export default {
    firebase,
    db
}