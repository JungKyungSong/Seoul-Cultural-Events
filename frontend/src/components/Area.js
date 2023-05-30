import '../App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';

function Area() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const test = {
        id: id
    };
    fetch('/api/area', {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Cache-Control': 'no-cache'
              },
        body: JSON.stringify(test)
      })
      .then(response => response.json())
      .then(response => {
        setData(response);
      })
      .then(console.log('success'))
      .catch(error => console.log(error));

  }, [id]); 

  const goBack = () => {
    window.history.back();
  };

    return (
      <div>
        <Header />
          <p>Category: {data.category}</p>
          <p>Name: {data.name}</p>
          <p>Date: {data.date}</p>
          <p>Place: {data.place}</p>
          <p>Fee: {data.fee}</p>
          <p>Homepage: <a href={data.homepage}>{data.homepage}</a></p>
          <p>Address: {data.address}</p>
          <button onClick={goBack}>이전</button>
      </div>
    )
}

export default Area;