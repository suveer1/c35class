class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("SUVEER'S CAR RACING GAME");
        title.position(130,0);
        var input = createInput("Name");
        var button = createButton('Play');
        var greeting = createElement('h3');
        input.position(130,160);
        button.position(250,200);
        
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playercount = playercount+1;
            player.update(name);
            player.updateCount(playercount);
            greeting.html("hello "+name);
            greeting.position(130,160);
        })
    }
}
//DOM = DOCUMENTOBJECTMODULE;
