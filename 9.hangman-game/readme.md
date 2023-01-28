새로운 개념인 svg는 강의를 들으며 구현하였고, 나머지 css와 js는 스스로 구현후 강의를 들으며 리팩토링 하였습니다.

## 배운점

### 1.HTML

```html
<svg height="250" width="200" class="figure-container">
  <!-- Rod -->
  <line x1="60" y1="20" x2="140" y2="20" />
  <line x1="140" y1="20" x2="140" y2="50" />
  <line x1="60" y1="20" x2="60" y2="230" />
  <line x1="20" y1="230" x2="100" y2="230" />

  <!-- Head -->
  <circle cx="140" cy="70" r="20" class="figure-part" />
  <!-- body -->
  <line x1="140" x2="140" y1="90" y2="160" class="figure-part" />
  <!-- arms -->
  <line x1="140" x2="120" y1="130" y2="100" class="figure-part" />
  <line x1="140" x2="160" y1="130" y2="100" class="figure-part" />
  <!-- legs -->
  <line x1="140" x2="120" y1="160" y2="200" class="figure-part" />
  <line x1="140" x2="160" y1="160" y2="200" class="figure-part" />
</svg>
```

- **svg 태그**
  - scalable vector graphics의 약자로 벡터 기반 그래픽을 xml형식으로 정의하는 것을 의미한다.
  - canvas 처럼 사용할 수 있게 해준다.
  - svg 태그는 내부에 그래픽을 담기 위한 그릇과 같은 태그로, 내부에 원, 사각형, 다각형, 라인, path 등을 담을 수 있다.
    ```html
    <svg width="가로영역" height="세로영역">SVG그래픽 ...</svg>
    ```
- **모양 요소의 종류**
  [참고 블로그](https://ossam5.tistory.com/112)

  1. 원: `<circle>`
     - `cx`, `cy` : 원 중심의 x좌표와 y좌표
     - `r` : 원의 반지름
  2. 선: `<line>`

     ```html
     <line x1="0" y1="0" x2="200" y2="200" />
     ```

     - `x1`, `x2` : x축에서 선의 시작 좌표, 끝 좌표
     - `y1`, `y2` : y축에서 선의 시작 좌표, 끝 좌표

  3. 사각형 : `<rect>`
  4. 타원: `<ellipse>`
  5. 다각선: `<polyline>`
  6. 다각형: `<polygon>`
  7. 패스: `<path>`

---

### 2.CSS

- **모양 요소 꾸미기 속성**

  1. fill : 면색
  2. stroke : 선색
  3. stroke-width : 선 굵기
  4. fill-opacity : 면색 투명도
  5. stroke-opacity : 선색 투명도
  6. stroke-linecap: round; 선을 둥글게

- 버튼 누르면 작아지는 효과 주기
  ```css
  .popup button:active {
    transform: scale(0.98);
  }
  ```

### 3.Javascript

- **innerHtml에서 고차함수 사용하기**
  -innerHTML을 사용할때도 `${ }`안에서 고차함수를 사용할 수 있구나!

  - 하지만, 배열이면 string으로 변환해주어야 한다.
  - 나는 일단 length대로 빈 배열을 배치해 주고, 나중에 textContet로 입력한 단어를 추가해주려고 했다.
  - 선생님은 단어를 입력할때마다 새롭게 innerHTML을 사용해서 배치를 해주고 있었다.

  ```js
  //내가 작성한 코드
  function displayWordBox() {
    wordBoxs.innerHTML = "";
    for (let i = 0; i < selectedWord.length; i++) {
      wordBoxs.innerHTML += '<div class="letter"></div>';
    }
  }
  ```

  ```js
  //쌤이 작성한 코드
  function displayWord() {
    wordEl.innerHTML = `
        ${selectedWrod
          .split("")
          .map(
            (letter) =>
              `<div class="letter">${
                correctLetters.includes(letter) ? letter : ""
              }</div>`
          )
          .join("")}
      `;
  }
  ```

- **알파벳만 입력가능하게 - e.keyCode 이용**

  ```js
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    //...
  }
  ```

### 느낀점

- 이미 구현을 다 해놓은 상태에서 선생님 코드로 변경하려니까 어렵다..
