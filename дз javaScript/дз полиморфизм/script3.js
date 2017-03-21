var a =prompt ("1-площадь круга,2-площадь квадрата,3- площадь треугольника, 4-площадь ромба");

switch(a) {
	case"1":
		var radius = prompt ("Введите радиус круга: ");
		Circle();
	break;
	case"2":
		var length = prompt ("Введите ширину квадрата:");
		Square();
	break;
	case "3" : 
		var width = prompt ("Введите ширину основания:");
		var height = prompt ("Введите высоту :");
		Triangle();
	break;
	case "4": 
		var width = prompt ("Введите ширину основания:");
		var height = prompt ("Введите высоту :");
		Rhombus();
	break;
}

function Shape() {
	this.getSquare=0;
}
function Circle() {
	this.getSquare=Math.PI * Math.pow(radius, 2);
	document.write (Math.PI * Math.pow(radius, 2)); 
}
function Square() {
	this.getSquare=Math.pow(length, 2);
    document.write (Math.pow(length, 2)); 
}
function Triangle(){
	this.getSquare=((width * height) / 2) ;
	document.write (width * height / 2); 
}
function Rhombus() {
	this.getSquare=width * height;
	document.write (width * height);
}
var shape= new Shape();
Circle.prototype= shape;
Square.prototype= shape;
Triangle.prototype= shape;
Rhombus.prototype= shape;

