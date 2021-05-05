export default  class TitleSceneCountdownComponent extends Engine.Component {
  constructor(gameObject) {
    super(gameObject);
    this.tick = 0;
  }
  update(){
    this.tick++;
    if(this.tick > 200)
      this.gameObject.getComponent("SceneChangerComponent").next();
  }
}