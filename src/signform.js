import React, { useState, setState } from "react";
import "./signin.scss";
import logo from "./logo1.png";
import "./App.css";
import "./gallery.css";
import Footer from "./footer";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { ref, push, child, update } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyDg17XbzPaAIEU-zwhSHrwLcr3Sv4JkxNY",
  authDomain: "react-6efd3.firebaseapp.com",
  databaseURL: "https://react-6efd3-default-rtdb.firebaseio.com",
  projectId: "react-6efd3",
  storageBucket: "react-6efd3.appspot.com",
  messagingSenderId: "514648674166",
  appId: "1:514648674166:web:2d0972c159f2b059d17457",
  measurementId: "G-PQWJVPF8FH",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function Signin() {
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [age, setAge] = useState(null);
  const [phone, setPhone] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);

  function validate() {
    if (firstName == "") {
      alert("Name is Empty");
      return false;
    } else if (!/^[A-Za-z -]{3,25}$/.test(firstName)) {
      alert("Invalid Name");
      return false;
    }
    if (lastName == "") {
      alert("Name is Empty");
      return false;
    } else if (!/^[A-Za-z -]{3,25}$/.test(lastName)) {
      alert("Invalid Name");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email address");
      return false;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number");
      return false;
    }

    return true;
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setfirstName(value);
    }
    if (id === "lastName") {
      setlastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "age") {
      setAge(value);
    }
    if (id === "phone") {
      setPhone(value);
    }
    if (id === "city") {
      setCity(value);
    }
    if (id === "state") {
      setState(value);
    }
  };

  const handleSubmit = () => {
    if (validate()) {
      let obj = {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Phone: phone,
        Age: age,
        City: city,
        State: state,
      };

      const newUserRef = push(ref(database, "users/" + firstName));
      const newUserId = newUserRef.key;

      const updates = {};
      updates["/users/" + newUserId] = obj;
      update(ref(database), updates);
    }
  };

  return (
    <>
      <div className="user-registration ">
        <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left"><br/><br/>
              <a href="./App">
                <input type="button" href="./App" className="" value="Home" />
              </a>

            </div>
            <div className="col-md-9 register-right">
              <div className="tab-content" id="myTabContent">
                <h3 className="register-heading">User Details</h3>
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control rounded-lg mt-3"
                          placeholder="First Name "
                          value={firstName}
                          id="firstName"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control rounded-lg mt-3"
                          placeholder="Email "
                          value={email}
                          id="email"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control rounded-lg mt-3"
                          placeholder="Age "
                          value={age}
                          id="age"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group ">
                        <input
                          type="text"
                          className="form-control rounded-lg mt-3"
                          placeholder="Last Name "
                          value={lastName}
                          id="lastName"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          minLength="10"
                          maxLength="10"
                          className="form-control rounded-lg mt-3"
                          placeholder="Phone"
                          id="phone"
                          onChange={(e) => handleChange(e)}
                          value={phone}
                        />
                      </div>

                      <input
                        type="submit"
                        className="btnRegister bg-emerald-500"
                        value="Submit"
                        onClick={() => handleSubmit()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
