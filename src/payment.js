import React, { useState } from "react";
import Signin from "./signform";
import Navbar from "./nav";
import Footer from "./footer";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { ref, push, child, update } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";

const Payment = () => {
  const [amount, setAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstName("raju");
    setLastName("verma");
    setEmail("raju@gmail.com");
    setPhone("9823497343");
    setAmount("150");

    var options = {
      key: "rzp_test_6o8fGAG1dBzYSt", 
      key_secret: "K6Qbc2JrWo8jkw4VLKz5GFm6",
      amount: 150 * 100,
      currency: "INR",
      name: "tri2champ",
      description: "testing purpose",
      handler: function (response) {
        alert("Payment Successful!!");
      },
      prefill: {
        name: firstName + " " + lastName,
        email: email,
        contact: phone,
      },
      notes: {
        address: "Tri2Champ Inc.",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <>
      <Navbar />
      <div style={{ background: "linear-gradient(to left, #a492ff, #7237e7)" }}>
        <div className="user-registration ">
          <div className="container register">
            <div className="row">
              <div className="col-md-3 register-left">
                <br />
                <br />
              </div>
              <div className="col-md-9 register-right">
                <div className="tab-content" id="myTabContent">
                  <h3 className="register-heading ">Payment Details</h3>
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row register-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <p id="firstname">
                            <b>First name: </b>
                            raju
                          </p>
                        </div>
                        <div className="form-group">
                          <p id="email">
                            <b>Email: </b>raju@gmail.com
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <p id="lastname">
                            <b>last name:</b> verma
                          </p>
                        </div>
                        <div className="form-group">
                          <p id="phone">
                            <b>Phone: </b> 9823497343
                          </p>
                        </div>
                        <div className="form-group">
                          <p id="amount">
                            <b>Amount:</b> 150
                          </p>
                        </div>
                        <button
                          type="submit"
                          className="btnRegister bg-emerald-500"
                          value="Submit"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Payment;