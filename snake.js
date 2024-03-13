class Snake {
  constructor() {
    this.scaleX = 15;
    this.scaleY = 15;
    this.posX = 0;
    this.posY = 0;
    this.speedX = 0;
    this.speedY = 0;

    //points for eating food
    this.points = 0;

    this.dir = (x, y) => {
      this.speedX = x;
      this.speedY = y;
    };

    this.update = () => {
      this.posX = this.posX + this.speedX * 4.5;
      this.posY = this.posY + this.speedY * 4.5;
      this.posX = constrain(this.posX, 0, width - 10);
      this.posY = constrain(this.posY, 0, height - 10);
    };

    // update the user point
    this.updataPoints = () => {
      this.points = this.points + 1;
    };

    // update the snake scale
    this.changeScale = (x, y) => {
      this.scaleX = x;
      this.scaleY = y;

      console.log("scales", this.scaleX, this.scaleY);
    };
    this.show = () => {
      fill(256);
      rect(this.posX, this.posY, this.scaleX, this.scaleY);
    };
  }
}
