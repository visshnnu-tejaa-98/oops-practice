var Circle = /** @class */ (function () {
    function Circle(radiusValue, colorValue) {
        this.radius = radiusValue;
        this.color = colorValue;
    }
    Circle.prototype.toString = function () {
        console.log("Circle [radius = " + this.radius + " , color = " + this.color + " ]");
    };
    Circle.prototype.getArea = function () {
        console.log(Math.PI * this.radius * this.radius);
    };
    Circle.prototype.getCircumference = function () {
        console.log(2 * Math.PI * this.radius);
    };
    return Circle;
}());
var c = new Circle(1, "red");
c.toString();
c.getArea();
c.getCircumference();
