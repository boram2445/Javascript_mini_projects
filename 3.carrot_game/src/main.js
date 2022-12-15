"use strict";
import Game from "./game.js";
import Modal from "./modal.js";

const game = new Game(5, 10, 10);
const gameFinishModal = new Modal();
game.setGameStopLisenter((reason) => {
  let message;
  switch (reason) {
    case "win":
      message = "✨You Win✨";
      break;
    case "loose":
      message = "You loose🐞";
      break;
    case "stop":
      message = "Replay❓";
      break;
    default:
      throw new Error("something is wrong");
  }
  gameFinishModal.open(message);
});
//함수 ref를 전달해야 한다.
gameFinishModal.setOnClick(game.start);
