const SceneManager = Engine.SceneManager;

export default class MazeCollisionComponent extends Engine.Component {
    constructor(gameObject) {
        super(gameObject);
        this.tick = 0;

    }
/*
    start() {
        this.hero = GameObject.Find("Hero");
        //this.ground = GameObject.Find("Ground");
        //this.mazewall = GameObject.Find("MazeWall");
        this.endbutton = GameObject.Find("EndButton");
    }

    update() {
        let Matrix = Engine.SceneManager.Geometry.Matrix;

        let mouse = Input.getMousePosition()
        //this.hero = this.hero.transform.position.x;
        //console.log(this.hero);
            if(this.endbutton){
                if (Geometry.Collisions.collision(
                    { geometry: mouse, matrix: Matrix.identity},
                    { geometry: this.endbutton.getComponent("RectangleGeometryComponent").asGeometry(), matrix: this.endbutton.transform.worldMatrix }
                  )) {
                    this.endbutton.getComponent("DrawGeometryComponent").color = "blue"
                  }
                  else {
                    this.endbutton.getComponent("DrawGeometryComponent").color = "yellow"
                  }
            }


            //this.hero = Engine.SceneManager.currentScene.getPrefab("Hero");
            //this.endbutton = Engine.SceneManager.currentScene.getGameObject("EndButton");

            //let inCollision = Geometry.Collisions.collision(this.hero, this.endbutton.getComponent("RectangleGeometryComponent").asGeometry());
            //console.log(inCollision);

        this.heroX = this.hero.transform.position.x;
        this.heroY = this.hero.transform.position.y;

        this.endbuttonX = this.endbutton.transform.position.x;
        this.endbuttonY = this.endbutton.transform.position.y;

        //this.groundX = this.ground.transform.position.x;
        //this.groundY = this.ground.transform.position.y;

        let Matrix = Engine.SceneManager.Geometry.Matrix;

        if(Geometry.Collisions.collision(
            { geometry: this.hero.getComponent("RectangleGeometryComponent").asGeometry(), matrix: this.hero.transform.worldMatrix },
            { geometry: this.ground.getComponent("RectangleGeometryComponent").asGeometry(), matrix: this.ground.transform.worldMatrix }
        )) {

        }
        else {
            this.heroX = this.hero.transform.position.x *-1;
            this.heroY = this.hero.transform.position.y *-1;
        }

        if (SceneManager.currentScene.name == "MazeScene") {
            if (Geometry.Collisions.collision(
                { geometry: this.hero.getComponent("RectangleGeometryComponent").asGeometry(), matrix: this.hero.transform.worldMatrix },
                { geometry: this.endbutton.getComponent("RectangleGeometryComponent").asGeometry(), matrix: this.endbutton.transform.worldMatrix }
            )) {
            if(this.heroX ) {
                this.hero.getComponent("DrawGeometryComponent").color = "orange";
            }
            else {
                this.hero.getComponent("DrawGeometryComponent").color = "black";
            }
        }
    }*/
}