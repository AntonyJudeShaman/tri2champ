import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

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
  const db = getDatabase(app);
  
  function UserProfile({ userId }) {
    const [userProfile, setUserProfile] = useState(null);
  
    useEffect(() => {
      const userRef = ref(db, `users/${userId}`);
      const unsubscribe = onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setUserProfile(userData);
        } else {
          setUserProfile(null);
        }
      });
  
      return () => {
        // Cleanup the event listener
        unsubscribe();
      };
    }, [db, userId]);
  
    if (!userProfile) {
      return <div>Loading...</div>;
    }

  const { firstName, lastName, email, password } = userProfile;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {firstName}</p>
      <p>Email: {lastName}</p>
      <p>Age: {email}</p>
      <p>Address: {password}</p>
    </div>
  );
}

export default UserProfile;
