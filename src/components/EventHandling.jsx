
import React, { useEffect, useState } from 'react';
export const EventHandling = () => {

  const handleButtonClick = (user) => {
    console.log(`hey ${user}, welcome`)
    alert("Hey! I am an onClick event.");
  };

  return (
    <>
      <h1>This Is A First Site</h1>
      <img src="img/Nf.svg" alt="Nf.svg"/>
      <p>This is a paragraph</p>

      {/* // ? Function Components with named Function// */}
      
      <button onClick={handleButtonClick}>Click Me </button>
      <br />
      {/* // ? */}
      <button onClick={() => handleButtonClick("kunal")}>Click Me </button>
      <button onClick={() => handleButtonClick("Ram")}>Click Me 2 </button>
    </>
  );
};

export default EventHandling;

