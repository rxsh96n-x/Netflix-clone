import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Akhil roshan & ayisha rasha</h1>
        <div className='banner_buttons'>
        <button className='button'>play</button>
        <button className='button'>my List</button>
       <h1 className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h1>
        </div>
      </div>
    <div className='fade'></div>
    </div>
    )
}

export default Banner