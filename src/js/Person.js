import goblin from '../img/goblin.png';

export default class Person {
  constructor() {
    this.knock = false;
    this.personElement = document.createElement('img');
    this.personElement.src = goblin;
    this.personElement.classList.add('person');
  }

  move(cell) {
    cell.append(this.personElement);
    this.knock = false;
  }

  hit() {
    this.personElement.remove();
    this.knock = true;
  }

  isKnocking() {
    return this.knock;
  }
}
