import React, {useEffect, useState} from "react";
import "./gallery.css";
import Footer from "./footer";
import logo from "./logo1.png";
import { Helmet } from "react-helmet";
import "@appnest/masonry-layout";
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import {getStorage, ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDg17XbzPaAIEU-zwhSHrwLcr3Sv4JkxNY",
  authDomain: "react-6efd3.firebaseapp.com",
  databaseURL: "https://react-6efd3-default-rtdb.firebaseio.com",
  projectId: "react-6efd3",
  storageBucket: "react-6efd3.appspot.com",
  messagingSenderId: "514648674166",
  appId: "1:514648674166:web:2d0972c159f2b059d17457",
  measurementId: "G-PQWJVPF8FH"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage);
const imagesRef = ref(storageRef, 'images');

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    listAll(imagesRef)
      .then(res => {
        const imagePromises = res.items.map(item => getDownloadURL(item));
        Promise.all(imagePromises)
          .then(urls => {
            setImages(urls);
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Tri2champ</title>
        <link rel="icon" type="image/png" href="logo.png" />
      </Helmet>
      <nav
        className="flex border-b-2  border-sky-400 items-center justify-between flex-wrap p-2 navbar bg-gradient-to-r from-zinc-900  via-indigo-950 to-zinc-900"
        id="nav1"
      >
        <a
          href="App"
          className="flex items-center flex-shrink-0 mr-6 justify-start col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
        >
          <img
            src={logo}
            alt="Logo"
            className="logo-image mx-auto b-block"
            style={{}}
          />
        </a>
        <div className="flex-grow">
          <ul className="flex justify-end">
            <li className="pr-9 pl-5 pt-4 pb-4">
              <a href="./App" className="hov under size">
                Home
              </a>
            </li>

            <li className="pr-5 pt-4 pb-4">
              <a href="./team" className="hov under size">
                Team
              </a>
            </li>

            <li className="  pt-4 pb-4">
              <a href="#" className="hov under size"></a>
            </li>
          </ul>
        </div>
      </nav>
      <masonry-layout cols="3" gap="30" style={{ padding: "4%" }}>
        {images.map(url => (
          <div key={url}>
            <img src={url} alt="uploaded" className="hhov" />
          </div>
        ))}
      </masonry-layout>
      <Footer/>
    </>
  );
};

export default Gallery;