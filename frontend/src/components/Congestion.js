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
    fetch('/api/test')
      //.then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>받은 데이터: {data}</h1>
      <div id='map' style={{width:'500px', height:'350px'}}></div>
    </div>
  );
  
}


export default Congestion;