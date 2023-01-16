"use strict";
import { GameBuilder, Reason } from "./game.js";
import Modal from "./modal.js";

const game = new GameBuilder()
  .withGameDuration(5) //
  .withCarrotCount(10) //
  .widthBugCount(10) //
  .build();

const gameFinishModal = new Modal();
game.setGameStopLisenter((reason) => {
  let message;
  switch (reason) {
    case Reason.win:
      message = "✨You Win✨";
      break;
    case Reason.lose:
      message = "You loose🐞";
      break;
    case Reason.cancle:
      message = "Replay❓";
      break;
    default:
      throw new Error("something is wrong");
  }
  gameFinishModal.open(message);
});
//함수 ref를 전달해야 한다.
gameFinishModal.setOnClick(game.start);
