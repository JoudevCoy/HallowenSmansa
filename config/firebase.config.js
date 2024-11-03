import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, increment } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  databaseURL: import.meta.env.VITE_DBURL,
  messagingSenderId: import.meta.env.VITE_MSGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
};

async function logVisit() {
  const visitDoc = doc(db, "visitors", "visit_count");
  await setDoc(visitDoc, { count: increment(1) }, { merge: true });
}

logVisit();
