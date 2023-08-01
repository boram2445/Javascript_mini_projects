## 무한 스크롤

## 스스로 구현

1. 전체 포스트 가져오기 5개✅
2. 컨테이너에 포스트 추가하기 ✅
3. 스크롤 내리면 포스트 더 나오게 하기(how..?)

=> 데이터를 가져오고 보여주는 것 까지는 완벽하게 구현했지만,
무한 스크롤을 어떻게 구현해야 하는지 이해가 안되었다.
처음에는 화면 마지막에 도달하면 가져와야 하나 생각했는데
어떻게 화면 마지막인지 알지?

## 1. CSS

- **로딩 스피너**

  - 로딩스피너를 CSS애니메이션을 이용해서 구현하였다.
  - `animation-delay` 를 부여하면 조금 늦게 에니메이션이 시작되도록 할 수 있다.

  ```html
  <div class="loader">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
  ```

  ```css
  /* 로딩 스피너 */
  .loader {
    /* opacity: 0; */
    display: flex;
    position: fixed;
    bottom: 50px;
    transition: opacity 0.3s ease-in;
  }

  .loader.show {
    opacity: 1;
  }

  .circle {
    background-color: white;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 5px;
    animation: bounce 0.5s ease-in infinite;
  }

  .circle:nth-of-type(2) {
    animation-delay: 0.1s;
  }

  .circle:nth-of-type(3) {
    animation-delay: 0.2s;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  ```

  <br/>
  <br/>

## 2. Javascript

- **스크롤 property**

  - `Element.scrollTop` : 요소 맨 처음부터 ~ 현재 화면에 보이는 상단까지의 길이
  - `Element.scrollHeight` : 요소 전체 길이
  - `Element.clientHeight` : 현재 화면에서 보이는 height (스크롤 사이즈, 보더 사이즈는 포함 X)

  <br/>

- **무한 스크롤**

  위의 그림대로라면, 스크롤을 가장 아래로 내렸을 때 `clientHeight + scrollTop = scrollHeight` 이 공식이 성립된다.
  => 우리는 스크롤을 가장 아래로 내렸을 때 데이타를 추가로 가져와야 한다. 따라서 위의 공식을 사용하면 된다.
  로딩 스피너를 하단에 넣고싶어서 전체 height에서 10을 빼준 위치에 도달했을때 데이터를 추가로 가져오도록 하였다.

  ```js
  if (clientHeight + scrollTop >= scrollHeight - 10) {
    moreDataFetch();
  }
  ```
