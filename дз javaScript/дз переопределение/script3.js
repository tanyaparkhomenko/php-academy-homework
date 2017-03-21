 function Circle(radius) {
             this.radius=radius;
        }

 Circle.prototype.getSquare = function () {
             return Math.PI * Math.pow(5, 2); //если в скобках пишу  "radius",вместо 5, то не получается вывести значение
         }
 Circle.prototype.valueOf = function () {
             return this.getSquare();
        }

function Triangle(w,h){
	this.width= w;
	this.height= h;
}

Triangle.prototype.getSquare = function () {
            return (this.width * this.height)/2;
}

Triangle.prototype.valueOf = function () {
            return this.getSquare();
        }

var triangle = new Triangle(10,30) ;
var circle = new Circle() ;

console.log (triangle+circle);

