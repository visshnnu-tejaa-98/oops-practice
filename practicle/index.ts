class Circle{
    radius:number
    color:string

    constructor(radiusValue:number,colorValue:string){
        this.radius = radiusValue
        this.color = colorValue
    }

    toString(){
        console.log(`Circle [radius = ${this.radius} , color = ${this.color} ]`)
    }

    getArea(){
        console.log(Math.PI * this.radius * this.radius)
    }

    getCircumference(){
        console.log( 2 * Math.PI * this.radius)
    }
}

let c = new Circle(1,"red")
c.toString()
c.getArea()
c.getCircumference()