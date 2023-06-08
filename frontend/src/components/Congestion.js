import '../App.css';
import { useEffect, useState } from 'react';
import area from '../congestion.json'
import Header from './Header';
import useDidMountEffect from './useDidMountEffect';
import { useNavigate } from 'react-router-dom';
import '../css/Congestion.css'

const { kakao } = window;

function Congestion() {

  const navigate = useNavigate();
    const handleClick = (id) => {
      navigate(`/Area/${id}`)
      window.location.reload()
  }

  const [data, setData] = useState('');

  const red = {
    fillColor: '#FF0000',
    strokeColor: '#FF0000',
  }

  const orange = {
    fillColor: '#FF8C00',
    strokeColor: '#FF8C00',
  }

  const yellow = {
    fillColor: '#FFFF00',
    strokeColor: '#FFFF00',
  }

  const green = {
    fillColor: '#00FF00',
    strokeColor: '#00FF00',
  }

  // 혼잡도 불러오기
  // useEffect(() => {
  //   console.log('디폴트 api로 혼잡도 불러오기')
  //   fetch('/api/test', {credentials: 'include'})
  //     .then(response => response.json())
  //     .then(response => {
  //       setData(response)
  //     })
  //     .catch(error => console.log(error));
  // }, []);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('저장해둔 혼잡도 불러오기')
    fetch('/api/savedData', {credentials: 'include'})
      .then(response =>response.json())
      // .then(response => {
      //   if (response.ok) {
      //     return response.json();
      //   } else {
      //     throw new Error('응답이 비어있습니다.');
      //   }
      // })
      .then(response => {
        // if (response===undefined || response === 'undefinded') {
        //   console.log("시간 시작")
        //   setTimeout(() => {
        //     window.location.reload(); // 페이지 리로드
        //   }, 30000); // 30초 후 리로드
        // }
        // else {
          console.log("데이터 도착")
          //setLoading(true)
          let parsedData = JSON.parse(response.json)
          setData(parsedData)
        // }
        console.log("프론트에서 확인")
        console.log(parsedData)
      })
      .catch(error => console.log(error));
  }, []);

  const [cong, setCong] = useState([]);

  // 혼잡도를 지역과 매핑해서 cong에 저장
  useDidMountEffect(() => {
    console.log('혼잡도 정보가 도착해서 지역과 매핑')
    let areas = Object.keys(data).map(area => data[area])
    console.log(areas)
    setCong(areas)
    console.log(cong)
  }, [data]);

  const [events, setEvents] = useState('');

  useDidMountEffect(() => {
    console.log('cong가 변경되어 문화행사 정보 불러오기, drawing 함수 호출')
    fetch('/api/events', {credentials: 'include'}) // 행사 정보 불러오기
      .then(response => response.json())
      .then(response => {
        const events = Object.values(response);
        setEvents(events)
        return events
      })
      .then((events) => drawing(events))
      .then(console.log('success'))
      .catch(error => console.log(error));
  }, [cong]);

    let polygon1
    let polygon2
    let polygon3
    let polygon4
    let polygon5
    let polygon6
    let polygon7
    let polygon8
    let polygon9
    let polygon10
    let polygon11
    let polygon12
    let polygon13
    let polygon14
    let polygon15
    let polygon16
    let polygon17
    let polygon18
    let polygon19
    let polygon20
    let polygon21
    let polygon22
    let polygon23
    let polygon24
    let polygon25
    let polygon26
    let polygon27
    let polygon28
    let polygon29
    let polygon30
    let polygon31
    let polygon32
    let polygon33
    let polygon34
    let polygon35
    let polygon36
    let polygon37
    let polygon38
    let polygon39
    let polygon40
    let polygon41
    let polygon42
    let polygon43
    let polygon44
    let polygon45
    let polygon46
    let polygon47
    let polygon48
    let polygon49
    let polygon50

  function drawing(events) {
    console.log("drawing start")
    console.log("event는 다음과 같습니다.")
    console.log(events)
    const container = document.getElementById('map')
    const option = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 9
    }
    let map = new kakao.maps.Map(container, option);

    polygon1 = new kakao.maps.Polygon({
        path:polygonPath1,
        strokeOpacity: 0.8, 
        strokeStyle: 'longdash', 
        fillOpacity: 0.7 
      });
    polygon2 = new kakao.maps.Polygon({
        path:polygonPath2,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon3 = new kakao.maps.Polygon({
        path:polygonPath3,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon4 = new kakao.maps.Polygon({
        path:polygonPath4,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon5 = new kakao.maps.Polygon({
        path:polygonPath5,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon6 = new kakao.maps.Polygon({
        path:polygonPath6,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon7 = new kakao.maps.Polygon({
        path:polygonPath7,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon8 = new kakao.maps.Polygon({
        path:polygonPath8,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon9 = new kakao.maps.Polygon({
        path:polygonPath9,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon10 = new kakao.maps.Polygon({
        path:polygonPath10,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon11 = new kakao.maps.Polygon({
        path:polygonPath11,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon12 = new kakao.maps.Polygon({
        path:polygonPath12,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon13 = new kakao.maps.Polygon({
        path:polygonPath13,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon14 = new kakao.maps.Polygon({
        path:polygonPath14,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon15 = new kakao.maps.Polygon({
        path:polygonPath15,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon16 = new kakao.maps.Polygon({
        path:polygonPath16,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon17 = new kakao.maps.Polygon({
        path:polygonPath17,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon18 = new kakao.maps.Polygon({
        path:polygonPath18,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon19 = new kakao.maps.Polygon({
        path:polygonPath19,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon20 = new kakao.maps.Polygon({
        path:polygonPath20,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon21 = new kakao.maps.Polygon({
        path:polygonPath21,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon22 = new kakao.maps.Polygon({
        path:polygonPath22,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon23 = new kakao.maps.Polygon({
        path:polygonPath23,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon24 = new kakao.maps.Polygon({
        path:polygonPath24,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon25 = new kakao.maps.Polygon({
        path:polygonPath25,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon26 = new kakao.maps.Polygon({
        path:polygonPath26,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon27 = new kakao.maps.Polygon({
        path:polygonPath27,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon28 = new kakao.maps.Polygon({
        path:polygonPath28,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon29 = new kakao.maps.Polygon({
        path:polygonPath29,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon30 = new kakao.maps.Polygon({
        path:polygonPath30,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon31 = new kakao.maps.Polygon({
        path:polygonPath31,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon32 = new kakao.maps.Polygon({
        path:polygonPath32,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon33 = new kakao.maps.Polygon({
        path:polygonPath33,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon34 = new kakao.maps.Polygon({
        path:polygonPath34,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon35 = new kakao.maps.Polygon({
        path:polygonPath35,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon36 = new kakao.maps.Polygon({
        path:polygonPath36,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon37 = new kakao.maps.Polygon({
        path:polygonPath37,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon38 = new kakao.maps.Polygon({
        path:polygonPath38,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon39 = new kakao.maps.Polygon({
        path:polygonPath39,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon40 = new kakao.maps.Polygon({
        path:polygonPath40,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon41 = new kakao.maps.Polygon({
        path:polygonPath41,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon42 = new kakao.maps.Polygon({
        path:polygonPath42,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon43 = new kakao.maps.Polygon({
        path:polygonPath43,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon44 = new kakao.maps.Polygon({
        path:polygonPath44,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon45 = new kakao.maps.Polygon({
        path:polygonPath45,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon46 = new kakao.maps.Polygon({
        path:polygonPath46,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon47 = new kakao.maps.Polygon({
        path:polygonPath47,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon48 = new kakao.maps.Polygon({
        path:polygonPath48,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon49 = new kakao.maps.Polygon({
        path:polygonPath49,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });
    polygon50 = new kakao.maps.Polygon({
        path:polygonPath50,
        strokeOpacity: 0.8,
        strokeStyle: 'longdash', 
        fillOpacity: 0.7
    });

  const polygons = [
    polygon1,polygon2,polygon3,polygon4,polygon5,
    polygon6,polygon7,polygon8,polygon9,polygon10,
    polygon11,polygon12,polygon13,polygon14,polygon15,
    polygon16,polygon17,polygon18,polygon19,polygon20,
    polygon21,polygon22,polygon23,polygon24,polygon25,
    polygon26,polygon27,polygon28,polygon29,polygon30,
    polygon31,polygon32,polygon33,polygon34,polygon35,
    polygon36,polygon37,polygon38,polygon39,polygon40,
    polygon41,polygon42,polygon43,polygon44,polygon45,
    polygon46,polygon47,polygon48,polygon49,polygon50,]

    for (let i=0; i<50; i++) {
      let targetPolygon = polygons[i];
      if (cong[i] == "붐빔") {
        targetPolygon.setOptions(red);
      }
      else if (cong[i] == "약간 붐빔") {
        targetPolygon.setOptions(orange);
      }
      else if (cong[i] == "보통") {
        targetPolygon.setOptions(yellow);
      }
      else {
        targetPolygon.setOptions(green);
      }
      targetPolygon.setMap(map)
    }

    const positions = events.map((event) => ({
      title: event.name,
      latlng: new kakao.maps.LatLng(event.Y, event.X),
    }));
  
    const imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/2018/pc/img/marker_spot.png ";
  
    let iwContent_array = []
    let infowindow_array = []
    let marker = []
    
    for (let i = 0; i < positions.length; i ++) {
      
      // 마커 이미지의 이미지 크기 입니다
      let imageSize = new kakao.maps.Size(14, 20); 
      
      // 마커 이미지를 생성합니다    
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
      
      // 마커를 생성합니다
      let marker_one = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image : markerImage // 마커 이미지 
      });

      marker.push(marker_one)

      let iwContent = `<div style="width:250px; height:150px; backgroundcolor: white; border-color: blue; border-style: solid;">행사명 : ${positions[i].title}</div>`;

      iwContent_array.push(iwContent)

      let infowindow = new kakao.maps.InfoWindow({
        content : iwContent
      });

      infowindow_array.push(infowindow)

          // 각 마커에 대해서 이벤트 등록을 반복적으로 수행합니다
      marker.forEach((one,index) => {

        let infowindow = infowindow_array[index];

        // 마커에 마우스 오버 이벤트 등록
        kakao.maps.event.addListener(one, 'mouseover', function() {
          // 해당 마커에 대한 인포윈도우를 표시합니다
          infowindow.open(map, one);
        });

        // 마커에 마우스 아웃 이벤트 등록
        kakao.maps.event.addListener(one, 'mouseout', function() {
          // 해당 마커에 대한 인포윈도우를 제거합니다
          infowindow.close();
        });

        kakao.maps.event.addListener(one, 'click', function() {
          handleClick(index)
        });
      });
    }
  }

  const {area1, area2, area3, area4, area5, area6, area7, area8, area9, area10,
         area11, area12, area13, area14, area15, area16, area17, area18, area19, area20,
         area21, area22, area23, area24, area25, area26, area27, area28, area29, area30,
         area31, area32, area33, area34, area35, area36, area37, area38, area39, area40,
         area41, area42, area43, area44, area45, area46, area47, area48, area49, area50,
  } = area

  let polygonPath1 = []
  let polygonPath2 = []
  let polygonPath3 = []
  let polygonPath4 = []
  let polygonPath5 = []
  let polygonPath6 = []
  let polygonPath7 = []
  let polygonPath8 = []
  let polygonPath9 = []
  let polygonPath10 = []
  let polygonPath11 = []
  let polygonPath12 = []
  let polygonPath13 = []
  let polygonPath14 = []
  let polygonPath15 = []
  let polygonPath16 = []
  let polygonPath17 = []
  let polygonPath18 = []
  let polygonPath19 = []
  let polygonPath20 = []
  let polygonPath21 = []
  let polygonPath22 = []
  let polygonPath23 = []
  let polygonPath24 = []
  let polygonPath25 = []
  let polygonPath26 = []
  let polygonPath27 = []
  let polygonPath28 = []
  let polygonPath29 = []
  let polygonPath30 = []
  let polygonPath31 = []
  let polygonPath32 = []
  let polygonPath33 = []
  let polygonPath34 = []
  let polygonPath35 = []
  let polygonPath36 = []
  let polygonPath37 = []
  let polygonPath38 = []
  let polygonPath39 = []
  let polygonPath40 = []
  let polygonPath41 = []
  let polygonPath42 = []
  let polygonPath43 = []
  let polygonPath44 = []
  let polygonPath45 = []
  let polygonPath46 = []
  let polygonPath47 = []
  let polygonPath48 = []
  let polygonPath49 = []
  let polygonPath50 = []

  for (let i = 0; i < area1.length; i++) {
    let obj = new kakao.maps.LatLng(area1[i][1],area1[i][0])
    polygonPath1.push(obj)
  }

  for (let i = 0; i < area2.length; i++) {
    let obj = new kakao.maps.LatLng(area2[i][1],area2[i][0])
    polygonPath2.push(obj)
  }

  for (let i = 0; i < area3.length; i++) {
    let obj = new kakao.maps.LatLng(area3[i][1],area3[i][0])
    polygonPath3.push(obj)
  }

  for (let i = 0; i < area4.length; i++) {
    let obj = new kakao.maps.LatLng(area4[i][1],area4[i][0])
    polygonPath4.push(obj)
  }

  for (let i = 0; i < area5.length; i++) {
    let obj = new kakao.maps.LatLng(area5[i][1],area5[i][0])
    polygonPath5.push(obj)
  }

  for (let i = 0; i < area6.length; i++) {
    let obj = new kakao.maps.LatLng(area6[i][1],area6[i][0])
    polygonPath6.push(obj)
  }

  for (let i = 0; i < area7.length; i++) {
    let obj = new kakao.maps.LatLng(area7[i][1],area7[i][0])
    polygonPath7.push(obj)
  }
  
  for (let i = 0; i < area8.length; i++) {
    let obj = new kakao.maps.LatLng(area8[i][1],area8[i][0])
    polygonPath8.push(obj)
  }

  for (let i = 0; i < area9.length; i++) {
    let obj = new kakao.maps.LatLng(area9[i][1],area9[i][0])
    polygonPath9.push(obj)
  }

  for (let i = 0; i < area10.length; i++) {
    let obj = new kakao.maps.LatLng(area10[i][1],area10[i][0])
    polygonPath10.push(obj)
  }

  for (let i = 0; i < area11.length; i++) {
    let obj = new kakao.maps.LatLng(area11[i][1],area11[i][0])
    polygonPath11.push(obj)
  }

  for (let i = 0; i < area12.length; i++) {
    let obj = new kakao.maps.LatLng(area12[i][1],area12[i][0])
    polygonPath12.push(obj)
  }

  for (let i = 0; i < area13.length; i++) {
    let obj = new kakao.maps.LatLng(area13[i][1],area13[i][0])
    polygonPath13.push(obj)
  }

  for (let i = 0; i < area1.length; i++) {
    let obj = new kakao.maps.LatLng(area1[i][1],area1[i][0])
    polygonPath1.push(obj)
  }

  for (let i = 0; i < area14.length; i++) {
    let obj = new kakao.maps.LatLng(area14[i][1],area14[i][0])
    polygonPath14.push(obj)
  }

  for (let i = 0; i < area15.length; i++) {
    let obj = new kakao.maps.LatLng(area15[i][1],area15[i][0])
    polygonPath15.push(obj)
  }

  for (let i = 0; i < area16.length; i++) {
    let obj = new kakao.maps.LatLng(area16[i][1],area16[i][0])
    polygonPath16.push(obj)
  }

  for (let i = 0; i < area17.length; i++) {
    let obj = new kakao.maps.LatLng(area17[i][1],area17[i][0])
    polygonPath17.push(obj)
  }

  for (let i = 0; i < area18.length; i++) {
    let obj = new kakao.maps.LatLng(area18[i][1],area18[i][0])
    polygonPath18.push(obj)
  }

  for (let i = 0; i < area19.length; i++) {
    let obj = new kakao.maps.LatLng(area19[i][1],area19[i][0])
    polygonPath19.push(obj)
  }

  for (let i = 0; i < area20.length; i++) {
    let obj = new kakao.maps.LatLng(area20[i][1],area20[i][0])
    polygonPath20.push(obj)
  }

  for (let i = 0; i < area21.length; i++) {
    let obj = new kakao.maps.LatLng(area21[i][1],area21[i][0])
    polygonPath21.push(obj)
  }

  for (let i = 0; i < area22.length; i++) {
    let obj = new kakao.maps.LatLng(area22[i][1],area22[i][0])
    polygonPath22.push(obj)
  }

  for (let i = 0; i < area23.length; i++) {
    let obj = new kakao.maps.LatLng(area23[i][1],area23[i][0])
    polygonPath23.push(obj)
  }

  for (let i = 0; i < area24.length; i++) {
    let obj = new kakao.maps.LatLng(area24[i][1],area24[i][0])
    polygonPath24.push(obj)
  }

  for (let i = 0; i < area25.length; i++) {
    let obj = new kakao.maps.LatLng(area25[i][1],area25[i][0])
    polygonPath25.push(obj)
  }

  for (let i = 0; i < area26.length; i++) {
    let obj = new kakao.maps.LatLng(area26[i][1],area26[i][0])
    polygonPath26.push(obj)
  }

  for (let i = 0; i < area27.length; i++) {
    let obj = new kakao.maps.LatLng(area27[i][1],area27[i][0])
    polygonPath27.push(obj)
  }

  for (let i = 0; i < area28.length; i++) {
    let obj = new kakao.maps.LatLng(area28[i][1],area28[i][0])
    polygonPath28.push(obj)
  }

  for (let i = 0; i < area29.length; i++) {
    let obj = new kakao.maps.LatLng(area29[i][1],area29[i][0])
    polygonPath29.push(obj)
  }

  for (let i = 0; i < area30.length; i++) {
    let obj = new kakao.maps.LatLng(area30[i][1],area30[i][0])
    polygonPath30.push(obj)
  }

  for (let i = 0; i < area31.length; i++) {
    let obj = new kakao.maps.LatLng(area31[i][1],area31[i][0])
    polygonPath31.push(obj)
  }

  for (let i = 0; i < area32.length; i++) {
    let obj = new kakao.maps.LatLng(area32[i][1],area32[i][0])
    polygonPath32.push(obj)
  }

  for (let i = 0; i < area33.length; i++) {
    let obj = new kakao.maps.LatLng(area33[i][1],area33[i][0])
    polygonPath33.push(obj)
  }

  for (let i = 0; i < area34.length; i++) {
    let obj = new kakao.maps.LatLng(area34[i][1],area34[i][0])
    polygonPath34.push(obj)
  }

  for (let i = 0; i < area35.length; i++) {
    let obj = new kakao.maps.LatLng(area35[i][1],area35[i][0])
    polygonPath35.push(obj)
  }

  for (let i = 0; i < area36.length; i++) {
    let obj = new kakao.maps.LatLng(area36[i][1],area36[i][0])
    polygonPath36.push(obj)
  }

  for (let i = 0; i < area37.length; i++) {
    let obj = new kakao.maps.LatLng(area37[i][1],area37[i][0])
    polygonPath37.push(obj)
  }

  for (let i = 0; i < area38.length; i++) {
    let obj = new kakao.maps.LatLng(area38[i][1],area38[i][0])
    polygonPath38.push(obj)
  }

  for (let i = 0; i < area39.length; i++) {
    let obj = new kakao.maps.LatLng(area39[i][1],area39[i][0])
    polygonPath39.push(obj)
  }

  for (let i = 0; i < area40.length; i++) {
    let obj = new kakao.maps.LatLng(area40[i][1],area40[i][0])
    polygonPath40.push(obj)
  }

  for (let i = 0; i < area41.length; i++) {
    let obj = new kakao.maps.LatLng(area41[i][1],area41[i][0])
    polygonPath41.push(obj)
  }

  for (let i = 0; i < area42.length; i++) {
    let obj = new kakao.maps.LatLng(area42[i][1],area42[i][0])
    polygonPath42.push(obj)
  }

  for (let i = 0; i < area43.length; i++) {
    let obj = new kakao.maps.LatLng(area43[i][1],area43[i][0])
    polygonPath43.push(obj)
  }

  for (let i = 0; i < area44.length; i++) {
    let obj = new kakao.maps.LatLng(area44[i][1],area44[i][0])
    polygonPath44.push(obj)
  }

  for (let i = 0; i < area45.length; i++) {
    let obj = new kakao.maps.LatLng(area45[i][1],area45[i][0])
    polygonPath45.push(obj)
  }

  for (let i = 0; i < area46.length; i++) {
    let obj = new kakao.maps.LatLng(area46[i][1],area46[i][0])
    polygonPath46.push(obj)
  }

  for (let i = 0; i < area47.length; i++) {
    let obj = new kakao.maps.LatLng(area47[i][1],area47[i][0])
    polygonPath47.push(obj)
  }

  for (let i = 0; i < area48.length; i++) {
    let obj = new kakao.maps.LatLng(area48[i][1],area48[i][0])
    polygonPath48.push(obj)
  }

  for (let i = 0; i < area49.length; i++) {
    let obj = new kakao.maps.LatLng(area49[i][1],area49[i][0])
    polygonPath49.push(obj)
  }

  for (let i = 0; i < area50.length; i++) {
    let obj = new kakao.maps.LatLng(area50[i][1],area50[i][0])
    polygonPath50.push(obj)
  }

  return (
    <div>
      <Header/>
      {/* <h5>받은 데이터: {events[0].X} {events[0].Y} </h5> */}
      {/* <h5>받은 데이터: {data} </h5> */}
      <div className='maps'>
        <div className='map_congestion'>
            <p className='map_red'>
              <img className='pin_red' src='/pin_red.png' alt='붐빔' /> 붐빔
            </p>
            <p className='map_orange'>
              <img className='pin_orange' src='/pin_orange.png' alt='약간 붐빔' /> 약간 붐빔
            </p>
            <p className='map_yellow'>
              <img className='pin_yellow' src='/pin_yellow.png' alt='보통' /> 보통
            </p>
            <p className='map_green'>
              <img className='pin_green' src='/pin_green.png' alt='여유' /> 여유
            </p>
        </div>
        <div id='map'></div>
      </div>
    </div>
  );
  
}


export default Congestion;