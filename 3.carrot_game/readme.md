## 1. 배운점

### 1) 랜덤한 숫자 뽑기

[참고 블로그](https://velog.io/@mementomori/Javascript-%EC%B5%9C%EC%86%8C-%EC%B5%9C%EB%8C%80%EA%B0%92-%EC%82%AC%EC%9D%B4%EC%9D%98-%EB%9E%9C%EB%8D%A4-%EC%88%AB%EC%9E%90-%EB%BD%91%EA%B8%B0)

```
function makeRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
```

### 2) matches()

```
targetElement.matches(selectorString)
```

- matches() 메서드는 기준 element가 해당 선택자를 가지고 있는지 확인하는 메서드이다.
- `element.classList.contains(selectorString)` 과 동일한 방식이다.

```
//사용 예시
item.matches('.bug') //bug라는 calss를 가지고 있는가?
item.matches('#carrot') //carrot라는 id를 가지고 있는가?
```

### 3) audio 객체를 이용하여 오디오 재생하기

[참고 블로그](https://curryyou.tistory.com/337)

- 크롬 브라우저에서는 autoplay가 금지되어 자동 재생이 불가하다. 사용자의 클릭 등 어떤 이벤트가 발생하였을때 음원을 재생하도록 해야 한다.
- Audio에 전달하는 경로 문자열은 HTML이 있는 기준으로 상대경로로 전달해주어야 한다.
- 사용법

  1. `audio 객체`를 생성하고, 음원파일 경로를 설정한다.
  2. `play()`메서드로 재생하고, `pause()`메서드로 일시 정지 할 수 있다.

  ```
  const audio = new Audio(); //audio객체 생성
  audio.src = 'sound.mp3';  //음원 파일 설정

  audio.play(); //음원 재생
  audio.pause(); //음원 중지

  ```

  3. 오디오를 처음부터 다시 재생하려면, 일시정지후 `currentTime`을 0으로 설정하고 다시 재생하면 된다.

  ```
  audio.pause();
  audio.currentTime = 0;
  audio.play();
  ```

### 4) 모듈 사용법

[참고 mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)

1.  **파일 구조**

```
  index.html
  main.js
  modules/
      canvas.js
      square.js
```

2. **모듈 export**

- 모듈 밖으로 내보내려는 항목 앞에 `export`를 붙인다.
- 함수, let, var, const, class를 내보낼 수 있지만, 최상위 항목이어야 한다. 예를들어 함수 안에서 export를 사용하는 것은 불가능하다.

```
  export const name = 'square';

  export function draw(ctx, length, x, y, color) {
    ...
  }
```

- 여러 항목을 내보내고 싶은 경우, 모듈 파일 끝에 export를 적고, 내보낼 것들을 중괄호 안에 적어준다.

```
export { name, draw, reportArea, reportPerimeter };
```

<br/>

3. **모듈 import**

- 모듈을 사용할 스크립트로 `import` 한다.

```
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
```

<br/>

4. **main.js 모듈을 HTML에 적용하기**

- 스크립트를 모듈로 선언하려면 `type="module"`을 포함 시켜야 한다.

```
<script type="module" src="main.js"></script>
```

<br/>

5. **모듈 파일당 하나만 내보낼 경우**

- 내보낼 함수 등 앞에 `export default`를 추가한다.
- 하나의 모듈은 하나의 `export default`만 허용한다.

```
//함수명을 export 한다.
export default randomSquare;

//혹은 익명함수를 export 해주어도 된다.
export default function(ctx) {
  ...
}
```

- main.js에서 아래처럼 중괄호 없이 import 한다.

```
import randomSquare from './modules/square.js';
```

<br/>

6. **모듈명 변경하여 사용하기**

- import 와 export 문의 중괄호 안에 `as` 키워드를 이용하여 새 함수의 이름으로 사용 할 수 있다.

```
// inside module.js
export { function1, function2 };

// inside main.js
import { function1 as newFunctionName,
         function2 as anotherNewFunctionName } from './modules/module.js';
```

7. **모듈의 모든 export 한번에 가져오기**

- `*`로 모든 export을 가져올 수 있으며, `as` 뒤의 이름으로 그룹지어지기 때문에 해당 이름으로 export 된 함수들에 접근 할 수 있다.

```
// inside module.js
export { name, draw, reportArea, reportPerimeter };

// inside main.js
import * as Module from './modules/module.js';

//사용
Module.function1()
Module.function2()
etc.
```

## <br/>

## 2. 에러 핸들링

### 1) 한지점을 기준으로 아이템 배치하기

- 좌측 상단을 (0,0) 으로 기준을 두고, 아이템들을 배치하고 싶었다.
- 그러나, field.append(item)로 아이템들을 추가한 후, 그냥 transfer로 아이템들의 위치를 정해주니, 모두 동일한 좌측 상단을 기준으로 하는 것이 아닌, 아이템들이 추가되었던 기존의 위치를 기준으로 이동하였다.

=> **결론** : 모두 같은 위치를 기준으로 할 경우에는 반드시 `position:absolute`를 사용하여야 한다!

### 2) setInterval 즉시 실행

[참고 블로그](https://velog.io/@lize/setInterval-%EC%A7%80%EC%97%B0-%EC%97%86%EC%9D%B4-%EC%8B%A4%ED%96%89%EC%A6%89%EC%8B%9C-%EC%8B%A4%ED%96%89)

- 1초마다 값이 작아지는 타이머를 만드는데, `지연-콜백-지연`으로 반복되어서, 콜백함수가 바로 실행되지 않았다.
- 콜백함수를 따로 빼주고, 먼저 실행시킨 후, setInterval을 실행시키면 이 문제를 해결할 수 있었다.

```
//내가 짰던 코드
function onTimer() {
  timer.style.display = "block";
  let leftTime = TIME;
  let time = setInterval(() => {
     min = Math.floor(leftTime / 60);
    sec = leftTime % 60;
    timer.textContent = `${min}:${sec}`;
    leftTime--;
  }, 1000);
}
```

```
//블로그 도움 받은 코드
(function() {
    function doSomething() {
        console.log("tick");
    }
    doSomething();
    setInterval(doSomething, 9000);
})();

```

```
//해결 코드
function onTimer() {
  timer.style.display = "block";
  let leftTime = TIME;
  function intervalTimer() {
    min = Math.floor(leftTime / 60);
    sec = leftTime % 60;
    timer.textContent = `${min}:${sec}`;
    leftTime--;
  }
  intervalTimer();
  let time = setInterval(intervalTimer, 1000);
}
```

- 콜백함수는 밖으로 빼도 된다.
- 인자를 전달할때 값을 계산하면서 전달해줘도 된다.
- setInterval을 전역변수에 할당하면, 다른 함수에서도 clearInterval을 사용할 수 있다.

```
//엘리선생님 코드
let timer;
function startTimer() {
  let leftTime = TIME_SEC;
  updateTimerText(leftTime);
  timer = setInterval(() => {
    if (leftTime === 0) {
      clearInterval(timer);
      stopGame();
      return;
    }
    updateTimerText(--leftTime);
  }, 1000);
}

function updateTimerText(leftTime) {
  let min = Math.floor(leftTime / 60);
  let sec = leftTime % 60;
  game_timer.textContent = `${min}:${sec}`;
}
```
