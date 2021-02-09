import Board from './Board';
import Person from './Person';

let missCount = 0;
let counter = 0;

const infoElement = document.querySelector('.info');
infoElement.textContent = `Баллы - ${counter}`;

const board = new Board();
const person = new Person();

board.getBoard().addEventListener(('click'), (event) => {
  if ((event.target.classList.contains('cell') && event.target.hasChildNodes())
    || event.target.classList.contains('person')) {
    person.hit();
    counter += 1;
    infoElement.textContent = `Баллы - ${counter}`;
  }
});

person.move(board.getRandomCell());

const intervalId = setInterval(() => {
  if (!person.isKnocking()) {
    missCount += 1;
    if (missCount === 5) {
      person.hit();
      clearInterval(intervalId);
      infoElement.textContent += '. Игра завершена!!!';
      return;
    }
  }
  person.move(board.getRandomCell());
}, 1000);
