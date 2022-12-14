## Custom Video Player

자바스크립트 API를 이용해서 나만의 동영상 컨트롤러 커스텀하기

## Project Specifications

- Display custom video player styled with CSS
- Play/pause
- Stop
- Video progress bar
- Set progress bar time
- Display time in mins and seconds

---

## HTML 태그

#### 1) video

- **video : 비디오 삽입 태그**

```
    <video
      controls // 비디오 컨트롤러
      src="videos/gone.mp4" // 삽입 비디오
      id="video"
      class="screen"
      poster="img/poster.png" // default 이미지
    ></video>
```

- **동영상 메서드**

```
function toggleVideoStatus() {
  //비디오 재생 여부 확인 방법
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
```

- video.paused
  비디오 재생 여부 반환
- video.play()
  비디오 재생
- video.pause()
  비디오 멈춤

#### 2) input type="range"

input 태그의 슬라이드 바 속성

```
    <input
      type="range"
      id="progress"
      class="progress"
      min="0"   // input 요소의 최솟값
      max="100"  // input 요소의 최댓값
      step="0.1" //input 요소에 입력할 수 있는 사이의 간격
      value="0" //초기값
    />
```

---

## 2. CSS

#### 1) **video 태그에 포스터 이미지 사이즈 조절**

- **aspect-ratio** : 이미지나 동영상을 비율대로 줄이거나 늘리는데 사용되는 최신 문법

  \*이전 방법

  - width, height 단순 지정
  - padding-top 또는 padding-bottom 을 통한 비율 지정
  - calc()을 사용하여 비율 조정

```
.screen {
  aspect-ratio: 16/9; // 16:9 비율 유지
  object-fit: contain;
  width: 50%;
}
```

🥕 : [참고 블로그](https://inpa.tistory.com/entry/CSS-%F0%9F%93%9A-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B9%84%EC%9C%A8-%EA%B3%A0%EC%A0%95%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-aspect-ratio#Aspect_Ratio_%EC%A2%85%ED%9A%A1%EB%B9%84_%EC%86%8D%EC%84%B1)
