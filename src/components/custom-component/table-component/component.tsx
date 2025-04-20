import React, { useState } from "react";
import clsx from "clsx";
import "./table-style.css";

const Table = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="tableContainer">
      <button className="toggleButton" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide" : "Show"} Properties
      </button>
      {isOpen && (
        <table className="table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.property}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export { Table };
