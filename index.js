class Polygon {
  constructor(array) {
    this.array = array
  }

  get getCount() {
    return this.array.length
  }

  get perimeter() {
    let sum = 0;
    for(let i = 0; i < this.array.length; i++)
      sum += this.array[i];
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    let side1 = this.array[0]
    let side2 = this.array[1]
    let side3 = this.array[2]

    return (side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)
  }
}

class Square extends Polygon {
  get isValid() {
    let side1 = this.array[0]
    let side2 = this.array[1]
    let side3 = this.array[2]
    let side4 = this.array[3]

    return (side1 == side2) && (side1 == side3) && (side1 == side4)
  }

  get area() {
    let area = this.array[0] * this.array[1]
    return area
  }
}
