const SceneManager = Engine.SceneManager;
let score = "0";
let mazecomplete = false;

export default class MainControllerComponent extends Engine.Component {
  constructor(gameObject) {
    super(gameObject);
    this.tick = 0;
  }
  start() {
    if (mazecomplete) {
      score = "1";
    }
    else {
      score = "0"
    }
    this.compnum = GameObject.Find("CompNum");
    this.compnum1 = GameObject.Find("CompNum1");
    this.hero = GameObject.Find("Hero");
    //this.hero = Engine.SceneManager.currentScene.getGameObject("Hero");
    this.endbutton = GameObject.Find("EndButton");
    this.castle = GameObject.Find("Castle");
    this.ground = GameObject.Find("Ground");
  }
  update() {
    this.tick++;
    let Matrix = Engine.SceneManager.Geometry.Matrix;

    this.heroX = this.hero.transform.position.x;
    this.heroY = this.hero.transform.position.y;
    //console.log(this.heroX + " " + this.heroY)

    if (this.heroX < -320) {
      //Move left
      if (SceneManager.currentScene.name == "MainScene") return SceneManager.changeScene("MazeScene")
      if (SceneManager.currentScene.name == "MoleScene") return SceneManager.changeScene("MainScene")
      this.hero.transform.position.x = -320;
    }
    if (this.heroX > 320) {
      //Move right
      if (SceneManager.currentScene.name == "MazeScene") return SceneManager.changeScene("MainScene")
      if (SceneManager.currentScene.name == "MainScene") return SceneManager.changeScene("MoleScene")

      this.hero.transform.position.x = 320
    }
    if (this.heroY < -240) {
      //Move up
      this.hero.transform.position.y = -240;
    }
    if (this.heroY > 240) {
      //Move Down
      this.hero.transform.position.y = 240
    }

    if (SceneManager.currentScene.name == "MainScene") {
      this.compnum.getComponent("ScreenTextComponent").string = score;
      this.compnum1.getComponent("ScreenTextComponent").string = score;

      if (this.heroY == -50 && this.heroX > -60 && this.heroX < 50) {
        this.hero.transform.position.y = this.hero.transform.position.y + 5//this.hero.getComponent("KeyboardMoveComponent");
      }
      if (this.heroY == -175 && this.heroX > -60 && this.heroX < 50) {
        this.hero.transform.position.y = this.hero.transform.position.y - 5
      }
      if (this.heroX == -60 && this.heroY > -175 && this.heroY < -50) {
        this.hero.transform.position.x = this.hero.transform.position.x - 5
      }
      if (this.heroX == 50 && this.heroY > -175 && this.heroY < -50) {
        this.hero.transform.position.x = this.hero.transform.position.x + 5
      }
      if (this.heroY > -110 && this.heroY < -100 && this.heroX > -60 && this.heroX < 50) {
        mazecomplete = false;
        return SceneManager.changeScene("CheatScene")
      }


      let mouse = Input.getMousePosition();

      //console.log(mouse)
      //let inCollision = Geometry.Collisions.collision(point, castle.getComponent("RectangleGeometryComponent").asGeometry())
      if (this.castle) {
        //console.log(this.castle.transform.position.x + " " + this.castle.transform.position.y)
        if (Geometry.Collisions.collision(
          { geometry: mouse, matrix: Engine.SceneManager.currentScene.camera.transform.worldMatrix },
          { geometry: this.castle.getComponent("RectangleGeometryComponent").asGeometry(), matrix: this.castle.transform.localMatrix }
        )) {
          this.castle.getComponent("DrawGeometryComponent").color = "orange"
        }
        else {
          this.castle.getComponent("DrawGeometryComponent").color = "gray"
        }
      }
    }

    if (SceneManager.currentScene.name == "MazeScene") {

      if (this.heroY > 195 && this.heroY < 235 && this.heroX > -315 && this.heroX < -285) {
        //score = "1";
        mazecomplete = true;
        return SceneManager.changeScene("MainScene")
      }



      let mouse = Input.getMousePosition();
      //console.log(mouse)
      this.endbuttonX = this.endbutton.transform.position.x;
      this.endbuttonY = this.endbutton.transform.position.y;
      this.endbuttonW = this.endbutton.transform.position.width;
      this.endbuttonH = this.endbutton.transform.position.height;

      //this.endbutton.transformComponent.localscale();
      //console.log(this.endbuttonX + " " + this.endbuttonY + " " + this.endbuttonW + " " + this.endbuttonH)
      if (this.endbutton) {
        if (Geometry.Collisions.collision(
          { geometry: mouse, matrix: Matrix.identity },
          { geometry: this.endbutton.getComponent("RectangleGeometryComponent").asGeometry(), matrix: this.endbutton.transform.worldMatrix }
        )) {
          this.endbutton.getComponent("DrawGeometryComponent").color = "blue"
        }
        else {
          this.endbutton.getComponent("DrawGeometryComponent").color = "yellow"
        }
      }

      // if (this.ground) {
      //   if (Geometry.Collisions.collision(
      //     { geometry: this.hero.getComponent("RectangleGeometryComponent").asGeometry(), matrix: this.hero.transform.worldMatrix },
      //     { geometry: this.ground.getComponent("RectangleGeometryComponent").asGeometry(), matrix: this.ground.transform.worldMatrix }
      //   )) {
      //     this.ground.getComponent("DrawGeometryComponent").color = "white"
      //   }
      //   else {
      //     this.ground.getComponent("DrawGeometryComponent").color = "gray"
      //   }
      // }

      if (this.ground) {
        if (Geometry.Collisions.collision(
          { geometry: mouse, matrix: Matrix.identity },
          { geometry: this.ground.getComponent("RectangleGeometryComponent").asGeometry(), matrix: this.ground.transform.worldMatrix }
        )) {
          this.ground.getComponent("DrawGeometryComponent").color = "white"
        }
        else {
          this.ground.getComponent("DrawGeometryComponent").color = "gray"
        }
      }

      

    }

    if (SceneManager.currentScene.name == "MoleScene") {

      let circle = Engine.SceneManager.currentScene.getGameObject("CircleGameObject");
      //console.log(this.tick);
      if (this.tick > 50) {
        circle.getComponent("DrawGeometryComponent").color = "blue";
        circle.destroy();
        Instantiate({
          gameObject: {
            name: "CircleGameObject",
            components: [
              { name: "DrawGeometryComponent", args: ["brown"] },
              { name: "CircleGeometryComponent", args: [30] },
            ]
          }, x: (Math.random() -.5) * 1.75 * 300, y: (Math.random() -.5) * 1.75 * 300
        },
        )
        this.tick = 0;
      }
    }



  }



}