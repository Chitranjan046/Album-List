import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './AddAlbum.css';

const AddAlbum = ({ addAlbumToList }) => {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');

  const handleAddClick = () => {
    addAlbumToList(Number(userId), title);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar path="/" page="Home" />

      <div className="addalbum-container">
        <div className="addalbum-form">
          <h4>Now Enter A New Album Details</h4>
          <div className="inp-container">
            User Id :
            <input
              type="number"
              placeholder="Enter User Id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="inp-container">
            Album Title :
            <input
              type="text"
              placeholder="Enter Album Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <button onClick={handleAddClick}>Adding To List</button>
            <Link to="/">Cancel</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAlbum;
