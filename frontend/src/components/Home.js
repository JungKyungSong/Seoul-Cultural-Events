import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
          <p>Home component2</p>
          <p><Link to="/Recommend">Recommend</Link></p>
          <p><Link to="/Congestion">Congestion</Link></p>
    </div>
  );
}

export default Home;