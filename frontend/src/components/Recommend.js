import '../App.css';
import EventList from './EventList';
import { useState, useEffect } from 'react';
import Header from './Header';
import '../css/Recommend.css'

function Recommend() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(response => {
        const events = Object.values(response);
        setData(events);
      })
      .then(console.log('success'))
      .catch(error => console.log(error));
  }, []); 

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
    {id : 1, province: '강남구'},
    {id : 2, province: '강동구'},
    {id : 3, province: '강북구'},
    {id : 4, province: '강서구'},
    {id : 5, province: '관악구'},
    {id : 6, province: '광진구'},
    {id : 7, province: '구로구'},
    {id : 8, province: '금천구'},
    {id : 9, province: '노원구'},
    {id : 10, province: '도봉구'},
    {id : 11, province: '동대문구'},
    {id : 12, province: '동작구'},
    {id : 13, province: '마포구'},
    {id : 14, province: '서대문구'},
    {id : 15, province: '서초구'},
    {id : 16, province: '성동구'},
    {id : 17, province: '성북구'},
    {id : 18, province: '송파구'},
    {id : 19, province: '양천구'},
    {id : 20, province: '영등포구'},
    {id : 21, province: '용산구'},
    {id : 22, province: '은평구'},
    {id : 23, province: '종로구'},
    {id : 24, province: '중구'},
    {id : 25, province: '중랑구'}
]

const [selectedWhat, setSelectedWhat] = useState('교육/체험');

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

useEffect(()=> {
  console.log(selectedWhat)
  console.log(selectedWhere)
}, [selectedWhat, selectedWhere])

  return (
    <div>
      <Header/>
      <p className='recommend_toggle'>
        지역: <SelectWhere options={provinces}/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 종류: <SelectWhat options={themes}/>
      </p>
      <hr />
      <EventList events={data} />
    </div>
  );
}


export default Recommend;