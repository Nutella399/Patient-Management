import React from "react";
import "./ExpandableTable.css";

interface ExpandedInfoProps {
  details: {
    [key: string]: any;
  };
}

const ExpandedInfo: React.FC<ExpandedInfoProps> = ({ details }) => {
  const excludedKeys = ["name", "address", "dob", "status"];
  const filteredDetails = Object.entries(details).filter(
    ([key]) => !excludedKeys.includes(key)
  );

  return (
    <div className="expanded-info">
      <div className="grid">
        {filteredDetails.map(([key, value]) => (
          <div key={key} className="grid-item">
            <strong>{key.replace(/([A-Z])/g, " $1")}: </strong> {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandedInfo;
