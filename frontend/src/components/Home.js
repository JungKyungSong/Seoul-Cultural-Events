import '../App.css';
import Header from './Header';

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
            <h1>ArtVenture</h1>
            <h1>Seoul</h1>
          </div>
          <div className='home_buttons'>
            <button className='home_button' onClick={toRecommend}>Recommend</button>
            <button className='home_button' onClick={toCongestion}>Congestion</button>
          </div>
    </div>
  );
}

export default Home;