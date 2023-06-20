import React, { useEffect, useState } from "react";
import "./gallery.css";
import Footer from "./footer";
import logo from "./logo1.png";
import { Helmet } from "react-helmet";
import "@appnest/masonry-layout";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import Navbar from "./nav";

const firebaseConfig = {
  apiKey: "AIzaSyB_mIscj9j6Dqyf3ujlqfgbP1JakEygD68",
  authDomain: "tri2champ.firebaseapp.com",
  databaseURL: "https://tri2champ-default-rtdb.firebaseio.com",
  projectId: "tri2champ",
  storageBucket: "tri2champ.appspot.com",
  messagingSenderId: "318844875234",
  appId: "1:318844875234:web:c76a1750ee286f168e89bb",
  measurementId: "G-VV8HWE99L3",
};

const app = initializeApp(firebaseConfig, "galleryApp");
const storage = getStorage(app);
const storageRef = ref(storage);
const imagesRef = ref(storageRef, "images");

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    listAll(imagesRef)
      .then((res) => {
        const imagePromises = res.items.map((item) => getDownloadURL(item));
        Promise.all(imagePromises)
          .then((urls) => {
            setImages(urls);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <masonry-layout cols="3" gap="30" style={{ padding: "4%" }}>
        {images.map((url) => (
          <div key={url}>
            <img src={url} alt="uploaded" className="hhov" />
          </div>
        ))}
      </masonry-layout>
      <Footer />
    </>
  );
};

export default Gallery;
