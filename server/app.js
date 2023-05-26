require('dotenv').config();
const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');
const converter = require('xml-js');
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('/Users/jeong-gyeongsong/Events.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.log("fail")
  }
  console.log('Connected to the database')
})

app.get('/api/data', (req, res) => {
  db.serialize(() => {
    db.each(`SELECT * FROM Events WHERE region = '광진구' AND category = '콘서트'`, (err, row) => {
      if (err) {
        console.error('불러오기 실패')
      }
      let data = row.region
      console.log(data)
      res.json({data});
    })
    db.close((err) => {
      if (err) {
        console.error('닫기 실패')
      }
      console.log('Close the database connection.')
    })
  })
  //const data = 'Hello!'; // 전송할 문자열
});

const area = {area1 : "강남 MICE 관광특구",
              area2 : "동대문 관광특구",
              area3 : "명동 관광특구",
              area4 : "이태원 관광특구",
              area5 : "잠실 관광특구",
              area6 : "종로·청계 관광특구",
              area7 : "홍대 관광특구",
              area8 : "경복궁·서촌마을",
              area9 : "광화문·덕수궁",
              area10 : "창덕궁·종묘",
              area11 : "가산디지털단지역",
              area12 : "강남역",
              area13 : "건대입구역",
              area14 : "고속터미널역",
              area15 : "교대역",
              area16 : "구로디지털단지역",
              area17 : "서울역",
              area18 : "선릉역",
              area19 : "신도림역",
              area20 : "신림역",
              area21 : "신촌·이대역",
              area22 : "역삼역",
              area23 : "연신내역",
              area24 : "용산역",
              area25 : "왕십리역",
              area26 : "DMC(디지털미디어시티)",
              area27 : "창동 신경제 중심지",
              area28 : "노량진",
              area29 : "낙산공원·이화마을",
              area30 : "북촌한옥마을",
              area31 : "가로수길",
              area32 : "성수카페거리",
              area33 : "수유리 먹자골목",
              area34 : "쌍문동 맛집거리",
              area35 : "압구정로데오거리",
              area36 : "여의도",
              area37 : "영등포 타임스퀘어",
              area38 : "인사동·익선동",
              area39 : "국립중앙박물관·용산가족공원",
              area40 : "남산공원",
              area41 : "뚝섬한강공원",
              area42 : "망원한강공원",
              area43 : "반포한강공원",
              area44 : "북서울꿈의숲",
              area45 : "서울대공원",
              area46 : "서울숲공원",
              area47 : "월드컵공원",
              area48 : "이촌한강공원",
              area49 : "잠실종합운동장",
              area50 : "잠실한강공원"
            }

let conjestion = {}

const key = process.env.SEOUL_API_KEY

app.get('/api/test', async (req, res) => {
  try {
    console.log(key)
    for (let i = 1; i < 51; i++) {
      let variableName = `area${i}`;
      let response = await axios.get(`http://openapi.seoul.go.kr:8088/${key}/xml/citydata/1/5/${area[variableName]}`)
      let xmlData = response.data
      let jsonData = converter.xml2json(xmlData)
      let parsedData = JSON.parse(jsonData);
      let areaCongestLvl = parsedData.elements[0].elements[2].elements[1].elements[0].elements[0].elements[0].text;
      conjestion[`${area[variableName]}`] = areaCongestLvl
    }
    let data = JSON.stringify(conjestion)
    res.send(data);
    console.log(data)
    console.log('success')
  }
  catch (error) {
    console.log('error')
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

