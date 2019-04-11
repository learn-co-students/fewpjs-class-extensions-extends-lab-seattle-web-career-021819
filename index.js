class Polygon {
  constructor(arr){
    this.arr = arr
  };

  get countSides() {
    return this.arr.length
  };

  get perimeter(){
    let perimeterNum = 0;
    for(const num of this.arr){
      perimeterNum += num;
    }
    return perimeterNum
  };

};

class Triangle extends Polygon {

  get isValid(){
    if(this.arr[0]+this.arr[1] > this.arr[2] && this.arr[1]+this.arr[2] > this.arr[0] && this.arr[2] + this.arr[0] > this.arr[1]){
      return true
    } else {
      return false
    }
  }
};

class Square extends Polygon {
  get isValid(){
    return ((this.arr[1] === this.arr[1]) && (this.arr[1] === this.arr[2]) && (this.arr[1] === this.arr[3]) && (this.arr[1] === this.arr[0]))
  }

  get area(){
    return this.arr[0]*5
  }
};
