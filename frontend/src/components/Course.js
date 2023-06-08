import Header from "./Header";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/Course.css'
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
            <div className="vl"></div>
            <div className='course'>
            <div className='course_event_container'>
                <img className='course_img' src = {`/image/${data.id}.jpg`} alt='arbitrary image'/>
                <div className='course_content_container'>
                <div>
                    <p className='course_event_name'>{data.name}</p>
                </div>
                <div className='course_content'>
                    <div className='course_event_content_container'>
                        <p>행사장소: {data.place}</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="vl"></div>
            <div>
                <h1>음식점</h1>
            </div>
            <div className="vl"></div>
            <div>
                <h1>관광명소</h1>
            </div>
        </div>
        </div>
    )
}