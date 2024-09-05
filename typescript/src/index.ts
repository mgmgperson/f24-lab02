import { newRenderer } from "./renderer.js"
import { newRectangle } from "./shapes/rectangle.js";
import { newCircle } from "./shapes/circle.js";
import { newSquare } from "./shapes/square.js";

const shape = newRectangle(2, 3)
const renderer = newRenderer(shape)
renderer.draw();

const shape2 = newCircle(5)
const renderer2 = newRenderer(shape2)
renderer2.draw();

const shape3 = newSquare(4)
const renderer3 = newRenderer(shape3)
renderer3.draw();