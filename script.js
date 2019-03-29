var terkep = [
    [1,1,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1],
    [1,1,1,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1],
    [1,0,0,0,0,1,0,0],
    [1,0,0,0,0,1,0,0],
    [1,0,0,0,0,1,0,0],
]; 

function startGame(){
    jatekTer.start()
}

function rajzol(){
    var szobak = [];
    for(let i=0; i<8;i++){
        for (let j=0; j<9; j++){
            if(terkep[i][j]){
                let sz = new szoba(60,60,"brown",0+j*60,0+i*60);
                szobak.push(sz)
            }
        }
    }
}

var jatekTer = {
    canvas : document.createElement("canvas"),
    start : function(){
        this.canvas.width = 480;
        this.canvas.height = 480;
        this.context = this.canvas.getContext("2d");
        //document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        document.getElementById("canvas-container").appendChild(this.canvas);
        /*this.context.beginPath();
        for (var x=0.5;x<480;x+=60) {
            this.context.moveTo(x,0);
            this.context.lineTo(x,480);
        }
        for (var y=0.5; y<480; y+=60) {
            this.context.moveTo(0,y);
            this.context.lineTo(480,y);
        }
        //this.context.strokeStyle='grey';
        //this.context.setLineDash([1,4]);
        this.context.lineWidth = 2;
        this.context.strokeStyle = "black";
        this.context.stroke();*/
    }
}
    
    
function szoba(w, h, col, x, y){
    ctx = jatekTer.context;
    ctx.fillStyle = col;
    ctx.fillRect(x, y, w, h);
    
    ctx.beginPath();
    
    ctx.moveTo(x, y+h/3);
    ctx.lineTo(x, y);
    ctx.lineTo(x+w/3, y);
    
    ctx.moveTo(x+2*w/3, y);
    ctx.lineTo(x+w, y);
    ctx.lineTo(x+w, y+h/3);
    
    ctx.moveTo(x+w, y+2*h/3);
    ctx.lineTo(x+w, y+h);
    ctx.lineTo(x+2*w/3, y+h);
    
    ctx.moveTo(x+w/3, y+h);
    ctx.lineTo(x, y+h);
    ctx.lineTo(x, y+2*w/3);
    
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.setLineDash([]);
    ctx.stroke();
    
}
