import '../App.css';
import EventList from './EventList';
import { useState, useEffect } from 'react';
import Header from './Header';
import '../css/Recommend.css'

const themes = [
  {id : 1 , category: '교육/체험'},
  {id : 2 , category: '국악'},
  {id : 3 , category: '기타'},
  {id : 4 , category: '독주/독창회'},
  {id : 5 , category: '무용'},
  {id : 6 , category: '뮤지컬/오페라'},
  {id : 7 , category: '연극'},
  {id : 8 , category: '영화'},
  {id : 9 , category: '전시/미술'},
  {id : 10 , category: '콘서트'},
  {id : 11 , category: '클래식'},
  {id : 12 , category: '교육/체험'},
  {id : 13 , category: '축제-기타'},
  {id : 14 , category: '축제-문화/예술'},
  {id : 15 , category: '축제-시민화합'},
  {id : 16 , category: '축제-자연/경관'},
  {id : 17 , category: '축제-전통/역사'}
]

const provinces = [
  {id : 18, province: '강남구'},
  {id : 218, province: '강동구'},
  {id : 38, province: '강북구'},
  {id : 48, province: '강서구'},
  {id : 58, province: '관악구'},
  {id : 68, province: '광진구'},
  {id : 78, province: '구로구'},
  {id : 88, province: '금천구'},
  {id : 98, province: '노원구'},
  {id : 108, province: '도봉구'},
  {id : 118, province: '동대문구'},
  {id : 128, province: '동작구'},
  {id : 138, province: '마포구'},
  {id : 148, province: '서대문구'},
  {id : 158, province: '서초구'},
  {id : 168, province: '성동구'},
  {id : 178, province: '성북구'},
  {id : 188, province: '송파구'},
  {id : 198, province: '양천구'},
  {id : 208, province: '영등포구'},
  {id : 218, province: '용산구'},
  {id : 228, province: '은평구'},
  {id : 238, province: '종로구'},
  {id : 248, province: '중구'},
  {id : 258, province: '중랑구'}
]

function Recommend() {

  const [data, setData] = useState([]);

  const [selectedWhat, setSelectedWhat] = useState('교육/체험');
  const [prevSelectedWhat, setPrevSelectedWhat] = useState('');

  const SelectWhat = (props) => {

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedWhat(value);
        console.log('Selected what:', value);
    };
    
    return (
        <select onChange={handleChange} value={selectedWhat}>
            {props.options.map((option) => (
                <option
                    key={option.id}
                    value={option.category}
                >
                    {option.category}
                </option>
            ))}
        </select>
    );
}

  const [selectedWhere, setSelectedWhere] = useState('강남구');
  const [prevSelectedWhere, setPrevSelectedWhere] = useState('');

  const SelectWhere = (props) => {

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedWhere(value);
        console.log('Selected where:', value);
    };

    return (
        <select onChange={handleChange} value={selectedWhere}>
            {props.options.map((option) => (
                <option
                    key={option.id}
                    value={option.province}
                >
                    {option.province}
                </option>
            ))}
        </select>
    );
}

// useEffect(() => {
//   const data = {
//     where: selectedWhere,
//     what: selectedWhat
//   };
//   fetch('/api/data', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json; charset=utf-8',
//       'Cache-Control': 'no-cache'
//     },
//     body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(response => {
//       const events = Object.values(response);
//       setData([])
//       setData(events);
//     })
//     .then(console.log('한번 디폴트 호출'))
//     .catch(error => console.log(error));
// }, []); 

  useEffect(()=> {
    setData([])
    console.log("시작")
    console.log(selectedWhat)
    console.log(selectedWhere)
    const send = {
      what: selectedWhat,
      where: selectedWhere
    };
    fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify(send)
      })
      .then(response => response.json())
      .then(response => {
        const events = Object.values(response);
        setData(events);
        console.log(JSON.stringify(response))
      })
      .catch(error => console.log(error));
  }, [selectedWhat, selectedWhere])

  return (
    <div>
      <Header/>
      <p className='recommend_toggle'>
        지역: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 종류:
      </p>
      <hr />
      <SelectWhat options={themes}/>
      <SelectWhere options={provinces}/>
      <EventList events={data} />
    </div>
  );
}


export default Recommend;