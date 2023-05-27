import '../App.css';
import { useEffect, useState } from 'react';

const { kakao } = window;

function Congestion() {

  useEffect(() => {
    const container = document.getElementById('map')
    const option = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 2
    }
    const map = new kakao.maps.Map(container, option);
  
  }, [])

  const [data, setData] = useState('');

  useEffect(() => {
    console.log(data)
    fetch('/api/test')
      .then(response => response.json())
      .then(response => setData(JSON.stringify(response)))
      .then(console.log(data))
      .then(console.log('success'))
      .catch(error => console.log(error));
  }, []);

  const [events, setEvents] = useState('');

  useEffect(() => {
    fetch('/api/events')
      .then(response => response.json())
      .then(response => setEvents(JSON.stringify(response)))
      .then(console.log(events))
      .then(console.log('success'))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h5>받은 데이터: {events} </h5>
      <h5>받은 데이터: {data} </h5>
      <div id='map' style={{width:'500px', height:'350px'}}></div>
    </div>
  );
  
}


export default Congestion;