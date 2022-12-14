## DOM Array Methods

데이타 테이블 정렬 프로젝트

## Project Specifications

- Fetch random users from the [randomuser.me](https://randomuser.me) API
- Use forEach() to loop and output user/wealth
- Use map() to double wealth
- Use filter() to filter only millionaires
- Use sort() to sort by wealth
- Use reduce() to add all wealth

---
## 배운것 
### Math.random() 
- 사용 : 0-1(1은 미포함) 사이의 부동소수점 난수를 생성한다.
```
console.log(Math.random()) // 0.4156265359200082
```

- 주의 : 정수인 난수를 생성하기 위해서는 Math.floor() 함수를 함께 사용해야 한다. 
(*Math.floor() => 소수점 1번째 자리를 버림하여 리턴하는 함수)
(*반올림(round), 올림(ceil), 내림(floor)) 
```
1) 0 <= random <=9
Math.floor(Math.random() * 10);

2) 0 <= random <= 10
Math.floor(Math.random() * 11);

3) 1<= random <= 10 //최솟값 지정
Math.floor(Math.random() * 10 + 1)
```

### sort([compareFunction])
- 정의 : 배열을 정렬하는 함수이다. 
두개의 배열 element a,b를 파라미터로 입력받는다. 
함수가 리턴하는 값이 0보다 작을 경우, a가 b보다 앞에 정렬하고, 
함수가 리턴하는 값이 0보다 클 경우, b가 a보다 앞에 정렬된다. 
- 주의 : compareFunction, 즉 정렬 순서를 정의하는 함수가 생략되면, 배열의 element들은 문자열로 취급되어 유니코드값 순서대로 정렬된다. 
```
const arr = [2,1,3,10];
//1) 숫자 오름차순 정렬
arr.sort((a,b) => a-b);

//2) 숫자 내림차순 정렬
arr.sort((a,b) => b-a)

//3) 문자열 정렬
const arr = ['banana', 'b', 'boy'];
arr.sort(); // ['b', 'banana', 'boy']
```



