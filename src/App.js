import React from "react";
import "./App.css";
import logo from "./logo1.png";
import Background from "./background";
import Section0 from "./section0";
import Section1 from "./Section1";
import Section2 from "./section2";
import Form from "./form";
import Image from "./image";
import Footer from "./footer";
import Card from "./card";
import Sign from "./sign";
import Menu from "./event";
import Team from "./Team";
import Gallery from "./gallery";
import Reg from "./reg";
import Navbarr from "./nav";
import NavbarM from "./nav2";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Payment from "./payment";


function App() {
  const currentPath = window.location.pathname;
  if (currentPath === "/team") {
    return <Team />;
  } else if (currentPath === "/gallery") {
    return <Gallery />;
  } else if (currentPath === "/Signin") {
    return <Sign />;
  } else if (currentPath === "/event") {
    return <Menu />;
  } else if (currentPath === "/register") {
    return <Reg />;
  } else if (currentPath === "/payment") {
    return <Payment />;
  }else {
    return (
      <div>
        <NavbarM />
        <Section0 />
        <Section1 />
        <Section2 />
        <Image />
        <Form />
        <Footer />
      </div>
    );
  }
}
export default App;
