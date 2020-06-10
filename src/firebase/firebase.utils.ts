import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { DocsToAdd } from "./types";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

/* Method which allow you to add movies data to firestore
 * It first creates collection with provided key (name)
 * Then it uploads movies objects to this collection as documents
 */
export const addCollectionAndDocuments = async (
  collectionKey: string,
  docsToAdd: DocsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  docsToAdd.forEach((doc) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, doc);
  });

  await batch.commit();
  console.log("Successfully added movies dump data to firestore");
};

/*
 * Method which convert movies snapshot fetched from firestore
 * to IMovies array which can be put into movies redux state
 */
export const convertMoviesSnapshotToMoviesArray = (movies: any) => {
  const moviesArray = movies.docs.map((movie: any) => movie.data());
  return moviesArray;
};
