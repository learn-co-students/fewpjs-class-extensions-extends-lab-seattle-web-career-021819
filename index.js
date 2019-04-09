class Polygon {

  constructor(array) {
    this.array = array;
  }

  get getCount() {
    return this.array.length;
  }

  get perimeter() {
    let total = 0;
    for (const side of this.array) {
      total += side;
    }
    return total;
  }

}

class Triangle extends Polygon {

  get isValid() {
    if (this.array.length === 3) {
      let aa = this.array[0] + this.array[1];
      let a = this.array[2];
      let bb = this.array[1] + this.array[2];
      let b = this.array[0];
      let cc = this.array[2] + this.array[0];
      let c = this.array[1];
      if (aa > a && bb > b && cc > c) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

}

class Square extends Polygon {

  get isValid() {
    if (this.array.length === 4 && this.array[0] === this.array[1] && this.array[1] === this.array[2] && this.array[2] === this.array[3]) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this.array[0] ** 2;
  }

}
