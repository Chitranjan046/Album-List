import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import './AddAlbum.css';

const AddAlbum = (props) => {

  //this function get all the input like userid and title then call add albumm function for add it on the album list
  const getAlbumFormData = () => {
    const userId = document.getElementById('aaform-userid-inp').value;
    const title = document.getElementById('aaform-title-inp').value;
    props.addAlbumToList(Number(userId), title)
  }

  return (
    <>
      {/* navber */}
      <Navbar path="/" page="Home" />


      <div className='addalbum-container'>
        <div className='addalbum-form'>
          <h4>Now Enter A New Album Details</h4>
          <div className='inp-container'>
             User Id :
            <input id='aaform-userid-inp' type="number" placeholder='Enter User Id' />
          </div>
          <div className='inp-container'>
             Album Title :
            <input id='aaform-title-inp' type="text" placeholder='Enter Album Title' />
          </div>
          <div>
            <Link to="/"><button onClick={getAlbumFormData}>Adding To List</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddAlbum
