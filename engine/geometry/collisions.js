import Vector2 from "./vector-2.js"
import Vector3 from "./vector-3.js"
import Line from "./line.js"
import Circle from "./circle.js"
import Rectangle from "./rectangle.js"
import Matrix from "./matrix.js"
import Polygon from "./polygon.js"
import Point from "./vector-2.js";

export default class Collisions {

  static collision(one, two) {
    if (one.geometry instanceof Vector2) {
      if (two.geometry instanceof Vector2) {
        let _one = Matrix.multiply(one.matrix, one.geometry);
        let _two = Matrix.multiply(two.matrix, two.geometry);
        if (Vector2.closeTo(_one, _two))
          return true;
        else
          return false;
      }
      else if (two.geometry instanceof Line) {
        console.error("Can't do that");
      }
      else if (two.geometry instanceof Circle) {
        let _one = Matrix.multiply(one.matrix, one.geometry);
        let _two = Matrix.multiply(two.matrix, Vector3.ZeroW).asVector2();

        //Move to the origin
        _one.minus(_two);
        _two.minus(_two)

        //Unrotate
        _one = Matrix.identity.rotate(-two.matrix.extractRotation()).multiply(_one);


        let basis1 = new Vector2(two.matrix.m11, two.matrix.m12).scale(two.geometry.radius);
        let basis2 = new Vector2(two.matrix.m21, two.matrix.m22).scale(two.geometry.radius);

        

        let b1l = basis1.length();
        let b2l = basis2.length();

        let elipseLocation = (_one.x - _two.x) ** 2 / b1l ** 2 + (_one.y - _two.y) ** 2 / b2l ** 2 - 1;
        if (elipseLocation <= 0) return true;
        return false;


        let distance = Vector2.distanceBetween(_one, _two);
        if (distance <= two.geometry.radius)
          return true;
        else
          return false;


      }
      else if (two.geometry instanceof Rectangle) {
        let _one = Matrix.multiply(one.matrix, one.geometry);
        _one.minus(two.matrix.extractTranslation());
        let corners = two.geometry.corners;

        for (let i = 0; i < corners.length; i++) {
          corners[i] = two.matrix.multiply(corners[i])
        }

        let v1 = corners[1].clone().minus(corners[0]).normalize();
        let v2 = corners[3].clone().minus(corners[0]).normalize();
        let v1l = corners[1].clone().minus(corners[0]).length();
        let v2l = corners[3].clone().minus(corners[0]).length();

        let changeOfBasis = new Matrix(
          v2.x, v2.y, 0,
          v1.x, v1.y, 0,
          0, 0, 1
        );

        let newPoint = changeOfBasis.multiply(_one);
        if (newPoint.x >= -v2l / 2 &&
          newPoint.x <= v2l / 2 &&
          newPoint.y >= -v1l / 2 &&
          newPoint.y <= v1l / 2
        )
          // if(newPoint.x >= -two.geometry.width/2 &&
          //   newPoint.x <= two.geometry.width/2 &&
          //   newPoint.y >= -two.geometry.height/2 &&
          //   newPoint.y <= two.geometry.height/2
          //   )
          return true;
        else
          return false;


      }
      else if (two.geometry instanceof Rectangle) {
        console.error("Can't do that");
      }
    }
    if (one.geometry instanceof Line) {
      console.log("Line");
      if (two.geometry instanceof Vector2) {
        return this.collision(two, one);
      }
      else if (two.geometry instanceof Line) {
        console.error("Can't do that");
      }
      else if (two.geometry instanceof Circle) {
        console.error("Can't do that");
      }
      else if (two.geometry instanceof Rectangle) {
        console.error("Can't do that");
      }
      else if (two.geometry instanceof Polygon) {
        console.error("Can't do that");
      }
    }
    if (one.geometry instanceof Circle) {
      if (two.geometry instanceof Vector2) {
        return this.collision(two, one);
      }
      else if (two.geometry instanceof Line) {
        return this.collision(two, one);
      }
      else if(two instanceof Circle) {
        let sumRadii = one.radius + two.radius
        return new Point(one.x, one.y).distanceTo(new Point(two.x, two.y)) < sumRadii;
      }
      else if(two.geometry instanceof Rectangle){
      //   let objects = [];
      //   objects.push(new Circle(two.geometry.x, two.geometry.y, one.geometry.radius))
      //   objects.push(new Circle(two.geometry.x + two.geometry.width, two.geometry.y, one.geometry.radius))
      //   objects.push(new Circle(two.geometry.x+ two.geometry.width, two.geometry.y + two.geometry.height, one.geometry.radius))
      //   objects.push(new Circle(two.geometry.x, two.geometry.y + two.geometry.height, one.geometry.radius))
      //   objects.push(new Rectangle(two.geometry.x - one.geometry.radius, two.geometry.y, two.geometry.width + one.geometry.radius * 2, two.geometry.height))
      //   objects.push(new Rectangle(two.geometry.x , two.geometry.y - one.geometry.radius, two.geometry.width , two.geometry.height+ one.geometry.radius * 2))

      //   for(let object of objects){
      //     if(this.inCollision(new Point(one.geometry.x, one.geometry.y), object)){
      //       return true;
      //     }
      //   }
         return false;
      }
      else if (two.geometry instanceof Polygon) {
        console.error("Can't do that");
      }
    }
    if (one.geometry instanceof Rectangle) {
      //console.log("Rectangle");
      if (two.geometry instanceof Vector2) {
        return this.collision(two, one);
      }
      else if (two.geometry instanceof Line) {
        return this.collision(two, one);
      }
      else if (two.geometry instanceof Circle) {
        return this.collision(two.geometry, one.geometry);
      }
      else if(two.geometry instanceof Rectangle) {
        let left1 = one.geometry.x + one.matrix.m11;
        let right1 = one.geometry.x + one.geometry.width;
        let bottom1 = one.geometry.y;
        let top1 = one.geometry.y + one.geometry.height;
        //console.log(left1 + " " + right1 + " " + bottom1 + " " + top1)
        let left2 = two.geometry.x;
        let right2 = two.geometry.x + two.geometry.width;
        let bottom2 = two.geometry.y;
        let top2 = two.geometry.y + two.geometry.height;
        //console.log(left2 + " " + right2 + " " + bottom2 + " " + top2)
        if(left2 > right1) return false;
        if(right2 < left1) return false;
        if(bottom2 > top1) return false;
        if(top2 < bottom1) return false;
        //console.log("colliding")
        return true;
      }
      else if (two.geometry instanceof Polygon) {
        console.error("Can't do that");
      }
    }
    return false;
    if (one.geometry instanceof Polygon) {
      console.log("Rectangle");
      if (two.geometry instanceof Vector2) {
        return this.collision(two, one);
      }
      else if (two.geometry instanceof Line) {
        return this.collision(two, one);
      }
      else if (two.geometry instanceof Circle) {
        return this.collision(two, one);
      }
      else if (two.geometry instanceof Rectangle) {
        return this.collision(two, one);
      }
      else if (two.geometry instanceof Polygon) {
        console.error("Can't do that");

      }
    }
  }

}