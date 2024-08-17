// src/Table.js
import React, { useState } from 'react';

function Table() {
  // State to hold the table data
  const [rows, setRows] = useState([]);
  // State for new row input fields
  const [newRow, setNewRow] = useState({ name: '', age: '' });

  // Handle input changes for new row
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewRow({ ...newRow, [name]: value });
  };

  // Handle adding new row
  const handleAddRow = () => {
    if (newRow.name && newRow.age) { // Basic validation
      setRows([...rows, newRow]);
      setNewRow({ name: '', age: '' }); // Clear input fields
    }
  };

  return (
    <div>
      <h1>Data Table</h1>
      <div>
        <input
          type="text"
          name="name"
          value={newRow.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={newRow.age}
          onChange={handleInputChange}
          placeholder="Age"
        />
        <button onClick={handleAddRow}>Add Row</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
