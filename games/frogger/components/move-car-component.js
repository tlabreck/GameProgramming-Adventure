
//

//


export default  class MoveCarComponent extends Engine.Component{
    constructor(gameObject){
        super(gameObject);
    }
    update(){
        this.gameObject.transform.position.x+=.1; 
        if(this.gameObject.transform.position.x > 2)
        {
            Destroy(this.gameObject);
        }
    }
}