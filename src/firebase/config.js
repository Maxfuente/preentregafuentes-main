
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBGLtddU7IjH4sSKk-XpLOUr_fssPpxKyY",
  authDomain: "electromax-dd35a.firebaseapp.com",
  projectId: "electromax-dd35a",
  storageBucket: "electromax-dd35a.appspot.com",
  messagingSenderId: "366497987740",
  appId: "1:366497987740:web:5b889f1ee71cfd05034159",
};

 const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);