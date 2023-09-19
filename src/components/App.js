import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AddAlbum from './AddAlbum';
import AlbumsList from './AlbumsList';
import UpdateAlbum from './UpdateAlbum';

function App() {
  const [albums, setAlbums] = useState([]);
  const [updateAlbum, setUpdateAlbum] = useState({});

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const json = await response.json();
        setAlbums(json);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    }

    fetchAlbums();
  }, []);

  const deleteAlbumFromList = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, { method: 'DELETE' })
      .then(() => {
        const newAlbums = albums.filter((album) => album.id !== id);
        setAlbums(newAlbums);
        alert('Your Album Deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting album:', error);
      });
  };

  const updateAlbumInList = async (id, updateTitle, updateUserid, oldAlbum) => {
    const index = albums.indexOf(oldAlbum);
    let updatedAlbum = [];
    if (id < 100) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            userId: updateUserid,
            id: id,
            title: updateTitle,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        updatedAlbum = await response.json();
      } catch (error) {
        console.error('Error updating album:', error);
      }
    } else {
      updatedAlbum = {
        userId: updateUserid,
        id: id,
        title: updateTitle,
      };
    }

    const updatedAlbums = [...albums];
    updatedAlbums[index] = updatedAlbum;
    setAlbums(updatedAlbums);
    alert('Update Successfully done');
  };

  const addAlbumToList = async (userId, title) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
        method: 'POST',
        body: JSON.stringify({
          userId: userId,
          title: title,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await response.json();

      const newAlbum = {
        userId: userId,
        id: json.id,
        title: title,
      };
      setAlbums([...albums, newAlbum]);
      alert('New Album added successfully in the bottom');
    } catch (error) {
      console.error('Error adding album:', error);
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<AlbumsList albums={albums} setUpdateAlbum={setUpdateAlbum} deleteAlbumFromList={deleteAlbumFromList} />}
        ></Route>
        <Route path="/add-album" element={<AddAlbum addAlbumToList={addAlbumToList} />}></Route>
        <Route path="/update-album" element={<UpdateAlbum album={updateAlbum} updateAlbumInList={updateAlbumInList} />}></Route>
      </Routes>
    </>
  );
}

export default App;
