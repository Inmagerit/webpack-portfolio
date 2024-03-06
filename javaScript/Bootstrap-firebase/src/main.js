import './main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection,getDocs,
        getDoc,
        deleteDoc, doc,onSnapshot,
        where,query,orderBy,
        serverTimestamp,updateDoc,
        addDoc} from 'firebase/firestore'
import {getAuth,createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword,
          onAuthStateChanged} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1bDjNU87rq4hrTqhzLNFmWONLsaP6oY8",
  authDomain: "webpackfirebaseone.firebaseapp.com",
  projectId: "webpackfirebaseone",
  storageBucket: "webpackfirebaseone.appspot.com",
  messagingSenderId: "182701279791",
  appId: "1:182701279791:web:e745615885161f133bd4da",
  measurementId: "G-9L5ZP0G756"
};

initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

// collection ref
const colRef = collection(db, 'books')

// get collection data

//const q = query(colRef, where("author", "==", "patrick rothfuss"), orderBy('createdAt'))


// realtime collection data
document.addEventListener('DOMContentLoaded', function () {
  // Function to update the content of the listDiv with the array
  function updateListDiv(array) {
    const listDiv = document.getElementById('listDiv');
    if (!listDiv) {
      console.error('listDiv is null. Make sure the element with ID "listDiv" exists in your HTML.');
      return;
    }

    // Assuming your array is an array of objects with title and author properties
    const html = array.map(book => `<p>${book.title} by ${book.author}  <br> (ID: ${book.id})</p>`).join('');
    listDiv.innerHTML = html;
  }

  // Function to display the books
  function displayBooks() {
    onSnapshot(colRef, (snapshot) => {
      let books = [];
      snapshot.docs.forEach(doc => {
        books.push({ ...doc.data(), id: doc.id });
      });
      updateListDiv(books);
    });
  }

  onSnapshot(colRef, (snapshot) => {
    let books = [];
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books);
    updateListDiv(books);
  })});
// adding docs
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    createdAt: serverTimestamp()
  })
  .then(() => {
    addBookForm.reset()
  })
})

// deleting docs
const deleteBookForm = document.querySelector('.delete')

deleteBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'books', deleteBookForm.identificacion.value)

  deleteDoc(docRef)
    .then(() => {
      deleteBookForm.reset()
      
    })
})


onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id)
})

const updateForm = document.querySelector('.update');
updateForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const docRef = doc(db, 'books', updateForm.id.value);

  const newTitle = updateForm.title.value;
  const newAuthor = updateForm.author.value;

  updateDoc(docRef, {
    title: newTitle,
    author: newAuthor
  })
  .then(() => {
    updateForm.reset();
    console.log('Document updated successfully!');
  })
  .catch((error) => {
    console.error('Error updating document: ', error);
  });
});

// signing users up
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = signupForm.email.value
  const password = signupForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      alert(`username created, name:${cred.user}`)
      console.log('user created:', cred.user)
      signupForm.reset()
    })
    .catch(err => {
      console.log(err.message)
    })
})
// logging in and out
const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log('user signed out')
    })
    .catch(err => {
      console.log(err.message)
    })
})
//login
const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user logged in:', cred.user)
      loginForm.reset()
      
    })
    .catch(err => {
      console.log(err.message)
    })
})
/* subscribing to auth changes
onAuthStateChanged(auth, (user) => {
  
  if (user) {
    // User is logged in
    alert('User logged in. User details:', user);
  } else {
    // User is logged out
    alert('User logged out.');
  
}
})*/
displayBooks()

