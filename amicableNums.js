function displaynums() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	document.write(num1 + "<br>");
	document.write(num2);
}
function runProgram() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	document.getElementById("paragraph").innerHTML = num1;
	document.getElementById("p2").innerHTML = num2;
	var factor_array1 = getFactors(num1);
	var factor_array2 = getFactors(num2);
	var sum1 = addFactors(factor_array1);
	var sum2 = addFactors(factor_array2);
	if (sum2 == num1 && sum1 == num2) {
		document.getElementById("displayresult").innerHTML = "AMICABLE";
	}
	else {
		document.getElementById("displayresult").innerHTML = "NOT AMICABLE";
	}
	console.log("factor array: " + factor_array1 + "<br>");
	console.log("factor array 2: " + factor_array2 + "<br>");
	console.log("sum1: " + sum1 + "<br>");
	console.log("sum2: " + sum2);
}
function isFactor(num, testnum) {
	if (num%testnum == 0) {
		//document.write("true");
		return true;
	}
	else {
		//document.write("false");
		return false;
	}
}
function showFactors(array) {
	for (i = 0; i < array.length; i++) {
		document.write(array[i] + " ");
	}
}
function addFactors(array) {
	sum = 0;
	for (i = 0; i < array.length; i++) {
		item = array[i];
		num = Number(item);
		sum = sum + num;
	}
	return sum;
}
function getFactors(num) {
	var half = Math.floor(num / 2);
	var list = '1';
	var i;
	var j;
    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);
    for (i; i <= half; i += j) {
        num % i === 0 ? list += ',' + i : false;
    }
    var factor_array = list.split(",");
    return factor_array
}


/* TEST FUNCTION FOR ADD FACTORS: put different elements in the array
to get different sums. 
function test_addFactors() {
	array = [2, 23, 0];
	sum = addFactors(array);
	document.write(sum);
}*/
/* TEST FUNCTION FOR SHOW FACTORS: ran loop to print each element
in the array that the function takes in
function test_showFactors() {
	array = [45, 2, 31, 90, 8];
	showFactors(array);
} */
/* TEST FUNCTION FOR IS FACTOR: changed the numbers for the 
testnum and num in order to get predicted return statement 
function test_isFactor() {
	document.write("in is factor test" + "<br>");
	var num = 5;
	var testnum = 10;
	isFactor(num, testnum) == 0;
}*/