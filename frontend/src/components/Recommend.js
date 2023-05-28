import '../App.css';
import What from './Filter/What'
import Where from './Filter/Where'
import EventList from './EventList';
import { useState, useEffect } from 'react';
import Header from './Header';
import '../css/Recommend.css'

function Recommend() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(response => {
        const events = Object.values(response);
        setData(events);
      })
      .then(console.log('success'))
      .catch(error => console.log(error));
  }, []); 

  return (
    <div>
      <Header/>
      <p className='recommend_toggle'>
        지역: <Where/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 종류: <What/>
      </p>
      <hr />
      <EventList events={data} />
    </div>
  );
}


export default Recommend;