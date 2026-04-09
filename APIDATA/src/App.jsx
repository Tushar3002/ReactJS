import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  let [userData, setUserData] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = "https://dummyjson.com/users";
    let res = await fetch(api);
    let data = await res.json();
    console.log(data.users);

    setUserData(data.users);
    setLoading(false);
  };

  // const fetchData = async () => {
  //   try {
  //     const res = await axios.get("https://dummyjson.com/users");
  //     setUserData(res.data.users);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div>
      <ul className="user-list user-list-header">
        <li>
          <h3>Name</h3>
        </li>
        <li>
          <h3>Surname</h3>
        </li>
        <li>
          <h3>Email</h3>
        </li>
      </ul>
      {!loading ? (
        userData &&
        userData.map((val, idx) => {
          return (
            <div key={idx}>
              <ul className="user-list ">
                <li>
                
                  <h3>{val.firstName}</h3>
                </li>
                <li>
                  <h3>{val.lastName}</h3>
                </li>
                <li>
              
                  <h3>{val.email}</h3>
                </li>
              </ul>
            </div>
          );
        })
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
}

export default App;

//https://dummyjson.com/users
