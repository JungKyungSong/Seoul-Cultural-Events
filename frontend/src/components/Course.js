import Header from "./Header";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/Course.css'
import '../App.css';
import useDidMountEffect from './useDidMountEffect';

const { kakao } = window;

export default function Course(){
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [location, setLocation] = useState('');
    const [food, setFood] = useState('');
    const [cafe, setCafe] = useState('');
    const [foodInfo, setFoodInfo] = useState('');
    const [cafeInfo, setCafeInfo] = useState('');
    const [order, setOrder] = useState('');
    const [order_array, setOrderArray] = useState([]);

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

    let infowindow;
    let ps;
    let map;

    let infowindow2;
    let ps2;
    let map2;
    
    useEffect(()=>{
       searching();
       searching2();
    },[location])

    useEffect(() => {
        console.log('저장해둔 사용자 위치 불러오기')
        fetch('/api/savedGeo', {credentials: 'include'})
          .then(response =>response.json())
          .then(response => {
              setLocation(response)
          })
          .catch(error => console.log(error));
      }, []);
        
    function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                for (let i=0; i<data.length; i++) {
                    displayMarker(data[i]);    
                }       
            }
    }

    function displayMarker(place) {
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x) 
            });
            kakao.maps.event.addListener(marker, 'click', function() {
                setFood([place.x, place.y])
                setFoodInfo([place.place_name, place.road_address_name, place.address_name, place.phone])
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
            });
            // kakao.maps.event.addListener(marker, 'mouseout', function() {
            //     infowindow.close();
            // });
            // kakao.maps.event.addListener(marker, 'dblclick', function() {
            //     setFood([place.x, place.y])
            //     setFoodInfo([place.place_name, place.road_address_name, place.address_name, place.phone])
            //     infowindow.setContent('<div style="padding:5px;font-size:12px;">' + '음식점 선택!' + '</div>');
            // });
    }

    function searching() {
        infowindow = new kakao.maps.InfoWindow({zIndex:1});

        let mapContainer = document.getElementById('map1');
        let mapOption = {
                    center: new kakao.maps.LatLng(data.Y, data.X),
                    level: 5
        };  
        map = new kakao.maps.Map(mapContainer, mapOption);
        // let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
        // let markerImage = new kakao.maps.MarkerImage(imageSrc)
        let marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(data.Y, data.X),
            //image: markerImage
        });
        kakao.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + data.name + '</div>');
            infowindow.open(map, marker);
        });
        // kakao.maps.event.addListener(marker, 'mouseout', function() {
        //     infowindow.close();
        // });
        ps = new kakao.maps.services.Places(map); 
        ps.categorySearch('FD6', placesSearchCB, {useMapBounds:true}); 
    }

    function placesSearchCB2 (data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
            for (let i=0; i<data.length; i++) {
                displayMarker2(data[i]);    
            }       
        }
    }

function displayMarker2(place) {
        let marker = new kakao.maps.Marker({
            map: map2,
            position: new kakao.maps.LatLng(place.y, place.x) 
        });
        kakao.maps.event.addListener(marker, 'click', function() {
            setCafe([place.x, place.y])
            setCafeInfo([place.place_name, place.road_address_name, place.address_name, place.phone])
            infowindow2.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow2.open(map2, marker);
        });
        // kakao.maps.event.addListener(marker, 'mouseout', function() {
        //     infowindow2.close();
        // });
        // kakao.maps.event.addListener(marker, 'dblclick', function() {
        //     setCafe([place.x, place.y])
        //     setCafeInfo([place.place_name, place.road_address_name, place.address_name, place.phone])
        //     infowindow2.setContent('<div style="padding:5px;font-size:12px;">' + '카페 선택!' + '</div>');
        //  });
    }

