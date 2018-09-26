import {Component, Input, OnInit} from '@angular/core';


interface Tile {
  backgroundColor: string;
  color: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-material-rothko',
  templateUrl: './material-rothko.component.html',
  styleUrls: ['./material-rothko.component.scss'],
})
export class MaterialRothkoComponent implements OnInit {

  private counter = 0;
  private hueRotation = 0;
  private rotationAdder = 1;
  private step = 1;
  private maxRGB = 255;
  private minRGB = 0;
  private sizeSquared: number;
  tiles: Tile[];
  hueRotationStyle: Object = {};
  containerStyles: Object = {};
  blurStyle: Object = {};
  styles: Object = {};
  squareSize = [0];
  @Input() size = 16;
  @Input() jitter = 0;
  @Input() blur = 30;
  @Input() tileCols = 1;
  @Input() tileRows = 1;
  @Input() colCount = 1;
  @Input() rowHeight = '10px';
  @Input() colorScheme: String;
  @Input() colorRotate = true;
  @Input() width = '100%';

  @Input() height: 'auto';

  static getRandom = (n: number, m: number = 0) => {
    return Math.round(Math.random() * n + m);
  };

  getTiles = () => {

    return Array.apply(null, Array(this.size)).map((n, idx) => {
      if (this.counter >= this.maxRGB || this.counter < this.minRGB) { this.step = -this.step; }
      this.counter = this.counter + this.step;
      return {cols: this.tileCols, rows: this.tileRows, backgroundColor: this.getColors()};
    });
  };
  loop = () => {
    if (this.colorRotate) {
      if (this.hueRotation >= 360 || this.hueRotation < 0) {
        this.rotationAdder = -this.rotationAdder;
      }
      this.hueRotation += this.rotationAdder;
      this.hueRotationStyle = {filter: `hue-rotate(${this.hueRotation}deg)`};
    }
    this.blurStyle = {filter: `blur(${Math.random() * this.jitter + this.blur}px)`};
    requestAnimationFrame(this.loop);
  };

  calculateNormalizedStep = () => {
    this.step = this.maxRGB /  this.size;
  }

  ngOnInit() {
    this.sizeSquared = this.size;
    this.calculateNormalizedStep();
    this.squareSize = Array.apply(null, Array(this.size)).map(Number.prototype.valueOf, 0);
    this.tiles = this.getTiles();
    this.containerStyles = {width: this.width, height: this.height};

    requestAnimationFrame(this.loop);
  }

  private getColors() {
    let colorsRGBA: string;

    switch (this.colorScheme) {
      case 'red':
        colorsRGBA = `rgba(${MaterialRothkoComponent.getRandom(255)}, ${this.counter}, ${this.counter}, 1)`;
        break;
      case 'green':
        colorsRGBA = `rgba(${this.counter}, ${MaterialRothkoComponent.getRandom(255)}, ${this.counter}, 1)`;
        break;
      case 'blue':
        colorsRGBA = `rgba(${this.counter}, ${this.counter}, ${MaterialRothkoComponent.getRandom(255)}, 1)`;
        break;
      case 'grey':
        colorsRGBA = `rgba(${this.counter}, ${this.counter}, ${this.counter}, 1)`;
        break;
      default:
        colorsRGBA = `rgba(${MaterialRothkoComponent.getRandom(255)}, ${MaterialRothkoComponent.getRandom(255)}, ${MaterialRothkoComponent.getRandom(255)}, 1)`;
        break;
    }
    return colorsRGBA;
  }
}
