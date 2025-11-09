import React, { useState } from "react";
import clsx from "clsx";
import "./table-style.css";
import { ChevronRight } from "lucide-react";
import { ChevronDown } from "lucide-react";

const Table = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="tableContainer">
      <button
        className="toggleButton"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {isOpen ? "Hide" : "Show"} Properties
        {isOpen ? <ChevronDown /> : <ChevronRight />}
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
