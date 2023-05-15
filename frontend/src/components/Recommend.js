import '../App.css';
import { Link } from 'react-router-dom';

function Recommend() {
  return (
    <div>
          <p>Recommend component</p>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/Congestion">Congestion</Link></p>
          <p><Link to="/Detail">Detail</Link></p>
    </div>
  );
}

export default Recommend;