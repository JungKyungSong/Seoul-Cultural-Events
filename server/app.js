require('dotenv').config();
const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');
const converter = require('xml-js');
app.use(express.json()); // JSON 데이터를 파싱하기 위한 미들웨어
const mysql = require('mysql2');

const conn = {  // mysql 접속 설정
    host: 'localhost',
    user: 'root',
    password: 'Song5974!',
    database: 'events'
};

// MySQL 연결 설정
const connection = mysql.createConnection(conn);

// Define 모델 생성
// const Event = sequelize.define('Event', {
//   index: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   event: {
//     type: DataTypes.JSON
//   }
//   // id: {
//   //   type: DataTypes.INTEGER,
//   //   primaryKey: true,
//   //   autoIncrement: true
//   // },
//   // category: {
//   //   type: DataTypes.STRING
//   // },
//   // region: {
//   //   type: DataTypes.STRING
//   // },
//   // name: {
//   //   type: DataTypes.STRING
//   // },
//   // date: {
//   //   type: DataTypes.STRING
//   // },
//   // place: {
//   //   type: DataTypes.STRING
//   // },
//   // target: {
//   //   type: DataTypes.STRING
//   // },
//   // fee: {
//   //   type: DataTypes.STRING
//   // },
//   // homepage: {
//   //   type: DataTypes.STRING
//   // },
//   // 신청일: {
//   //   type: DataTypes.STRING
//   // },
//   // address: {
//   //   type: DataTypes.STRING
//   // },
//   // X: {
//   //   type: DataTypes.FLOAT
//   // },
//   // Y: {
//   //   type: DataTypes.FLOAT
//   // },
//   // area: {
//   //   type: DataTypes.STRING
//   // }
// }, {
//   tableName: 'Events', // 테이블 이름
//   timestamps: false // 타임스탬프 필드 사용하지 않음
// });

// // Define 모델 생성
// const Area = sequelize.define('Area', {
//   index: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   event: {
//     type: DataTypes.JSON
//   }
//   // id: {
//   //   type: DataTypes.INTEGER,
//   //   primaryKey: true,
//   //   autoIncrement: true
//   // },
//   // category: {
//   //   type: DataTypes.STRING
//   // },
//   // region: {
//   //   type: DataTypes.STRING
//   // },
//   // name: {
//   //   type: DataTypes.STRING
//   // },
//   // date: {
//   //   type: DataTypes.STRING
//   // },
//   // place: {
//   //   type: DataTypes.STRING
//   // },
//   // target: {
//   //   type: DataTypes.STRING
//   // },
//   // fee: {
//   //   type: DataTypes.STRING
//   // },
//   // homepage: {
//   //   type: DataTypes.STRING
//   // },
//   // 신청일: {
//   //   type: DataTypes.STRING
//   // },
//   // address: {
//   //   type: DataTypes.STRING
//   // },
//   // X: {
//   //   type: DataTypes.FLOAT
//   // },
//   // Y: {
//   //   type: DataTypes.FLOAT
//   // },
//   // area: {
//   //   type: DataTypes.STRING
//   // }
// }, {
//   tableName: 'Area', // 테이블 이름
//   timestamps: false // 타임스탬프 필드 사용하지 않음
// });

// recommend.js로 필터에 해당하는 행사 정보 전송
app.post('/api/data', async (req, res) => {
  //res.setHeader('Cache-Control', 'no-store');
  let filter_list = {}
  let filter_counter = 0
  let what = req.body.what;
  let where = req.body.where;
  console.log(what)
  console.log(where)

  try {
     // MySQL 연결
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
    // 쿼리 실행
  const query = `SELECT * FROM Events WHERE JSON_VALUE (event, '$.region') = '${where}' and JSON_VALUE (event, '$.category') = '${what}'`;
  connection.query(query, (err, results, fields) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('Query executed successfully');
    console.log(results);
    //let data = JSON.stringify(results);
    res.send(results);
    console.log('api 한번 호출');
    console.log('success');
  });
  })
    
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    // connection.end((err) => {
    //   if (err) {
    //     console.error('Error closing connection:', err);
    //     return;
    //   }
    //   console.log('MySQL connection closed');
  }
});


// detail.js로 해당하는 행사 정보 전송
app.post('/api/detail', async (req, res) => {
  //res.setHeader('Cache-Control', 'no-store');
  let variable = req.body.id;
  console.log(variable);

  try {
    // MySQL 연결
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
  console.log('Connected to MySQL');
  // 쿼리 실행
  const query = `SELECT * FROM Events WHERE JSON_VALUE (event, '$.id') = '${variable}'`;
  connection.query(query, (err, results, fields) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('Query executed successfully');
    console.log(results);
    res.send(results);
    console.log('api 한번 호출');
    console.log('success');
  });
})
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    // connection.end((err) => {
    //   if (err) {
    //     console.error('Error closing connection:', err);
    //     return;
    //   }
    //   console.log('MySQL connection closed');
    // });
  }
})

// Area.js로 해당하는 행사 정보 전송
app.post('/api/area', async (req, res) => {
  //res.setHeader('Cache-Control', 'no-store');
  let variable = req.body.id;
  console.log(variable);

  try {
    // MySQL 연결
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
  console.log('Connected to MySQL');

  // 쿼리 실행
  const query = `SELECT * FROM Area WHERE JSON_VALUE (event, '$.id') = '${variable}'`;
  connection.query(query, (err, results, fields) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('Query executed successfully');
    console.log(results);
    let data = JSON.stringify(results);
    res.send(data);
    console.log('api 한번 호출');
    console.log(data);
    console.log('success');
});
})

  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    connection.end((err) => {
      if (err) {
        console.error('Error closing connection:', err);
        return;
      }
      console.log('MySQL connection closed');
    });
  }
})


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
    res.send(data);
    console.log(data)
    console.log('success')
  }
  catch (error) {
    console.log('error')
  }
})

// 혼잡도 정보를 가진 데이터들을 불러옴
let congestion_list = {};
let congestion_counter = 0;

app.get('/api/events', async (req, res) => {

  try {
    // MySQL 연결
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
  console.log('Connected to MySQL');

  // 쿼리 실행
  const query = `SELECT * FROM Area WHERE JSON_VALUE (event, '$.id') = '${variable}'`;
  connection.query(query, (err, results, fields) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('Query executed successfully');
    console.log(results);
    let data = JSON.stringify(results);
    res.send(data);
    console.log('api 한번 호출');
    console.log(data);
    console.log('success');
});
})
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    connection.end((err) => {
      if (err) {
        console.error('Error closing connection:', err);
        return;
      }
      console.log('MySQL connection closed');
    });
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});