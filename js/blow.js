// DEFAULTS
var defaultPos = '50%';


// HELPER FUNCTIONS
function setTextColor(element, color) {
  $(element).css("color", color);
}

function setBackgroundColor(color) {
  $("body").css("background-color", color);
}

function fadeOut(element, time) {
  $(element).fadeOut(time);
}

function setXPos(element, x) {
  $(element).parent().css("left", x);
}

function setYPos(element, y) {
  $(element).parent().css("top", y);
}


// UPDATER, STARTS ONCE AUDIO LOADS (WIP)
window.onload = function() {
  for (var i = 0; i < lyrics.length; i++) {
    setTimeout(function(state) {
    //window.history.replaceState(null, null, state.word);                  //Set page URL
    $("title").text(state.word);                                            //Set page title
    $(state.element).show().text(state.word);                                        //Set page content and make sure it's visible

    if(state.logging) {                                                     //If there are specifc console settings, use those
      switch(state.logging) {
        case "none":
          break;
        default:
          console.info(state.logging);
          break;
      }
    } else {                                                                //Otherwise log to console normally
      console.info(state.word);
    }

    if (state.backgroundColor) {setBackgroundColor(state.backgroundColor);} //Set background color
    if(state.fadeOut) {fadeOut(state.element, state.fadeOut);}                             //Set fadeOut
    if (state.textColor) {setTextColor(state.element, state.textColor);}                   //Set text color
    //if (state.X) {setXPos(state.X);} else {setXPos(state.element, defaultPos);}            //Set text X position
    //if (state.Y) {setYPos(state.Y);} else {setYPos(state.element, defaultPos);}            //Set text Y position

  },
    lyrics[i].timestamp,
    lyrics[i]);
  }
};
