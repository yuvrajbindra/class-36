class Form {
    constructor() {
        
    }
    display() {
    // createElement : it will create heading. size of the heading is h2
var title = createElement("h2") 
//.html : is used to give the content to the heading
title.html ("car racing")
title.position (130,0)
// createInput : creates place where the player can enter his details
var input = createInput ("enter your name!")
input.position (130,160)
//createButton : it creates the button where in the player can click after entering the name
var button = createButton ("start")
button.position(250,200)
button.mousePressed(function(){
    button.hide()
    input.hide()
    var name = input.value()
    playerCount ++
    player.updateInfo(name)
    player.updateCount(playerCount)
    var greeting = createElement("h3") 
//.html : is used to give the content to the heading
greeting.html ("hello "+name)
greeting.position (130,160)
})
    } 
}