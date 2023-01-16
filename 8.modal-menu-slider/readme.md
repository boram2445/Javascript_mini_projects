##

### 배운점

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
  ```css
  transform: translateX(-100%);
  ```
- `first-of-type` : 형제요소들 중 첫번째
  ```css
  nav ul li:first-of-type {
    border-top: rgb(92, 90, 90) solid 1px;
  }
  ```
