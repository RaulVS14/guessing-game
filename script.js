window.onload = function(e){
  var numbers = 10;
  var div = generateButtons(numbers,generateNumber(numbers));
  var append_element = document.getElementById("controls");
  append_element.appendChild(div);
  
}

function generateButtons(n, value){
  var buttonsDiv = document.createElement("div");
  for(var i=1; i <= n; i++){
    var button = document.createElement("button");
    button.innerHTML = i;
    button.value = i;
    button.onclick = function(){
      guessingAction(this,value);
    };
    button.classList.add("btn-nr");
    buttonsDiv.appendChild(button);
  }

  return buttonsDiv;
}

function generateNumber(n){
  return Math.floor(Math.random() * 11) + 1;
}

function guess(x){
  return x.value;
}

function guessingAction(element, value){
  var message = document.getElementById("message");
      
      message.innerHTML = "";
      message.style.opacity = '100';
      var controls = document.getElementById("controls");
      if (value == guess(element)){
        var winning = document.getElementById("value");
        winning.innerHTML = value;
        message.innerHTML = '<span class="success">"You\'ve guessed it! Good job!<br/><br/> Refresh the page to play again!"</span>';
        controls.style.visibility = "hidden";
      } else {
        message.innerHTML = '<span class="warning">"You\'ve guessed wrong! Try again!"</span>';
        controls.style.visibility = "hidden";
        var timeout = setTimeout(function(){
          var message = document.getElementById("message");
          message.style.opacity = '0';
          controls.style.visibility = "visible";
          clearTimeout(timeout);
        }, 2000);
      };
}
