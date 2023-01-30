//JSON: Javascript Object Notation
//서버와 클라이언트(브라우저, 모바일)간의 HTTP 통신을 위한
//오브젝트 형태의 텍스트 포맷
//stringify(object) : JSON
//parse(JSON):object

const user = {
  name: "Boram",
  age: 20,
  eat: () => console.log("eat"),
};

//직렬화 Serializing(객체->문자열)
const json = JSON.stringify(user);
console.log(user); //{ name: 'Boram', age: 20, eat: [Function: eat] }
console.log(json); //{"name":"Boram","age":20}

//역직렬화 Deserializing(문자열->객체)
const obj = JSON.parse(json);
console.log(obj); //{ name: 'Boram', age: 20 }
