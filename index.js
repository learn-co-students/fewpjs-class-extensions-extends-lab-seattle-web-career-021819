// Your code here
class Polygon {
  constructor(lengths) { 
    this.lengths = lengths
  } 

  get getCount() {
    if (!this.lengths) return 0
    return this.lengths.length
  }

  get perimeter() {
    return this.lengths.reduce((sum, l) => sum + l)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.getCount != 3) return false

    return (
      this.lengths[0] + this.lengths[1] >= this.lengths[2] &&
      this.lengths[0] + this.lengths[2] >= this.lengths[1] &&
      this.lengths[1] + this.lengths[2] >= this.lengths[0]
    )
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.getCount != 4) return false
    return this.lengths[0] === this.lengths[1]
  }

  get area() {
    return this.lengths[0] * this.lengths[1]
  }
}