// src/App.js
import React, { useState, useEffect } from 'react';
import List from './components/List';
import Form from './components/Form';
import './App.css';

function App() {
  const [contactRequests, setContactRequests] = useState([]);

  useEffect(() => {
    // Fetch contact data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:5001/api/contacts'); // Replace with your actual base URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setContactRequests(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const addContactRequest = async (contactRequest) => {
    try {
      const response = await fetch('https://https://localhost:5001/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactRequest),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const newContactRequest = await response.json();
      setContactRequests([...contactRequests, newContactRequest]);
    } catch (error) {
      console.error('Error adding contact request:', error);
    }
  };

  return (
    <div className="App">
      <h1>Contact Request Management</h1>
      <List items={contactRequests} />
      <Form addContactRequest={addContactRequest} />
    </div>
  );
}

export default App;
