exports.handler = async function(event, context) {
    // 엣지 함수 로직을 작성하세요.
    // event: 요청 객체
    // context: 실행 컨텍스트 객체
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello from the edge!' })
    };
  }