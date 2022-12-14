## Exchange Rate

환율 계산 프로그램 만들기 

## Project Specifications

- Display UI with 2 select lists for countries and 2 inputs for amounts
- Fetch exchange rates from API (https://api.exchangerate-api.com)
- Display the values for both countries
- Update values on amount change
- Swap country rates

---
## 배운점

### input 이벤트 
- 정의 : input 이벤트는 input, select, textarea 요소의 value가 바뀔때마다 발생한다. 
- 주의1 : change 이벤트와 달리, input 이벤트는 value속성이 바뀔때마다 반드시 일어난다. 
- 주의2 : 값이 수정되자 마자 발생하기 때문에, event.preventDefaul()를 사용해 기본동작을 막더라도 효과가 없다.

### change 이벤트
- 주의 : 요소 변경이 끝나면 발생한다. 
텍스트 입력인 경우에는 요소 변경이 끝날때가 아니라, 포커스를 잃었을때 이벤트가 발생한다. 

### toFixed() 
- 정의 : Number 인스턴스의 소수 부분 자리수를 문자열 표현으로 반환한다. 
소숫점을 몇자리만 표현하고 싶을때 사용하는 메서드이다.

```
var numObj = 5.6789;
numObj.toFixed();       // Returns '6': 반올림하며, 소수 부분을 남기지 않습니다.
numObj.toFixed(1);      // Returns '5.7': 반올림합니다.
-2.34.toFixed(1);       // Returns -2.3 (연산자의 적용이 우선이기 때문에, 음수의 경우 문자열로 반환하지 않습니다...)
```