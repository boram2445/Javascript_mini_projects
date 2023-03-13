## CD Player

### 1. HTML

-**Audio 태그**

\*크롬 브라우저는 autoplay 사용불가

- 속성
  - src : 음원 파일 경로
  - autoplay : 자동 재생 여부
  - loop : 반복 재생 여부
  - controls : 컨트롤 (재생, 정지 버튼 등) 노출 여부
    (controls 설정을 안해주면 컨트롤 버튼이 아무것도 뜨지 않는다)
  - muted : 음소거 설정 버튼

```html
<audio src="sound.mp3" autoplay loop controls id="myAudio"></audio>
```

### 2. CSS

- **img container**

  - 이미지 컨테이너로 공간 사이즈를 확보하고, 그것을 기준으로 img를 position absolute를 하여 이미지가 컨테이너 밖으로 튀어나오게 하였다

  ```css
  .img-container {
    position: relative;
    width: 110px;
  }

  .img-container img {
    border-radius: 50%;
    object-fit: cover;
    height: 80px;
    width: 80px;
    position: absolute;
    bottom: 0;
    transform: translateY(10%);
  }
  ```

- **요소 뱅글뱅글 돌게 하기**

  ```css
  img {
    animation: rotate 3s linear infinite;
    /* 애니메이션을 멈출지 진행할지 설정 - 음악이 재생될때만 시작해야 한다 */
    animation-play-state: paused;
  }

  .img-container.play .img-container img {
    animation-play-state: running;
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  ```
