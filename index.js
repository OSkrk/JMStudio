function check() {
  set_size();
    }

check(); // first-time check

function set_size(){
  var wid = $( window ).innerWidth();
  var hei = $( window ).innerHeight();
   if (wid > hei){ //This is wide screen
  $('.background-intro-img').width(wid);
  $('.background-intro-img').height(wid*0.6);
  }
  else{ // this vertical screen : this case shall crop the image from the right
    $('.background-intro-img').width(wid*2);
    $('.background-intro-img').height(wid*0.6*2);
    $('.background-intro-img').attr("margin-left", "-100%");

  }
}
// Check if the window changed size
  $( window ).resize(function() {
    set_size();
  });

  $("body").on("load", function(){
    console.log("loaded");
  });
