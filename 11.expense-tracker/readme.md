## 가계부💸

### 결과물 🌱

### 배운점 📚

#### 1.CSS

- **CSS로 대문자로 바꾸기**
  ```css
  text-transform: uppercase;
  ```
- **flex로 아이템 꽉차게 하기**
  - space-between을 사용하면 왼, 오 양쪽 사이드에 아이템들이 딱 붙는다.
  - 딱 붙지 않고, 두 요소가 동일한 사이즈를 공유하면서 중간에 위치하도록 하고 싶다면, flex:1를 통해 사이즈를 늘리고, text-align : center를 사용하면 된다.
  ```css
  .container {
    justify-content: space-between;
  }
  .conainer > div {
    flex: 1;
    text-align: center;
  }
  ```
- **여러 요소중 첫번째 요소 선택하기**
  - div 요소 중 첫번째 요소를 선택하게 된다.
  ```css
  div:first-of-type {
  }
  ```
- **요소가 hover되었을때 다른 요소 보이게 하기**
  ```css
  .list li:hover .delete-btn {
    opacity: 1;
  }
  ```

#### 2. JS

- **localStroage에 저장된 데이터 사용하기**

  -그냥 바로 `const transaction =JSON.parse(localStorage.getItem('....')) | []` 이런식으로 했더니, localStorage내용을 받아오지 못했다

  ```js
  const localStroageTransactions = JSON.parse(
    localStorage.getItem("transactions")
  );

  let transactions =
    localStorage.getItem("transactions") !== null
      ? localStroageTransactions
      : [];
  ```
