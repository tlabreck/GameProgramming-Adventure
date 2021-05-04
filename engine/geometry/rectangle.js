import Geometry from "./collisions.js"
import Vector2 from "./vector-2.js";
export default class Rectangle{
  constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height
   
  }
  get corners(){
    return [
      new Vector2(-this.width/2, -this.height/2),
      new Vector2(-this.width/2, this.height/2),
      new Vector2(this.width/2, this.height/2),
      new Vector2(this.width/2, -this.height/2),
    ]
  }

}