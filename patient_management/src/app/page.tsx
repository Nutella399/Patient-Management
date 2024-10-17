"use client";

import { useState } from "react";
import ExpandableTable from "./ExpandableTable";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  //TODO have the API serve the data terms we want to see based on the searchTerm
  const handleSearch = () => {
    console.log("Searching for: ", searchTerm);
  };

  return (
    <div>
      <header className="header">
        <h1 className="margin-0">Patient Management Dashboard</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input"
          ></input>
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
          <button className="patient-button"> Add Patient </button>{" "}
        </div>
      </header>
      <ExpandableTable />
    </div>
  );
}
