"use client";

import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  //TODO grab this state from the API backend
  const [data] = useState([
    { name: "John Doe", address: "123 Main St" },
    { name: "Jane Smith", address: "456 Maple Ave" },
    { name: "Sam Johnson", address: "789 Oak Dr" },
  ]);

  //TODO have the API serve the data terms we want to see based on the searchTerm
  const handleSearch = () => {
    console.log("Searching for: ", searchTerm);
  };

  return (
    <div>
      <header className="header">
        <h1 className="margin-0">Patient Management Dashboard</h1>
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input"
          ></input>
          <button onClick={handleSearch} className="searchButton">
            Search
          </button>
          <button className="patientButton"> Add Patient </button>{" "}
        </div>
      </header>
      <table className="patientTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
