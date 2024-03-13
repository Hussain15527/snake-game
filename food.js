class Food {
  constructor() {
    this.posX = 1600 * random();
    this.posY = 720 * random();
    this.scale = 10;
    this.show = function () {
      fill(0, 256, 0);
      rect(this.posX, this.posY, this.scale, this.scale);
    };

    this.isFoodEaten = function (snakePosX, snakePosY, scaleX, scaleY) {
      if (
        // snake on left
        this.posX - this.scale / 2 <= snakePosX + scaleX / 2 &&
        // snake on right
        this.posX + this.scale / 2 >= snakePosX - scaleX / 2 &&
        this.posY - this.scale / 2 <= snakePosY + scaleY / 2 &&
        this.posY + this.scale / 2 >= snakePosY - scaleY / 2
      ) {
        return true;
      } else {
        return false;
      }
    };
  }
}
