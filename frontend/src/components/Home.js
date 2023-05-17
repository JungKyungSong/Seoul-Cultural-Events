import '../App.css';
import { Link } from 'react-router-dom';
import Bar from './Bar';

function Home() {
  return (
    <div>
          <p>Home component</p>
          <Bar/>
    </div>
  );
}

export default Home;