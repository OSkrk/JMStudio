function check() {
  set_size();
    }

check(); // first-time check

function set_size(){
  var wid = $( window ).innerWidth();
  var hei = wid*0.6;
  $('.background-intro-img').width(wid);
  $('.background-intro-img').height(hei);
}
// Check if the window changed size
  $( window ).resize(function() {
    set_size();
  });

  $("body").on("load", function(){
    console.log("loaded");
  });
