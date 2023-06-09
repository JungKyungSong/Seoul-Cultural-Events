require('dotenv').config();
const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');
const converter = require('xml-js');
const sqlite3 = require('sqlite3').verbose();
app.use(express.json()); // JSON 데이터를 파싱하기 위한 미들웨어
const cors = require('cors');
const { Console } = require('console');
const { tmpdir } = require('os');
const qs = require('qs');

// recommend.js로 필터에 해당하는 행사 정보 전송
app.post('/api/data', (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  let filter_list = {}
  let filter_counter = 0
  let what = req.body.what;
  let where = req.body.where;
  console.log(what)
  console.log(where)
  let db = new sqlite3.Database('/Users/jeong-gyeongsong/Events.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.log("fail")
    }
    console.log('Connected to the database')
  })

  db.serialize(() => {
    db.each(`SELECT * FROM Events WHERE region = '${where}' AND category = '${what}'`, async (err, row) => {
      let options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          appKey: 'eDg2mzIU9g90cvOuayhoadAo0iwXVxr8czeghD95'
        },
        body: JSON.stringify({
          endX: row.X,
          endY: row.Y,
          startX: long,
          startY: lat,
        })
      };
      try {
        const response = await fetch('https://apis.openapi.sk.com/tmap/routes?version=1&callback=function', options);
        const data = await response.json();
        const distance = data.features[0].properties.totalDistance;
        console.log("distance")
        console.log(distance)
        row.distance = distance; // Add distance to the row object
        let str = filter_counter.toString();
        filter_list[str] = row;
        filter_counter += 1;
        console.log(filter_list);
      } catch (err) {
        row.distance = null; // Handle error case
      }
    })
    setTimeout(() => {
        console.log('최종 리스트')
        console.log(filter_list)
        const sortedArray = Object.entries(filter_list).sort(([, a], [, b]) => a.distance - b.distance);
        console.log(sortedArray)
        let data = JSON.stringify(sortedArray)
        res.send(data);
        console.log('api 한번 호출')
        console.log('success')
        db.close(() => {
          console.log('Close the database connection.')
        })
        console.log('success')
    }, 4000); 
  })
});


// detail.js로 해당하는 행사 정보 전송
let data
app.post('/api/detail', (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  let variable = req.body.id;
  console.log(variable)
  let db = new sqlite3.Database('/Users/jeong-gyeongsong/Events.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.log("fail")
    }
    console.log('Connected to the database')
  })
  db.serialize(() => {
    db.each(`SELECT * FROM Events WHERE id = ${variable}`, (err, row) => {
      console.log('하나 성공')
      data = JSON.stringify(row)
    })
      res.send(data);
      console.log(data)
      console.log('success')
      db.close(() => {
        console.log('Close the database connection.')
      })
      console.log('success')
  })
});

// Area.js로 해당하는 행사 정보 전송

app.post('/api/area', (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  let data_area
  let variable = req.body.id;
  console.log(variable)
  let db = new sqlite3.Database('/Users/jeong-gyeongsong/Events.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.log("fail")
    }
    console.log('Connected to the database')
  })
  db.serialize(() => {
    db.each(`SELECT * FROM Area WHERE id = ${variable}`, (err, row) => {
      console.log('하나 성공')
      data_area = JSON.stringify(row)
    }, () => {
      res.send(data_area);
      console.log(data_area)
      console.log('success')
      db.close(() => {
        console.log('Close the database connection.')
      })
      console.log('success')
    })
  })
});

