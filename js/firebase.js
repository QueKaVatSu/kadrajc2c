import { initializeApp, getApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Firebase config (senin projen)
const firebaseConfig = {
  apiKey: "AlZaSyCqrcT7QY6tSyJidzDtDUb2BzhU7hLZF-ZE",
  authDomain: "kadrajatelier-7e02a.firebaseapp.com",
  projectId: "kadrajatelier-7e02a",
  storageBucket: "kadrajatelier-7e02a.firebasestorage.app",
  messagingSenderId: "425935875263",
  appId: "1:425935875263:webd1082c381e6866abe520a",
  measurementId: "G-YJBN2XK7F5"
};

// App'i tek sefer başlat
const app = (() => {
  try { return getApp(); } catch { return initializeApp(firebaseConfig); }
})();

// Doğru bucket'ı açıkça belirt (gs:// ile başlayan)
export const storage = getStorage(app, "gs://kadrajatelier-7e02a");
