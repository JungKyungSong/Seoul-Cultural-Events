import '../App.css';
import Header from './Header';
import '../css/Home.css'
import React, { useEffect, useState } from 'react';

function Home() {

  const [data, setData] = useState('');

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  // 실시간 혼잡도 api 미리 호출
  useEffect(() => {
    fetch('/api/seoul', {credentials: 'include'})
      .then(response => response.json())
      .then(response => {
        setData(response)
        console.log("실시간 혼잡도 정보 저장 완료")
      })
      .catch(error => console.log(error));
  }, []);

  
  useEffect(() => {
    const location = {
        latitude: latitude,
        longitude: longitude
    };
    fetch('/api/geo', {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Cache-Control': 'no-cache',
                'credentials': 'include'
              },
        body: JSON.stringify(location)
      })
      .catch(error => console.log(error));
  }, [latitude, longitude]); 


  const toRecommend = (e) => {
    window.location.href = '/Recommend' // href 대신 replace를 사용하면 뒤로 가기 불가능
  }
  const toCongestion = (e) => {
    window.location.href = '/Congestion'
  }
  return (
    <div>
      <Header/>
          <div>
            <h1 className='title'>ArtVenture Seoul</h1>
            <img className='seoul_map' src='seoul.png' alt='seoul map'></img>
          </div>
          <div>
            <button className='recommend_button' onClick={toRecommend}>행사 정보</button>
            <button className='congestion_button' onClick={toCongestion}>실시간 혼잡도</button>
          </div>
    </div>
  );
}

export default Home;