const area = {
              area1 : "홍대 관광특구",
              area2 : "창덕궁·종묘",
              area3 : "서울역",
              area4 : "가산디지털단지역",
              area5 : "건대입구역",
              area6 : "신촌·이대역",
              area7 : "남산공원",
              area8 : "북서울꿈의숲",
              area9 : "창동 신경제 중심지",
              area10 : "압구정로데오거리",
              area11 : "가로수길",
              area12 : "수유리 먹자골목",
              area13 : "잠실 관광특구",
              area14 : "명동 관광특구",
              area15 : "동대문 관광특구",
              area16 : "종로·청계 관광특구",
              area17 : "강남 MICE 관광특구",
              area18 : "이태원 관광특구",
              area19 : "광화문·덕수궁",
              area20 : "경복궁·서촌마을",
              area21 : "신도림역",
              area22 : "고속터미널역",
              area23 : "구로디지털단지역",
              area24 : "강남역",
              area25 : "역삼역",
              area26 : "교대역",
              area27 : "신림역",
              area28 : "선릉역",
              area29 : "연신내역",
              area30 : "용산역",
              area31 : "왕십리역",
              area32 : "서울숲공원",
              area33 : "망원한강공원",
              area34 : "이촌한강공원",
              area35 : "반포한강공원",
              area36 : "뚝섬한강공원",
              area37 : "잠실한강공원",
              area38 : "월드컵공원",
              area39 : "서울대공원",
              area40 : "국립중앙박물관·용산가족공원",
              area41 : "잠실종합운동장",
              area42 : "영등포 타임스퀘어",
              area43 : "여의도",
              area44 : "DMC(디지털미디어시티)",
              area45 : "북촌한옥마을",
              area46 : "낙산공원·이화마을",
              area47 : "노량진",
              area48 : "쌍문동 맛집거리",
              area49 : "인사동·익선동",
              area50 : "성수카페거리"
            }


// 서울시 api로부터 혼잡도 정보 불러오기
let conjestion = {}

const key = process.env.SEOUL_API_KEY

app.get('/api/test', async (req, res) => {
  try {
    console.log(key)
    let db = new sqlite3.Database('/Users/jeong-gyeongsong/Events.db', sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        console.log("fail")
      }
      console.log('Connected to the database')
    })
    db.serialize(()=>{
      db.run('DELETE FROM Congestion', (err) => {
        if (err) {
          console.log('Deletion error:', err);
          return;
        }
        })
        console.log('Deleted all rows');
    })
    for (let i = 1; i < 51; i++) {
      let variableName = `area${i}`;
      let response = await axios.get(`http://openapi.seoul.go.kr:8088/${key}/xml/citydata/1/5/${area[variableName]}`)
      let xmlData = response.data
      let jsonData = converter.xml2json(xmlData)
      let parsedData = JSON.parse(jsonData);
      let areaCongestLvl = parsedData.elements[0].elements[2].elements[1].elements[0].elements[0].elements[0].text;
      conjestion[`${variableName}`] = areaCongestLvl
    }
    let data = JSON.stringify(conjestion)
    res.send(data)
    console.log("데이터확인")
    console.log(data)

    db.serialize(()=> {      
      const ready = db.prepare(`INSERT INTO Congestion (json) VALUES (?);`);
      ready.run(data, function (err) {
        if (err) {
          console.log("Insertion error:", err);
        } else {
          console.log("Data inserted successfully");
        }
      })
      ready.finalize(() => {
        db.close(() => {
          console.log('Close the database connection.');
        });
      });
    })
  }
  catch (error) {
    console.log('error')
  }
})


// 혼잡도 정보를 가진 데이터들을 불러옴
let congestion_list = {}

let congestion_counter = 0

app.get('/api/events', (req, res) => {
  let db = new sqlite3.Database('/Users/jeong-gyeongsong/Events.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.log("fail")
    }
    console.log('Connected to the database')
  })
  db.serialize(() => {
    db.each(`SELECT * FROM Area`, (err, row) => {
      let str = congestion_counter.toString();
      congestion_list[str] = row
      congestion_counter += 1
    }, (err, count) => {
      let data = JSON.stringify(congestion_list)
      res.send(data);
      console.log(data)
      console.log('success')
      db.close(() => {
        console.log('Close the database connection.')
      })
      console.log('success')
    })
  })
});

