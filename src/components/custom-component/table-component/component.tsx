import React, { useState } from "react";
import clsx from "clsx";
import "./table-style.css";
import { ChevronRight } from "lucide-react";

const Table = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx("tableContainer", { open: isOpen })}>
      <button
        className="toggleButton"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {isOpen ? "Hide" : "Show"} Properties
        <ChevronRight className="toggleIcon" />
      </button>
      <table className={clsx("table", { open: isOpen })}>
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
    </div>
  );
};

export { Table };
