let snake;
let food;
food = [];
function setup() {
  frameRate(120);
  createCanvas(1600, 720);
  snake = new Snake();
  for (let i = 0; i < 100; i++) {
    food.push(new Food());
  }
}

function draw() {
  background(100);
  snake.update();
  snake.show();
  for (let i = 0; i < 100; i++) {
    food[i].show();
  }
  for (let i = 0; i < 100; i++) {
    if (
      food[i].isFoodEaten(
        snake.posX,
        snake.posY,
        snake.scaleX,
        snake.scaleY
      ) === true ||
      food[i].isFoodEaten(
        snake.posX,
        snake.posY,
        snake.scaleX,
        snake.scaleY
      ) === null
    ) {
      console.log(
        food[i].isFoodEaten(snake.posX, snake.posY, snake.scaleX, snake.scaleY)
      );
      if (
        food[i].isFoodEaten(
          snake.posX,
          snake.posY,
          snake.scaleX,
          snake.scaleY
        ) === true
      ) {
        console.log("eaten");
        snake.updatePoints();
        snake.changeScale(snake.scaleX + 5 * snake.points, snake.scaleY);
      }
      // food = new Food();
    }
  }
}

// to move the snake with the key press
function keyPressed() {
  console.log(keyCode);
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  }
}
