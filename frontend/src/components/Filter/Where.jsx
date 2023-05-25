import React, { useState } from 'react'

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


const SelectWhere = (props) => {
    return (
        <select>
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


const Where = () => {
    return (
    <SelectWhere options={provinces}/>
    )
  };
  
  export default Where;
  