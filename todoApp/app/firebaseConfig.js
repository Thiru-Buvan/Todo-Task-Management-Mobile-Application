import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDAf4M4NH4if1H3JjW7mTgtkaZxumoYeSg",
  authDomain: "todo-auth-app-71cac.firebaseapp.com",
  projectId: "todo-auth-app-71cac",
  storageBucket: "todo-auth-app-71cac.appspot.com",
  messagingSenderId: "24594561189",
  appId: "1:24594561189:web:c84ba4583c93fb0009f54c"
};

const app = initializeApp(firebaseConfig);

export default app;
