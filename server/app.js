/* var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; */

const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');
const converter = require('xml-js');

//const request = require('request');
//const cors = require('cors');
//const bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cors());
//app.use(bodyParser.json());

app.get('/api/data', (req, res) => {
  const data = 'Hello!'; // 전송할 문자열
  res.json({data});
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

app.get('/api/test', async (req, res) => {
  try {
    for (let i = 1; i < 51; i++) {
      let variableName = `area${i}`;
      let response = await axios.get(`http://openapi.seoul.go.kr:8088/41584c7558736f6e39327979784472/xml/citydata/1/5/${area[variableName]}`)
      let xmlData = response.data
      let jsonData = converter.xml2json(xmlData)
      let parsedData = JSON.parse(jsonData);
      let areaCongestLvl = parsedData.elements[0].elements[2].elements[1].elements[0].elements[0].elements[0].text;
      conjestion[`${area[variableName]}`] = areaCongestLvl
    }
    let result = JSON.stringify(conjestion)
    res.send(result)
    console.log(result)
    console.log('success')
  }
  catch (error) {
    console.log('error')
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

