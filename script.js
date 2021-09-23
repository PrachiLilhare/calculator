var element = document.getElementById("display");

//Onclick a button operator should be display on display block
function valueClear(){
	var clear = " ";
	element.value = clear;
}

function valuePlus(){
	var plus = "+";
	element.value += plus;
}

function valueMod(){
	var mod = "%";
	element.value += mod;
}

function valueDiv(){
	var div = "/";
	element.value += div;
}

function valueMinus(){
	var minus = "-";
	element.value += minus;
}

function valueMultiply(){
	var multiply = "*";
	element.value += multiply;
}

function valueOne(){
	var one = "1";
	element.value += one;
}

function valueTwo(){
	var two = "2";
	element.value += two;
}

function valueThree(){
	var three = "3";
	element.value += three;
}

function valueFour(){
	var four = "4";
	element.value += four;
}

function valueFive(){
	var five = "5";
	element.value += five;
}

function valueSix(){
	var six = "6";
	element.value += six;
}

function valueSeven(){
	var seven = "7";
	element.value += seven;
}

function valueEight(){
	var eig = "8";
	element.value += eig;
}

function valueNine(){
	var nine = "9";
	element.value += nine;
}


function calculate(){
	var valueDisplay = element.value; 
	var result = eval(valueDisplay);
	element.value = result;
}
