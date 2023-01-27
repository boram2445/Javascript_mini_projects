// Quiz

const prop = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

function changeColor({ styles: { color } }) {
  //console.log(styles); - 이렇게는 에러가 난다.
  console.log(color);
}

changeColor(prop);
