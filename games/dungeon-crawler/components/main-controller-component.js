const SceneManager = Engine.SceneManager;
let score = "0";
let mazecomplete = false;
let molecomplete = false;
let count = 0;

export default class MainControllerComponent extends Engine.Component {
  constructor(gameObject) {
    super(gameObject);
    this.tick = 0;
    this.coolDownRestart = 0;
  }
  start() {
    if (mazecomplete && !molecomplete) {
      score = "1";
    }
    else if (molecomplete && !mazecomplete) {
      score = "1";
    }
    else if (mazecomplete && molecomplete) {
      score = "2";
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
    this.maze = GameObject.Find("MazeWall");
    this.mole = GameObject.Find("Mole");
  }
  update() {
    this.tick++;
    this.coolDownRestart--;
    let Matrix = Engine.SceneManager.Geometry.Matrix;

    this.heroX = this.hero.transform.position.x;
    this.heroY = this.hero.transform.position.y;
    //console.log(this.heroX + " " + this.heroY)

    if (this.heroX < -320) {
      //Move left
      if (SceneManager.currentScene.name == "MainScene") return SceneManager.changeScene("MazeScene")
      //if (SceneManager.currentScene.name == "MoleScene") return SceneManager.changeScene("MainScene")
      this.hero.transform.position.x = -320;
    }
    if (this.heroX > 320) {
      //Move right
      //if (SceneManager.currentScene.name == "MazeScene") return SceneManager.changeScene("MainScene")
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

    // Used to force collisions
    if (SceneManager.currentScene.name == "MainScene") {
      this.compnum.getComponent("ScreenTextComponent").string = score;
      this.compnum1.getComponent("ScreenTextComponent").string = score;

      if (this.tick >= 50 && score == "2") {
        mazecomplete = false;
        molecomplete = false;
        return SceneManager.changeScene("WinScene");
      }

      if (this.heroY == -50 && this.heroX > -55 && this.heroX < 55) {
        this.hero.transform.position.y = this.hero.transform.position.y + 5//this.hero.getComponent("KeyboardMoveComponent");
      }
      if (this.heroY == -175 && this.heroX > -55 && this.heroX < 55) {
        this.hero.transform.position.y = this.hero.transform.position.y - 5
      }
      if (this.heroX == -55 && this.heroY > -175 && this.heroY < -50) {
        this.hero.transform.position.x = this.hero.transform.position.x - 5
      }
      if (this.heroX == 55 && this.heroY > -175 && this.heroY < -50) {
        this.hero.transform.position.x = this.hero.transform.position.x + 5
      }
      if (this.heroY < -60 && (this.heroX < -50 || this.heroX > 50)) {
        this.hero.transform.position.y = this.hero.transform.position.y + 5
      }
      if (this.heroY < -110 && this.heroX > -55 && this.heroX < 55) {
        mazecomplete = false;
        molecomplete = false;
        return SceneManager.changeScene("CheatScene")
      }
      
      if (this.coolDownRestart <= 0) {
        this.coolDownRestart = Math.random() * 5000;
        Instantiate({
          prefabName: "Cloud",
          x: -280, y: -170, drawLayer: "wrap"
        })
      }

      let mouse = Input.getMousePosition();

      //console.log(mouse)
      //let inCollision = Geometry.Collisions.collision(point, castle.getComponent("RectangleGeometryComponent").asGeometry())
      if (this.castle) {
        //console.log(this.castle.transform.position.x + " " + this.castle.transform.position.y)
        if (Geometry.Collisions.collision(
          { geometry: mouse, matrix: Engine.SceneManager.currentScene.camera.transform.worldMatrix.inverse() },
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

      // if (this.heroY > 195 && this.heroY < 235 && this.heroX > -315 && this.heroX < -285) {
      //   //score = "1";
      //   mazecomplete = true;
      //   return SceneManager.changeScene("MainScene")
      // }



      let mouse = Input.getMousePosition();
      //console.log(mouse)
      this.endbuttonX = this.endbutton.transform.position.x;
      this.endbuttonY = this.endbutton.transform.position.y;
      this.endbuttonW = this.endbutton.transform.position.width;
      this.endbuttonH = this.endbutton.transform.position.height;


      //this.endbutton.transformComponent.localscale();
      //console.log(this.endbuttonX + " " + this.endbuttonY + " " + this.endbuttonW + " " + this.endbuttonH)
      if (this.hero) {
        if (Geometry.Collisions.collision(
          { geometry: this.hero.getComponent("RectangleGeometryComponent").asGeometry(), matrix: this.hero.transform.worldMatrix },
          { geometry: this.endbutton.getComponent("RectangleGeometryComponent").asGeometry(), matrix: this.endbutton.transform.worldMatrix }
        )) {
          //this.endbutton.getComponent("DrawGeometryComponent").color = "red"
          mazecomplete = true;
          return SceneManager.changeScene("MainScene");
        }
        else {
          this.endbutton.getComponent("DrawGeometryComponent").color = "yellow"
        }
      }

      // if (this.hero) {
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

      // if (this.ground) {
      //   if (Geometry.Collisions.collision(
      //     { geometry: mouse, matrix: Engine.SceneManager.currentScene.camera.transform.worldMatrix.inverse() },
      //     { geometry: this.ground.getComponent("RectangleGeometryComponent").asGeometry(), matrix: this.ground.transform.worldMatrix }
      //   )) {
      //     this.ground.getComponent("DrawGeometryComponent").color = "white"
      //   }
      //   else {
      //     this.ground.getComponent("DrawGeometryComponent").color = "gray"
      //   }
      // }

      

    }

    if (SceneManager.currentScene.name == "MoleScene") {

      //let mole = Engine.SceneManager.currentScene.getGameObject("Mole");
      //console.log(this.tick);
      if (this.tick > 50) {
        //circle.getComponent("DrawGeometryComponent").color = "blue";
        //mole.destroy();
        this.mole.destroy();
        
        Instantiate({
          gameObject: {
            name: "Mole",
            components: [
              { name: "DrawGeometryComponent", args: ["lightblue"] },
              { name: "RectangleGeometryComponent", args: [30, 30] },
            ]
          }, x: (Math.random() -.5) * 1.5 * 280, y: (Math.random() -.5) * 1.5 * 280, drawLayer:"background"
        },
        )
        
        this.tick = 0;
      }
      this.mole = GameObject.Find("Mole");
      
      if (this.hero) {
        if (Geometry.Collisions.collision(
          { geometry: this.hero.getComponent("RectangleGeometryComponent").asGeometry(), matrix: this.hero.transform.worldMatrix },
          { geometry: this.mole.getComponent("RectangleGeometryComponent").asGeometry(), matrix: this.mole.transform.worldMatrix }
        )) {
          count++;
          this.mole.getComponent("DrawGeometryComponent").color = "black"
          
        }
        else {
          this.mole.getComponent("DrawGeometryComponent").color = "white"
        }
      }


      if (count == 10){
        Instantiate({
          gameObject: {
            name: "TenPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: -250, y: -220, drawLayer:"foreground"
        },
        )
      }
      if (count == 20) {
        Instantiate({
          gameObject: {
            name: "TwentyPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: -220, y: -220, drawLayer:"foreground"
        },
        )
      }
      if (count == 30) {
        Instantiate({
          gameObject: {
            name: "ThirtyPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: -190, y: -220, drawLayer:"foreground"
        },
        )
      }
      if (count == 40) {
        Instantiate({
          gameObject: {
            name: "FortyPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: -160, y: -220, drawLayer:"foreground"
        },
        )
      }
      if (count == 50) {
        Instantiate({
          gameObject: {
            name: "FiftyPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: -130, y: -220, drawLayer:"foreground"
        },
        )
      }
      if (count == 60) {
        Instantiate({
          gameObject: {
            name: "SixtyPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: -100, y: -220, drawLayer:"foreground"
        },
        )
      }
      if (count == 70) {
        Instantiate({
          gameObject: {
            name: "SeventyPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: -70, y: -220, drawLayer:"foreground"
        },
        )
      }
      if (count == 80) {
        Instantiate({
          gameObject: {
            name: "EightyPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: -40, y: -220, drawLayer:"foreground"
        },
        )
      }
      if (count == 90) {
        Instantiate({
          gameObject: {
            name: "NinetyPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: -10, y: -220, drawLayer:"foreground"
        },
        )
      }
      if (count == 100) {
        Instantiate({
          gameObject: {
            name: "HundredPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: 20, y: -220, drawLayer:"foreground"
        },
        )
      }
      if (count == 110) {
        Instantiate({
          gameObject: {
            name: "OneTenPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: 50, y: -220, drawLayer:"foreground"
        },
        )
      }
      if (count == 120) {
        Instantiate({
          gameObject: {
            name: "OneTwentyPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: 80, y: -220, drawLayer:"foreground"
        },
        )
      }
      if (count == 130) {
        Instantiate({
          gameObject: {
            name: "OneThirtyPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: 110, y: -220, drawLayer:"foreground"
        },
        )
      }
      if (count == 140) {
        Instantiate({
          gameObject: {
            name: "OneFortyPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: 140, y: -220, drawLayer:"foreground"
        },
        )
      }
      if (count == 150) {
        Instantiate({
          gameObject: {
            name: "OneFiftyPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: 170, y: -220, drawLayer:"foreground"
        },
        )
      }
      if (count == 160) {
        Instantiate({
          gameObject: {
            name: "OneSixtyPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: 200, y: -220, drawLayer:"foreground"
        },
        )
      }
      if (count >= 170) {
        Instantiate({
          gameObject: {
            name: "OneSeventyPercent",
            components: [
              { name: "DrawGeometryComponent", args: ["black"] },
              { name: "RectangleGeometryComponent", args: [20, 30] },
            ]
          }, x: 230, y: -220, drawLayer:"foreground"
        },
        )
      }

      if (count >= 175) {
        count = 0;
        molecomplete = true;
        return SceneManager.changeScene("MainScene");
      }
    }



  }



}