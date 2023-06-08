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
                'Cache-Control': 'no-cache',
                 'credentials': 'include'
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
        <div className='detail'>
            <div className='detail_img_container'>
                    <img className='detail_img' src = {`/image2/image_${data.id}.jpg`} alt='arbitrary image'/>
                </div>
            <div className='detail_content_container'>
                <div>
                    <p className='detail_name'>{data.name}</p>
                </div>
                <div className='detail_content'>
                <div className='content_container'>
                        <p>행사종류: {data.category}</p>
                        <p>행사일시: {data.date}</p>
                        <p>행사장소: {data.place}</p>
                        <p>행사비용:{data.fee}</p>
                        <p className='detail_homepage'>홈페이지: <a href={data.homepage}>{data.homepage}</a></p>
                    </div>
                </div>
                <div className='detail_button_container'>
                    <button className='detail_button' onClick={goBack}>이전</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Area;