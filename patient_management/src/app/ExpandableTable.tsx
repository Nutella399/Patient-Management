import React from "react";
import { useState } from "react";
import ExpandedInfo from "./ExpandedInfo";
import "./ExpandableTable.css";

const ExpandableTable = () => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  //TODO grab this state from the API backend
  const [data] = useState([
    {
      name: "John Doe",
      address: "123 Main St, Mountain View, Ca",
      dob: "1990-01-01",
      status: "Active",
      occupation: "Engineer",
      email: "john.doe46865314@example.com asdfklasdf ",
      secondaryAddress: "test",
      custom: "words",
      custom1:
        "words can get really really long and I wanna make sure it looks really good still",
      custom2: "words",
      custom3: "words",
      custom4: "words",
      custom5: "words",
    },
    {
      name: "Jane Smith",
      address: "456 Oak Ave",
      dob: "1985-05-12",
      status: "Inactive",
      occupation: "Designer",
      email: "jane.smith@example.com alksdfjksdlk",
      secondaryAddress: "test",
      custom: "words",
      custom1:
        "words can get really really long and I wanna make sure it looks really good still",
      custom2: "words",
      custom3: "words",
      custom4: "words",
      custom5: "words",
    },
    {
      name: "Alice Johnson",
      address: "789 Pine Rd",
      dob: "1992-09-22",
      status: "Active",
      occupation: "Developer",
      email: "alice.johnson@example.com",
      secondaryAddress: "test",
      custom: "words",
      custom1:
        "words can get really really long and I wanna make sure it looks really good still",
      custom2: "words",
      custom3: "words",
      custom4: "words",
      custom5: "words",
    },
  ]);

  const toggleRow = (index: number) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  //TODO add a badge for the status and have different colors for each of the different types
  return (
    <table className="patient-table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Address</th>
          <th>Date of Birth</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <React.Fragment key={index}>
            <tr onClick={() => toggleRow(index)} style={{ cursor: "pointer" }}>
              {expandedRows.includes(index) ? "▼" : "►"}
              <td>{row.name}</td>
              <td>{row.address}</td>
              <td>{row.dob}</td>
              <td>{row.status}</td>
            </tr>
            {expandedRows.includes(index) && (
              <tr>
                <td colSpan={5}>
                  <ExpandedInfo details={row} />
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ExpandableTable;
