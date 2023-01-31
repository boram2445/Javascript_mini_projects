## 배운점 📚

### 1.HTML

- **마크업을 할때 id, class를 바로바로 작성하자.**

  - 나는 그동안 css를 작성하면서 필요할때마다 id,class명을 지었는데, 그랬더니 일관성없는 네이밍을 해서 지저분 하다는 느낌을 항상 받았다.

- **전체 페이지를 class="container"로 감싸주어서 페이지 컨텐츠의 max-width를 설정해주자.**

### 2. CSS

- **hover하면 특정 요소 생기게 하기 - opacity를 이용하면 된다!**

  - 해당 요소 `opacity : 0` 으로 해주고
  - 해당 요소에 hover가 발생하면 `opacity : 1`로 해주자!

- **화면 사이즈에 따른 동적인 이미지 나열은 flex가 아닌 grid로 한 다음 media query로 그리드 개수를 조절해주자**

  - flex로 하면, 중앙 정렬을 하려고 justify-center를 사용하면, 낱개로 줄이 채워진 요소들또한 중앙 정렬이 되어버린다.
  - 낱개 요소들이 왼쪽 배치가 되게 하기 위해서는, gird를 사용하고, 화면 사이즈에 따라 `grid column의 개수`를 조절해 주면 된다

  ```css
  @media (max-width: 800px) {
    .meals {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 700px) {
    .meals {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 500px) {
    .meals {
      grid-template-columns: 1fr;
    }
  }
  ```

### 3. Javascript

- **예외처리 사항들을 꼼꼼하게 살펴보아야 한다.**

  - input에 아무 값도 입력되지 않은 경우
  - 검색 결과 API에 null이 반환된 경우
  - 랜덤 버튼 클릭했을때 이전에 검색한 내역이 남지 않도록 해야 함

- **이벤트 위임에서 내가 찾는 요소만 가져오기 - e.path or e.composedPath()**

  - `e.path` / `e.composedPath()`는 이벤트가 발생된 노드에서 최상위 노드(Window)까지의 상하관계를 배열로 받아온다.
  - 쌤은 e.path를 사용했는데, IE, Edge, FireFox에서는 안된다는 것을 알고 있었는데, 크롬인데도 undefined가 반환되었다.
  - 방법을 찾아보니, e.composedPath()로 해결이 가능하였다.
  - 항상 이벤트가 발생한 TagName, 혹은 classList.contains() 로 판별하였었는데, 한계가 있다는 생각이 들었는데, 이렇게 전체를 받아온후 `find`메서드로 원하는 요소를 찾아내는 것이 참신했다! 유용하게 쓸 수 있을 듯😉
  - find에서 if(item.classList) (class가 있는지 없는지를 판별) 를 판별해 주지 않으면 오류가 나타난다는게 왜인지는 모르겠다.

  ```js
  const path = e.path || e.composedPath();
  const mealInfo = path.find((item) => {
    if (item.classList) {
      return item.classList.contains("meal-info");
    } else return false;
  });
  ```

- **Object key 동적으로 사용하기**
  - 대괄호표기법으로, 안에는 string타입으로 작성해야 한다!!
  ```js
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
  }
  ```

### 소감 😉

- 스스로 구현한 JS 코드들이 많이 수정할 것이 없어서 기분이 좋았다.
- 다만, 예외 처리 사항들을 꼼꼼하게 점검하는 것이 중요할 것 같다!
- 그리고 구현후 어떻게 코드를 깔끔하게 개선 할 수 있을지 먼저 고민해 본 다음에 강의를 들어보자!
