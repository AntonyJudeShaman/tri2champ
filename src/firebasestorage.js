import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB_mIscj9j6Dqyf3ujlqfgbP1JakEygD68",
    authDomain: "tri2champ.firebaseapp.com",
    databaseURL: "https://tri2champ-default-rtdb.firebaseio.com",
    projectId: "tri2champ",
    storageBucket: "tri2champ.appspot.com",
    messagingSenderId: "318844875234",
    appId: "1:318844875234:web:c76a1750ee286f168e89bb",
    measurementId: "G-VV8HWE99L3"
  };

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const imagesRef = ref(storage, "event/");

export const getImageUrls = () => {
  return listAll(imagesRef)
    .then((res) => {
      const imagePromises = res.items.map((item) => getDownloadURL(item));
      return Promise.all(imagePromises);
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};
