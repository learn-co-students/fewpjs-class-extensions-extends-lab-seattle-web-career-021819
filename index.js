class Polygon {
  constructor(array){
    this.array = array
  }

  get countSides(){
    let count = this.array.length
    return count
  }

  get perimeter(){
    let sum = 0
    this.array.forEach(function(side) {
      sum += side
    })
    return sum
  }
}

class Triangle extends Polygon{
  constructor(array){
    super(array)
  }

  get isValid(){
   let side1 = this.array[0]
   let side2 = this.array[1]
   let side3 = this.array[2]

   if(side1 === side2 && side1 === side3 && side2 == side3){
     return true
   } else {
     return false
   }
  }
}

class Square extends Polygon {
  constructor(array){
    super(array)
  }

  get isValid(){
    let check = this.array[1]
    let count = 0
    this.array.forEach(function(side){
      if(side === check){
        count++
      }
    })
    if(count === this.array.length){
      return true
    } else {
      return false
    }
  }

  get area(){
   let area = this.array[0] * this.array[1]
   return area
  }
}
