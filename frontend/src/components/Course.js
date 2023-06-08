import Header from "./Header";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/Detail.css'
import '../App.css';

export default function Course(){
    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const test = {
          id: id
      };
      fetch('/api/detail', {
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
    return(
        <div>
            <Header/>
            <h1>경로 추천</h1>
            <div className='detail'>
            <div className='detail_img_container'>
                    <img className='detail_img' src = {`/image/${data.id}.jpg`} alt='arbitrary image'/>
                </div>
            <div className='detail_content_container'>
                <div>
                    <p className='detail_name'>{data.name}</p>
                </div>
                <div className='detail_content'>
                    <div className='content_container'>
                        <p>행사장소: {data.place}</p>
                    </div>
                </div>
            </div>
            <div>
                <h1>음식점</h1>
            </div>
            <div>
                <h1>관광명소</h1>
            </div>
        </div>
        </div>
    )
}