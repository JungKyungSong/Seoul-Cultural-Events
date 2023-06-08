import '../App.css';
import Header from './Header';
import '../css/Home.css'
import React, { useEffect, useState } from 'react';

function Home() {

  const [data, setData] = useState('');

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