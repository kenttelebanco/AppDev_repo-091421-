var x = parseInt(prompt("Enter Operation:\n[1] Add\n[2] Subtract\n[3] Multiply\n[4] Divide"));

/*if else statement incase the user mu input ug wala sa selection*/
if (x != 0 && x<=4){
    var num1 = parseInt(prompt("Enter First Number: "));
var num2 = parseInt(prompt("Enter Second Number: "));
}
else if (x === 0 || x>=5) {
    alert("Enter Correct Symbol");
}


let result;

/*operations*/
if (x == 1) {
    add_function = (a,b) => {return a + b};
    result = add_function(num1,num2);
    alert("Result: "+ result);
    } 
else if (x == 2) {
    sub_function = (a,b) => {return a - b};
    result = sub_function(num1,num2);
    alert("Result: " + result);
}
else if (x == 3) {
    mult_function = (a,b) => {return a * b};
    result = mult_function(num1,num2);
    alert("Result: "+result);
}
else if (x == 4) {
    div_function = (a,b) => {return a / b};
    result = div_function(num1,num2);
    alert("Result: "+result);
}



