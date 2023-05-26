import '../App.css';
import { Link } from 'react-router-dom';
import Bar from './Bar';
import What from './Filter/What'
import Where from './Filter/Where'

function Recommend() {
  return (
    <div>
          <p>Recommend component</p>
          <Bar/>
          <What/>
          <Where/>
    </div>
  );
}

export default Recommend;