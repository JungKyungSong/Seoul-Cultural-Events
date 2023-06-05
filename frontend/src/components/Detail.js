import '../App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import '../css/Detail.css'

function Detail() {
  console.log("detail 컴포넌트 시작")
  const { id } = useParams();
  const [data, setData] = useState([]);

  const getDetail = async () => {
    console.log("getDetail 시작")
    setData([]);
    const test = {
        id: id
    };
    await fetch('/api/detail', {
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
        console.log(JSON.stringify(response))
      })
      .then(console.log('front success'))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    console.log("useEffect 시작")
    getDetail();
    console.log("useEffect 끝")
  }, []); 

  const goBack = () => {
    window.history.back();
  };

    return (
        <div>
        <Header />
        <div className='detail'>
            <div className='detail_img_container'>
                    <img className='detail_img' src = {`/image/${data[0].event.id}.jpg`} alt='arbitrary image'/>
                </div>
            <div className='detail_content_container'>
                <div>
                    <p className='detail_name'>{data[0].event.name}</p>
                </div>
                <div className='detail_content'>
                    <div className='classification_container'>
                        <p>행사 종류: </p>
                        <p>행사 일시: </p>
                        <p>행사 장소: </p>
                        <p>행사 비용: </p>
                        <p>홈페이지: </p>
                    </div>
                    <div className='content_container'>
                        <p>{data[0].event.category}</p>
                        <p>{data[0].event.date}</p>
                        <p>{data[0].event.place}</p>
                        <p>{data[0].event.fee}</p>
                        <p className='detail_homepage'><a href={data[0].event.homepage}>{data[0].event.homepage}</a></p>
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

export default Detail;