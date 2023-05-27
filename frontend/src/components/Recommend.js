import '../App.css';
import { Link } from 'react-router-dom';
import Bar from './Bar';
import What from './Filter/What'
import Where from './Filter/Where'
import Sidebar from './Sidebar'
import { useState } from 'react';

function Recommend() {

  return (
    <div>
      <p>Recommend component</p>
      <Bar />
      <Sidebar/>
      <Where/>
      <What/>
    </div>
  );
}

export default Recommend;