// 미리 저장해뒀던 혼잡도 정보 불러오기
app.get('/api/savedData', (req, res) => {
  let db = new sqlite3.Database('/Users/jeong-gyeongsong/Events.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.log("fail")
    }
    console.log('Connected to the database')
  })
  let data;
  db.serialize(() => {
    db.each(`SELECT * FROM Congestion`, (err, row) => {
      data = JSON.stringify(row)
    }, (err, count) => {
      res.send(data);
      console.log("저장해둔 데이터 불러오기")
      console.log(data)
      console.log('success')
      db.close(() => {
        console.log('Close the database connection.')
      })
      console.log('success')
    })
  })
});

const tmap_key = process.env.TMAP_API_KEY;

let lat;
let long;

// 사용자 위치 정보 저장해두기
app.post('/api/geo', async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  lat = req.body.latitude;
  long = req.body.longitude;
  console.log(lat)
  console.log(long)
  });

  // 사용자 위치 정보 전달
  app.get('/api/savedGeo', (req, res) => {
    let data = {
      lat: lat,
      long: long
    }
    res.send(data);
  });

// 경로 순서 전송
app.post('/api/order', (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  let cafe = req.body.cafe;
  let food = req.body.food;
  let eventX = req.body.eventX;
  let eventY = req.body.eventY;

  let option = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      appKey: 'eDg2mzIU9g90cvOuayhoadAo0iwXVxr8czeghD95'
    },
    body: JSON.stringify({
      endX: cafe[0],
      endY: cafe[1],
      startX: eventX,
      startY: eventY,
      startName: "출발",
      endName: "도착",
    })
  };

  let option2 = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      appKey: 'eDg2mzIU9g90cvOuayhoadAo0iwXVxr8czeghD95'
    },
    body: JSON.stringify({
      endX: food[0],
      endY: food[1],
      startX: eventX,
      startY: eventY,
      startName: "출발",
      endName: "도착",
    })
  };

  let option3 = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      appKey: 'eDg2mzIU9g90cvOuayhoadAo0iwXVxr8czeghD95'
    },
    body: JSON.stringify({
      endX: cafe[0],
      endY: cafe[1],
      startX: food[0],
      startY: food[1],
      startName: "출발",
      endName: "도착",
    })
  };

  let event_to_cafe;
  let event_to_food;
  let food_to_cafe;
  
  async function ordering() {
    let result;
    let sendData;
    try {
      const response = await fetch('https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&callback=function', option);
      const data = await response.json();
      const distance = data.features[0].properties.totalDistance;
      console.log("distance_evnent_to_cafe")
      console.log(distance)
      event_to_cafe = {distance: distance}
    } catch (err) {
    }
    try {
      const response = await fetch('https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&callback=function', option2);
      const data = await response.json();
      const distance = data.features[0].properties.totalDistance;
      console.log("distance_evnent_to_food")
      console.log(distance)
      event_to_food = {distance: distance}
    } catch (err) {
    }
    try {
      const response = await fetch('https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&callback=function', option3);
      const data = await response.json();
      const distance = data.features[0].properties.totalDistance;
      console.log("distance_food_to_cafe")
      console.log(distance)
      food_to_cafe = {distance: distance}
    } catch (err) {
    }
    console.log("최소")
    //console.log(findSmallestCombination(event_to_cafe,event_to_food,food_to_cafe));
    result = findSmallestCombination(event_to_cafe,event_to_food,food_to_cafe)
    sendData = JSON.stringify(result);
    res.send(sendData);
  }

  function findSmallestCombination(a, b, c) {
    const sum1 = a.distance + b.distance;
    const sum2 = b.distance + c.distance;
    const sum3 = a.distance + c.distance;
  
    if (sum1 <= sum2 && sum1 <= sum3) {
      return [a, b, "event"]; // event가 중간
    } else if (sum2 <= sum1 && sum2 <= sum3) {
      return [b, c, "food"]; // food가 중간
    } else {
      return [a, c, "cafe"]; // cafe가 중간
    }
  }

  ordering();

})

  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
