import React, { useState } from 'react'; 
import Nav from './Nav';
import Home from './Home';
import Apicall from './Apicall';

function Movies() {
  const [hide, sethide] = useState(true);

  const outdata = () => {
    sethide(false);
  };

  return (
    <div>
      <Nav />
      <Home />
      
    
      {hide ? <Apicall /> : <h1>closed</h1>}
    </div>
  );
}

export default Movies;