'use strict';

export default class Modal{
  constructor(){
    this.modal = document.querySelector('.modal');
    this.replayBtn = document.querySelector('.modal-btn');
  }

  show(state){
    this.modal.classList.add('on');
    if(state === 'win'){
      modal.children[1].textContent = 'You win🎉';
      //playSound(audioWin);
    } else{
      //playSound(audioAlert);
      //startBtn.style.visibility = 'hidden';
      if(state === 'pause'){
        modal.children[1].textContent = 'restart❓';
      } else{
        modal.children[1].textContent = 'You lose😈';
      }
    } 
  }
}