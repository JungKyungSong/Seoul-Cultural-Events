import '../App.css';
import { Link } from 'react-router-dom';
import What from './Filter/What'
import Where from './Filter/Where'
import { useState, useEffect } from 'react';
import Header from './Header';
import '../css/Recommend.css'

function Recommend() {
   const [first, setFirst] = useState('');

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(response => setFirst(JSON.stringify(response)))
      .then(console.log(first))
      .then(console.log('success'))
      .catch(error => console.log(error));
  }, []); 

  return (
    <div>
      <Header/>
          <p>지역: <Where/> &nbsp; &nbsp; &nbsp; &nbsp; 종류: <What/></p>
          { <p>{first}</p> }
    </div>
  );
}

export default Recommend;