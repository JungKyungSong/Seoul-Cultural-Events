import '../App.css';
import { Link, Outlet } from 'react-router-dom';

function Bar() {
  return (
    <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Recommend">Recommend</Link></li>
            <li><Link to="/Congestion">Conjestion</Link></li>
            <li><Link to="/Detail">Detail</Link></li>
          </ul>
    </div>
  );
}

export default Bar;