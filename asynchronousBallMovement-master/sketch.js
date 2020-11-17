var ball1,database,pos;

function setup(){
    createCanvas(500,500);

    database=firebase.database();

    ball1 = createSprite(250,250,10,10);
    ball1.shapeColor = "red";
    
    var ballpos=database.ref('ball/pos');
    ballpos.on("value",readposition,showerror)
}

function draw(){
    background("white");
    if(pos!=undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}

function writePosition(x,y){
    database.ref('ball/pos').set({
        'x':pos.x+x,
        'y':pos.y+y
    })
}
function readposition(data)
{
 pos=data.val()
 ball1.x=pos.x;
 ball1.y=pos.y;
}
function showerror()
{
 console.log("error");   
}