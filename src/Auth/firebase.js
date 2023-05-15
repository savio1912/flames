import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  MESSAGEING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
} from "./CONSTANT";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGEING_SENDER_ID,
  appId: APP_ID,
};
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
