function buttonDisplayStyle() {
  let timeout = setTimeout(displayButtons, 3000);
}

function displayButtons() {
  document.getElementById("game-button").style.display = "block";
  document.getElementById("chat-button").style.display = "block";
}

buttonDisplayStyle();

// window.scrollDown.style.display = "hide";

// $('window').scrollDown(function(){$(#game-button).hide()});

// $('window').scrollUp(function(){ $(#div).show() });
