class Polygon {
  constructor(array) {
    this.sides = array;
  }

  get getCount() {
    return this.sides.length
  }

  get perimeter() {
    let perimeter = this.sides.reduce((accumulator, side) => {
      return accumulator + side
    })
    return perimeter
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.getCount === 3) {
      let [a, b, c] = this.sides

      if ((a + b >= c) && (a + c >= b) && (b + c >= a)) {
        return true
      }
    }
    return false
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.getCount === 4) {
      let [a, b, c, d] = this.sides
      if ((a === b) && (b === c) && (c === d)) {
        return true
      }
    }
    return false
  }

  get area() {
    if (this.isValid) {
      return this.sides[0] * this.sides[1]
    }
  }
}
