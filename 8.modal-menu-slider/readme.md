## 메뉴 슬라이더, 모달 🌱 

### 결과물 😉
<img src="https://user-images.githubusercontent.com/68495264/212687656-fb52deaf-ed75-4204-ab75-c747637dc249.gif" width="600px"/>

---

### 배운점 📚

#### 1. HTML

- nav와 modal은 main content에 포함된 내용이 아니라 따로 움직이는 부분이기 때문에, content 외부에 태그를 작성해야 한다.

  ```html
  <body>
    <nav></nav>
    <div class="content"></div>
    <div class="modal"></div>
  </body>
  ```

#### 2. CSS

- `transform`으로 완전히 화면밖으로 보내기
  - transform에서 %는 자기 자신의 사이즈를 기준으로 한다.
  - width에서 %는 부모의 사이즈를 기준으로 한다.
  ```css
  transform: translateX(-100%);
  ```
- `first-of-type` : 형제요소들 중 첫번째
  ```css
  nav ul li:first-of-type {
    border-top: rgb(92, 90, 90) solid 1px;
  }
  ```
- 화면 너비에 꽉차게 하면서, 최대 너비는 제한하고 싶은 경우
  ```css
  .container {
    margin: 0 auto;
    max-width: 100%;
    width: 800px;
  }
  ```
- animation 주기
  - keyframes를 통해 animation을 생성한다. (from-시작, to-끝)
  - animation을 주고 싶은 요소에 해당 animation의 이름을 작성해 준다.

  ```css
  .modal {
    animation-name: modalopen;
    animation-duration: var(--modal-duration);
  }
  @keyframes modalopen {
  from {
    opacity: 0;
   }
  to {
    opacity: 1;
   }
  }
  ```

#### 3. JS

- 모달 바탕화면 클릭시 끄기
  - 이미 요소를 가져왔으면 `===` 비교 연산자로도 해당 값이 찾던 값인지 판단할 수 있구나!
    되게 간편한것 같다.

```js
//내가 작성한 방식
modal.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  modal.classList.remove("show-modal");
});
```

```js
//쌤이 작성한 방식
const modal = document.querySelector("#modal");
window.addEventListener("click", (e) =>
  e.target === modal ? modal.classList.remove("show-modal") : false
);
```
