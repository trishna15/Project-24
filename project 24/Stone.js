class Stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      };
      this.width = 15;
      this.height = 10;
      this.body = Bodies.rectangle(x, y, 10, 10, options);
    }
    display()
    {
        var stonepos=this.body.position;		
        push()
        translate(stonepos.x,stonepos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill("gray");
        rect(stonepos.x,stonepos.y,this.width,this.height);
        pop()
    }
  

}