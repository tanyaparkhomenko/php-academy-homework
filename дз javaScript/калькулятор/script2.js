var a = prompt ("Введите первое число");
var b = prompt ("Введите второе число");
var c = prompt ("Введите желаемую операцию");
var res ;

function sum(a, b) {
            res = a + b;
            alert(res); 
        }
function sub(a, b) {
            res = a - b;
            alert(res);
        }
function mul(a, b) {
            res = a * b;
            alert(res);
        }
function div(a, b) {
            res = a / b;
            alert(res);
        }
Math.pow (a,b)  ;

switch (c) {

	case"+" : {
		sum (a,b);
	}
	break;
	case "-" : {
		sub (a,b);
	}
	break;
	case "*" : {
		mul (a,b);
	}
	break;
	case "/" : {
		div(a,b) ;
	}
	break;
	case "^" : {
		Math.pow (a,b);
	}
	break;
}