// try catch finally

function readFile(path) {
  // 에러강제로 만들기
  // throw new Error("파일 경로를 찾을 수 없음");
  // 에러가 throw 되면 app crashed 된다.
  throw new Error("파일 경로를 찾을 수 없음");
  return "파일의내용";
}

function processFile(path) {
  let content;
  try {
    content = readFile(path);
  } catch (error) {
    console.log(error.name); //Error
    console.log(error.message); //파일 경로를 찾을 수 없음
    console.log(error.stack); //에러의 경로
    content = "기본내용";
  } finally {
    console.log("성공하든 실패하든 마지막으로 리소스를 정리할 수 있다");
  }
  const result = "hi" + content;
  return result;
}

const result = processFile("경로");
console.log(result);