function searching2() {
    infowindow2 = new kakao.maps.InfoWindow({zIndex:1});

    let mapContainer = document.getElementById('map2');
    let mapOption = {
                center: new kakao.maps.LatLng(data.Y, data.X),
                level: 5
    };  
    map2 = new kakao.maps.Map(mapContainer, mapOption);
    // let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    // let markerImage = new kakao.maps.MarkerImage(imageSrc)
    let marker = new kakao.maps.Marker({
        map: map2,
        position: new kakao.maps.LatLng(data.Y, data.X),
        //image: markerImage
    });
    kakao.maps.event.addListener(marker, 'click', function() {
        infowindow2.setContent('<div style="padding:5px;font-size:12px;">' + data.name + '</div>');
        infowindow2.open(map2, marker);
    });
    // kakao.maps.event.addListener(marker, 'mouseout', function() {
    //     infowindow2.close();
    // });
    ps2 = new kakao.maps.services.Places(map2); 
    ps2.categorySearch('CE7', placesSearchCB2, {useMapBounds:true}); 
}

    function handleClick(){
        console.log('Cafe:', cafe);
        console.log('Food:', food);
        console.log(data.X);
        console.log(data.Y);
        getOrder();
    };

    useDidMountEffect(()=>{
        setOrderArray([]); // Initialize order_array to an empty array

        console.log("순서 정렬 시작")
        console.log(order[2])
        console.log(cafeInfo)
        console.log(data)
        console.log(foodInfo)

        if (order[2] == 'event') {
        setOrderArray([
            cafeInfo,
            data,
            foodInfo,
        ]);
        } else if (order[2] == 'cafe') {
        setOrderArray([
            foodInfo,
            cafeInfo,
            data,
        ]);
        } else if (order[2] == 'food') {
        setOrderArray([
            data,
            foodInfo,
            cafeInfo,
        ]);
        }
    }, [order])

    function getOrder(){
        let locations = {
            cafe: cafe,
            food: food,
            eventX: data.X,
            eventY: data.Y
        };
        fetch('/api/order', {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Cache-Control': 'no-cache',
                    'credentials': 'include'
                  },
            body: JSON.stringify(locations)
          })
          .then(response => response.json())
          .then(response => {
            setOrder(response);
            console.log(JSON.stringify(response));
          })
          .then(console.log('success'))
          .catch(error => console.log(error));
    }

    return(
        <div>
            <Header/>
            <h2>최적 방문 순서 추천</h2>
            <div className="food_container">
                <p className="food_text">
                    <img className="check_img" src="/check.png" alt="check_icon" />
                    음식점 선택
                </p>
                <div className="food_map" id="map1" style={{width:"85%",height:"350px"}}/>
            </div>
            <div className="cafe_container">
                <p className="cafe_text">
                    <img className="check_img" src="/check.png" alt="check_icon" />
                    카페 선택
                </p>
                <div className="cafe_map" id="map2" style={{width:"85%",height:"350px"}}/>
            </div>
            <div>
                <button className="first_course_button" onClick={handleClick}>경로 추천 받기</button>
            </div>
            <div>
                {order_array.length > 0 ? (
                    <div>
                        <h3>최소 도보 경로</h3>
                        {order_array[0]==data ? (<div>{data.name}</div>): (<div className="course_data"><p className="course_name">{order_array[0][0]}</p><p>{order_array[0][1]}</p><p>{order_array[0][3]}</p></div>)}
                        <div className="vl" />
                        {order_array[1]==data ? (<div>{data.name}</div>): (<div className="course_data"><p className="course_name">{order_array[1][0]}</p><p>{order_array[1][1]}</p><p>{order_array[1][3]}</p></div>)}
                        <div className="vl" />
                        {order_array[2]==data ? (<div>{data.name}</div>): (<div className="course_data"><p className="course_name">{order_array[2][0]}</p><p>{order_array[2][1]}</p><p>{order_array[2][3]}</p></div>)}
                    </div>
                    ):('')}
            </div>
            {/* <div className="vl"></div>
            <div className='course'>
            <div className='course_event_container'>
            <div className="vl"></div>
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
            </div> */}
        {/* </div> */}
        </div>
    )
}