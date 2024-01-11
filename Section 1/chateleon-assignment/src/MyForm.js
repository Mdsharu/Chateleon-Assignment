import React, { useState } from 'react';

import './MyForm.css';
import EntryTable from './EntryTable';
import { useNavigate } from 'react-router-dom';

const MyForm = () => {
  const [formData, setFormData] = useState({
    id: '', 
    name: '',
    email: '',
    age: '',
    dob: '',
    gender: 'male',
  });

  const [formEntries, setFormEntries] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { ...formData };
    setFormEntries([...formEntries, newEntry]);
    setFormData({
      id: '',
      name: '',
      email: '',
      age: '',
      dob: '',
      gender: 'male',
    });
  };

  const navigate = useNavigate();

  const navigateTable = () => {
    navigate("/table");
  }

  return (
    <div className="form-container">

        <h1 className='heading'>ADD A PERSON</h1>
        
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age (greater than 12):</label>
        <input
          type="number"
          id="age"
          name="age"
          min="13"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <button type="submit" onSubmit={navigateTable}>Add Entry</button>
      </form>

      {formEntries.length > 0 && (
        <EntryTable section={formEntries} onSubmit={navigateTable}></EntryTable>
      )}
    </div>
  );
};

export default MyForm;
