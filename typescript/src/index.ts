import { newRenderer } from "./renderer.js"
import { newRectangle } from "./shapes/rectangle.js";


const shape = newRectangle(2, 3)
const renderer = newRenderer(shape)
renderer.draw();