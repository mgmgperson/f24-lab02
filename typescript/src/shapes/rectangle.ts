import { Shape } from './shape';


function newRectangle(width: number, height: number): Shape {
    let _width = width
    let _height = height
    return {
        computeArea: function (): number {
            return _width * _height
        }
    }
}

export { newRectangle }
