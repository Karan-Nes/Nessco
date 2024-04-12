import React, { useEffect, useState } from "react";
import axios from "axios";
import Comptable from "./Component/Compotable.js";
import Compotable from "./Component/Compotable.js";

const App = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [data, setdata] = useState([]);

  async function submitdata() {
    try {
      const response = await axios.post("http://localhost:3001/feed", {
        fname,
        lname,
        email,
        password,
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async function fetchdata() {
    try {
      const response = await fetch("http://localhost:3001/fetch");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const res = await response.json();
      setdata(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  async function updatedata() {
    try {
      const response = await axios.post("http://localhost:3001/update", { data });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  // useEffect(() => {
  //   fetchdata()
  // }, [])

  return (
    <>
      <input
        type="text"
        required
        onChange={(e) => {
          setfname(e.target.value);
        }}
      />
      <input
        type="text"
        required
        onChange={(e) => {
          setlname(e.target.value);
        }}
      />
      <input
        type="email"
        required
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <input
        type="password"
        required
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button onClick={submitdata}>submit</button>
      <button onClick={fetchdata}>Fetch Data</button>
      <h2>2D Array Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <input
                value={item[0]}
                onChange={(e) => {
                  const newData = [...data];
                  newData.find((dataItem) => dataItem[0] === item[0])[0] =e.target.value;
                  setdata(newData);
                }}
              />
              <input value={item[1]} onChange={(e) => {
                  const newData = [...data];
                  newData.find((dataItem) => dataItem[0] === item[0])[1] =e.target.value;
                  setdata(newData);
                }}/>
              <input value={item[2]} onChange={(e) => {
                  const newData = [...data];
                  newData.find((dataItem) => dataItem[0] === item[0])[2] =e.target.value;
                  setdata(newData);
                }}/>
              <input value={item[3]} onChange={(e) => {
                  const newData = [...data];
                  newData.find((dataItem) => dataItem[0] === item[0])[3] =e.target.value;
                  setdata(newData);
                }}/>
            </tr>
          ))}
        </tbody>
        
      </table>
      <button onClick={updatedata}>Update btn</button>
    </>
  );
};

export default App;
