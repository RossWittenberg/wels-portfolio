import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyBsSVDox0f-U_oQ3_-pAe4jmzraszwtx_k",
    authDomain: "wfmd-design-portfolio.firebaseapp.com",
    databaseURL: "https://wfmd-design-portfolio.firebaseio.com",
    projectId: "wfmd-design-portfolio",
    storageBucket: "wfmd-design-portfolio.appspot.com",
    messagingSenderId: "190571274078"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}