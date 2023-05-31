import '../App.css';
import Header from './Header';
import '../css/Home.css'
import React, { useEffect } from 'react';

function Home() {

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
            <button className='recommend_button' onClick={toRecommend}>Recommend</button>
            <button className='congestion_button' onClick={toCongestion}>Congestion</button>
          </div>
    </div>
  );
}

export default Home;