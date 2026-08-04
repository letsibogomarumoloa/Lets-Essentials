// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCf-Ya9jiHSiPAUVAHzdMeqMrxwr23534Y",
  authDomain: "lets-essentials.firebaseapp.com",
  projectId: "lets-essentials",
  storageBucket: "lets-essentials.firebasestorage.app",
  messagingSenderId: "519547989798",
  appId: "1:519547989798:web:68c96ef9c5222743d51be7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
