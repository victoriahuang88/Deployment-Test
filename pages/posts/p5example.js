import React from "react";
// import Sketch from "react-p5";
import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

let x = 50;
let y = 50;
export default (props) => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(205);
    p5.translate(110, 110);
    p5.stroke(0);
    p5.strokeWeight(70);
    p5.line(0, -35, 0, -65); // Body
    p5.noStroke();
    p5.fill(255);
    p5.ellipse(-17.5, -65, 35, 35); // Left eye dome
    p5.ellipse(17.5, -65, 35, 35); // Right eye dome
    p5.arc(0, -65, 70, 70, 0, p5.PI); // Chin
    p5.fill(0);
    p5.ellipse(-14, -65, 8, 8); // Left eye
    p5.ellipse(14, -65, 8, 8); // Right eye
    p5.quad(0, -58, 4, -51, 0, -44, -4, -51); // Beak
    x++;
  };

  return <Sketch setup={setup} draw={draw} />;
};
