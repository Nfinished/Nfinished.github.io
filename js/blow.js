// DEFAULTS
var defaultPos = '50%';


// HELPER FUNCTIONS
function setTextColor(color) {
  $("h1").css("color", color);
}

function setBackgroundColor(color) {
  $("body").css("background-color", color);
}

function fadeOut(time) {
  $("h1").fadeOut(time);
}

function setXPos(x) {
  $("div").css("left", x);
}

function setYPos(y) {
  $("div").css("top", y);
}


// UPDATER, STARTS ONCE AUDIO LOADS (WIP)
window.onload = function() {
  for (var i = 0; i < lyrics.length; i++) {
    setTimeout(function(state) {
    window.history.replaceState(null, null, arg1);                        //Set page URL
    $("title").text(state.word);                                            //Set page title
    $("h1").show().text(state.word);                                        //Set page content and make sure it's visible

    if(state.console) {                                                     //If there are specifc console settings, use those
      switch(state.console) {
        case "none":
          break;
        default:
          console.info(state.console);
          break;
      }
    } else {                                                                //Otherwise log to console normally
      console.info(state.word);
    }

    if (state.backgroundColor) {setBackgroundColor(state.backgroundColor);} //Set background color
    if(state.fadeOut) {fadeOut(state.fadeOut);}                             //Set fadeOut
    if (state.textColor) {setTextColor(state.textColor);}                   //Set text color
    if (state.X) {setXPos(state.X);} else {setXPos(defaultPos);}            //Set text X position
    if (state.Y) {setYPos(state.Y);} else {setYPos(defaultPos);}            //Set text Y position

  },
    lyrics[i].timestamp,
    lyrics[i]);
  }
};
