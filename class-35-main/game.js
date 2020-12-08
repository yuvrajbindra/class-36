class Game {
    constructor() {}
    
    //reads the gameState value from the database
    getState() {
        database.ref("gameState").on("value",function(data){
            gameState = data.val()
        })
    }

    //writing the gameState value to the database
    updateState (state) {
        database.ref("/").update({
            gameState: state
        })
    }

    //start screen
    start(){
        form = new Form()
        form.display()
        player = new Player()
        player.getCount()
    }
    
}
