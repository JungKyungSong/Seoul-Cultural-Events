import '../App.css';
import { Link } from 'react-router-dom';

function Detail() {
  return (
    <div>
          <p>Detail component</p>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/Recommend">Recommend</Link></p>
          <p><Link to="/Congestion">Congestion</Link></p>
    </div>
  );
}

export default Detail;