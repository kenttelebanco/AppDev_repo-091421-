
function output(result){
var input1= parseInt(document.getElementById("input1").value);
var input2 = parseInt(document.getElementById("input2").value);

let n = result;
let equal;

switch(n) {
    case '+':
        equal=input1+input2;
        break;
    case '-':
        equal=input1-input2;
        break;
    case 'x':
        equal=input1*input2;
        break;
    case '/':
      equal=input1/input2;
        break;
    default:
        alert("Invalid");
         break;
}
  document.getElementById('resultOut').value=equal;
}


var switchClick = document.querySelectorAll("button")[4];
var bgColor = document.querySelectorAll("body");


switchClick.addEventListener("click", function(){
    document.getElementById("body").classList.toggle("dimBG");
    
})

