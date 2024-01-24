import React from 'react';
import './Home.css';
import img from './image-qr-code.png';

function Home() {
  return (
    <div className='container'>
      <div className='container1'>
        <div className='image-container'>
          <img src={img} alt='QR Code' />
        </div>
        <div className='text-container'>
          <p className='txt'>Improve your frontend skills by building projects</p>
          <p >Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          <p>Coded by Your Thejaswini</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
