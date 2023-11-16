// src/components/List.js
import React from 'react';

const List = ({ items }) => {
  return (
    <div>
      <h2>Contact Requests</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>Name:</strong> {item.name}, <strong>Phone:</strong> {item.phone},{' '}
            <strong>Email:</strong> {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;