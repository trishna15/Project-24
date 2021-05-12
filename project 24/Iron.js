class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };

    this.width = 30;
    this.height = 20;
      this.body = Bodies.rectangle(x, y, 70, 40, options);
    }
    display()
    {
        var ironpos=this.body.position;		
        push()
        translate(ironpos.x, ironpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill("red");
        rect(ironpos.x,ironpos.y,this.width,this.height);
        pop()
    }
  

}