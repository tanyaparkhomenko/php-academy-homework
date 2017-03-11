var age = prompt ("Введите Ваш возраст");

if (age<= 6) {
	document.write ( " Алкоголь категорически запрещен!!!");
}
else if (age<=12 ) {
	document.write("Алкоголь нежелателен!");
}
else if  (age<=17) { 
	document.write ("Алкоголь нежелателен!");
}
else if  (age=>18) { 
	document.write ("Алкоголь разрешен!");
}