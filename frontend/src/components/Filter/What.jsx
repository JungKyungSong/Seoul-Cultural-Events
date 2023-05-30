import React, { useState } from 'react'

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

const SelectWhat = (props) => {
    const [selectedWhat, setSelectedWhat] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedWhat(value);
        console.log('Selected what:', value);
    };
    
    return (
        <select className='recommend_select_box' onChange={handleChange} value={selectedWhat}>
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

const What = () => {
  return (
  <SelectWhat options={themes}/>
  )
};

export default What;