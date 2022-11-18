import React from "react";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { setRevalidateHeaders } from "next/dist/server/send-payload";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function Balls(props) {
  let balls = [];

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0);
    p5.fill(255);
    p5.textAlign(p5.CENTER);
    p5.textSize(20);
    p5.text("Click me!", p5.width / 2, p5.height / 2);

    for (var i = 0; i < balls.length; i++) {
      balls[i].display();
      balls[i].move();
    }
  };

  const mousePressed = (p5) => {
    balls.push(new Ball(p5.mouseX, p5.mouseY, p5));
  };

  return <Sketch setup={setup} draw={draw} mousePressed={mousePressed} />;
}

export class Ball {
  constructor(x, y, p5) {
    this.x = x;
    this.y = y;
    this.p5 = p5;
    this.vx = this.p5.random(-2, 2);
    this.vy = this.p5.random(-2, 2);
    this.c = this.p5.color(
      0,
      this.p5.random(200, 255),
      this.p5.random(150, 255),
      this.p5.random(100, 200)
    );
    this.r = this.p5.random(5, 30);
  }

  display() {
    this.p5.noStroke();
    this.p5.fill(this.c);
    this.p5.ellipse(this.x, this.y, 2 * this.r, 2 * this.r);

    if (this.x < this.r || this.x > this.p5.width - this.r) this.vx *= -1;
    if (this.y < this.r || this.y > this.p5.height - this.r) this.vy *= -1;
  }
  move() {
    this.y = this.y + this.vx;
  }
  //Add a function that makes the balls move
}
