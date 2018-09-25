import {Component} from '@angular/core';


export interface Tile {
  backgroundColor: string;
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0;
  jitter = 10;
  blurCoefficient = 200;
  hueRotation = 0;
  rotationAdder = 1;
  hueRotationStyle: Object = {};
  blurStyle: Object = {};
  styles: Object = {}
  adder = 1;
  arrayLength = 16;
  squareSize = Array.apply(null, Array(this.arrayLength)).map(Number.prototype.valueOf, 0);
  getRandom = (n: number, m: number = 0) => {
    return Math.round(Math.random() * n + m);
  }
  tilesRed: Tile[] = Array.apply(null, Array(this.arrayLength)).map((n, idx) => {

    if (this.counter >= 256 || this.counter < 0) { this.adder = -this.adder; }
    this.counter = this.counter + this.adder;


    return {text: '', cols: Math.random(),
      rows: Math.random() * 12 + 1,
      backgroundColor: `rgba(${this.getRandom(255)}, ${this.counter}, ${this.counter}, 1)`,
      color: ``
    };
  });
  tilesGreen: Tile[] = Array.apply(null, Array(this.arrayLength)).map((n, idx) => {

    if (this.counter >= 256 || this.counter < 0) { this.adder = -this.adder; }
    this.counter = this.counter + this.adder;

    return {text: '', cols: 1,
      rows: 1,
      backgroundColor: `rgba(${this.counter}, ${this.getRandom(255)}, ${this.counter}, 1)`,
      color: ``
    };
  });
  tilesBlue: Tile[] = Array.apply(null, Array(this.arrayLength)).map((n, idx) => {

    if (this.counter >= 256 || this.counter < 0) { this.adder = -this.adder; }
    this.counter = this.counter + this.adder;

    return {text: '', cols: 1,
      rows: 1,
      backgroundColor: `rgba(${this.counter}, ${this.counter}, ${this.getRandom(255)}, 1)`,
      color: ``
    };
  });
  tilesRandom: Tile[] = Array.apply(null, Array(this.arrayLength)).map((n, idx) => {

    if (this.counter >= 256 || this.counter < 0) { this.adder = -this.adder; }
    this.counter = this.counter + this.adder;

    return {text: '', cols: Math.random() * 2,
      rows: Math.random() * 3,
      backgroundColor: `rgba(${this.getRandom(255)}, ${this.getRandom(255)}, ${this.getRandom(255)}, 1)`,
      color: ``
    };
  });
  tilesGrey: Tile[] = Array.apply(null, Array(this.arrayLength)).map((n, idx) => {

    if (this.counter >= 256 || this.counter < 0) { this.adder = -this.adder; }
    this.counter = this.counter + this.adder;

    return {text: '', cols: Math.random(),
      rows: Math.random() * 12 + 1,
      backgroundColor: `rgba(${this.counter}, ${this.counter}, ${this.counter}, 1)`,
      color: ``
    };
  });
  loop = () => {
    if (this.hueRotation >= 360 || this.hueRotation < 0) { this.rotationAdder = -this.rotationAdder; }
    this.hueRotation += this.rotationAdder;
    this.hueRotationStyle = {filter: `hue-rotate(${this.hueRotation}deg)`};
    this.blurStyle = {filter: `blur(${this.blurCoefficient / Math.random() * this.jitter}px)`};
    requestAnimationFrame(this.loop);
  }

  constructor() {
    requestAnimationFrame(this.loop);
  }
}
