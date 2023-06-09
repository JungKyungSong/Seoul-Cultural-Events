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

  // 혼잡도 미리 불러오기
  useEffect(() => {
    console.log('디폴트 api로 혼잡도 불러오기')
    fetch('/api/test', {credentials: 'include'})
      .then(response => response.json())
      .then(response => {
        setData(response)
        console.log("혼잡도 저장 완료")
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
      // .then(response => response.json())
      // .then(response => {
      //   setData(response);
      // })
      .then(console.log('success'))
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
              <h1>현재 위치</h1>
              {latitude && longitude ? (
                <p>
                  위도: {latitude}, 경도: {longitude}
                </p>
              ) : (
                <p>위치 정보를 가져올 수 없습니다.</p>
              )}
          </div>
          <div>
            <button className='recommend_button' onClick={toRecommend}>행사 정보</button>
            <button className='congestion_button' onClick={toCongestion}>실시간 혼잡도</button>
          </div>
    </div>
  );
}

export default Home;