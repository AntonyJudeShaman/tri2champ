import React from "react";
import { useState } from "react";
import "./App.css";
import logo from "./logo1.png";
import Background from "./background";
import Section0 from "./section0";
import Section1 from "./Section1";
import Section2 from "./section2";
import Form from "./form";
import Image from "./image";
import Footer from "./footer";
import { scroller } from "react-scroll";
import Card from './card';
import Signin from "./signform";
import Team from "./Team";
import { Helmet } from "react-helmet";
import Gallery from './gallery';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: -2,
      smooth: "easeInOutQuart",
    });
  };
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(true);
  };

  const hideDropdown=() => {
    
      setShowDropdown(false);
    
  }

  const handleProfile = () => {
    
  };

  const handleLogout = () => {
    
  };
 

  const currentPath = window.location.pathname;
  if (currentPath === "/team") {
    return <Team/>;
  } else if(currentPath === "/gallery") {
    return <Gallery/>;
  }
    else if(currentPath === "/Signin") {
      return <Signin/>;
  } else{
    return (
    <>
    <Helmet>
    <title>Tri2champ</title>
    <link rel="icon" type="image/png" href="logo.png" />
  </Helmet>
    <div style={{}} className="">
      <nav
        className="flex border-b-2  border-sky-400 items-center justify-between flex-wrap p-2 navbar bg-gradient-to-r from-zinc-900  via-indigo-950 to-zinc-900"
        id="nav1"
      >
        <a
          href="#"
          className="flex items-center flex-shrink-0 mr-6 justify-start col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
        >
          <img src={logo} alt="Logo" className="logo-image mx-auto b-block" style={{ }} />

        </a>
        <div className="flex-grow ">
          <ul className="flex justify-end ">
            <li className="pr-8 pl-3 pt-4 pb-4">
              <a
                href="#card"
                className="hov under size"
                onClick={() => scrollTo("card")}
              >
                Events
              </a>
            </li>
            <li className=" pr-8 pt-4 pb-4">
              <a
                href="/team"
                className="hov under size"
              
              >
                Team
              </a>
            </li>
            <li className="pr-8 pt-4 pb-4">
              <a
                href="/gallery"
                className="hov under size"
                
              >
                Gallery
              </a>
            </li>
            <li className="pr-8 pt-4 pb-4">
              <a
                href="#form"
                className="hov under size"
                onClick={() => scrollTo("form")}
              >
                Contact
              </a>
            </li>
            <li className=" pr-2 pt-4 pb-4  rounded relative">
            <a href="/Signin" className="hov under size icon-color ">
              Login   </a>
           
                  </li>
          </ul>
          
        </div>
      </nav>
    
      <Section0 />
      <Section1 />
      <Section2 />
      <Image />
      <Card/>
      
      <Form />
      
      <Footer />
      
    </div>
    </>
  );
  
            }
}
export default App;

