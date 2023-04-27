import {
  doc,
  getFirestore,
  writeBatch,
  collection,
  getDocs,
  query,
} from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQdtvYpsS3hW-c9OTFkaOPlF9-ugB0Z-Y",
  authDomain: "aum-ent.firebaseapp.com",
  projectId: "aum-ent",
  storageBucket: "aum-ent.appspot.com",
  messagingSenderId: "427247712424",
  appId: "1:427247712424:web:e9e283ff25818dae926a9d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("donee!!!!");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => {
    return docSnapshot.data();
  });
};
