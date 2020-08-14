class Ground{

    constructor(x,y,width,height){

        var options = {

            isStatic: true


        }
        this.g = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h = height;
        World.add(world,this.g);

        
       







    }

    Display(){

        var x = this.g.position.x;
        var y = this.g.position.y;


        rectMode(CENTER);
        fill("blue");
        rect(x,y,this.w,this.h);
        
        
        


    }





}

