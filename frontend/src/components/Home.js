import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
  const toRecommend = (e) => {
    window.location.href = '/Recommend' // href 대신 replace를 사용하면 뒤로 가기 불가능
  }
  const toCongestion = (e) => {
    window.location.href = '/Congestion'
  }
  return (
    <div>
          <div>Service Name</div>
          <div><button onClick={toRecommend}>Recommend</button></div>
          <div><button onClick={toCongestion}>Congestion</button></div>
    </div>
  );
}

export default Home;