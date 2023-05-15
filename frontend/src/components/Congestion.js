import '../App.css';
import { Link } from 'react-router-dom';

function Congestion() {
  return (
    <div>
          <p>Congestion component</p>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/Recommend">Recommend</Link></p>
          <p><Link to="/Detail">Detail</Link></p>
    </div>
  );
}

export default Congestion;