import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './UpdateAlbum.css';

const UpdateAlbum = ({ album, updateAlbumInList }) => {
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateUserid, setUpdateUserid] = useState('');

  const handleSaveClick = () => {
    const id = album.id;
    const newTitle = updateTitle || album.title;
    const newUserId = Number(updateUserid) || album.userId;

    updateAlbumInList(id, newTitle, newUserId, album);
  };

  return (
    <>
      <Navbar path="/" page="Home" />
      <div className="update-album">
        <div className="form-container">
          <h4>Title: {album.title}</h4>
          <div className="inp-container">
            Enter New Title:
            <input
              type="text"
              placeholder="Enter New Title"
              value={updateTitle}
              onChange={(e) => setUpdateTitle(e.target.value)}
            />
          </div>

          <h4>User Id: {album.userId}</h4>
          <div className="inp-container">
            Enter New UserId:
            <input
              type="number"
              placeholder="Enter New UserId"
              value={updateUserid}
              onChange={(e) => setUpdateUserid(e.target.value)}
            />
          </div>

          <Link to="/">
            <button type="submit" onClick={handleSaveClick}>
              Save
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UpdateAlbum;
