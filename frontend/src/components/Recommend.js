import '../App.css';
import { Link } from 'react-router-dom';
import Bar from './Bar';
import What from './Filter/What'
import Where from './Filter/Where'
import { useState, useEffect } from 'react';

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
          <p>Recommend component</p>
          <Bar/>
          <What/>
          <Where/>
          <p>{first}</p>
    </div>
  );
}

export default Recommend;