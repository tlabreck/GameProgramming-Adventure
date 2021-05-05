export default  class MoveCloudComponent extends Engine.Component{
    constructor(gameObject){
        super(gameObject);
    }
    update(){
        this.gameObject.transform.position.x+=.2; 
        if(this.gameObject.transform.position.x > 280)
        {
            Destroy(this.gameObject);
        }
    }
}