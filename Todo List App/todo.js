
//this is for the strike
var todoList = document.querySelector('ul');
todoList.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('strike');
  } 
});

//this is for the remove
var remove = document.getElementsByTagName("li");
clickRemove();

function clickRemove() {
  for (var i = 0; i < remove.length; i++) {
  var div = document.createElement("div");
  var txt = document.createTextNode("DELETE");

  div.style.fontSize = "small";
  div.className = "delete";
  div.appendChild(txt);
  remove[i].appendChild(div);
}}

var close = document.getElementsByClassName("delete");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var listRemove = this.parentElement;
    listRemove.style.display = "none";
  }
}

//this is for the addition
var button = document.getElementById("add");
var input = document.getElementById("inputTodo");
var ul = document.querySelector("ul");

button.addEventListener("click", function () {
     if (input.value.length > 0) {
       var li = document.createElement("li");
       li.appendChild(document.createTextNode(input.value));
       ul.appendChild(li);
       input.value = "";
     }

  var div1 = document.createElement("div");
  var txt = document.createTextNode("DELETE");

  div1.style.fontSize = "small";
  div1.className = "delete";
  div1.appendChild(txt);
  li.appendChild(div1);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
   });




