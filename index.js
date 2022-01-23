window.onload = (event) => {
  set_size();
};

function check() {
  set_size();
    }

check(); // first-time check

function set_size(){
  var wid = $( window ).innerWidth();
  var hei = $( window ).innerHeight();
  var ratio = wid/hei;
   if (ratio > 1.5){ //This is wide screen
  $('.background-intro-img').width(wid);
  $('.background-intro-img').height(wid*0.6);
  $('.bio-background-img').width(wid);
  $('.bio-background-img').height(wid*0.55);

  $('.production-container').width(wid);
  $('.production-container').height(wid*0.6);

  $('.production-background-img').width(wid*0.8);
  $('.production-background-img').height(wid*0.71*0.8);

  $('.tittle-text').removeClass("tt-vertical").addClass("tt-wide");
  $('.top-right-slogan').removeClass("trs-vertical").addClass("trs-wide");
  $('.services-list').removeClass("sl-vertical").addClass("sl-wide");
  $('.social-media').removeClass("sm-vertical").addClass("sm-wide");
  $('.navbar_company_section').removeClass("ncs-vertical").addClass("ncs-wide");

  }
  else{ // this vertical screen : this case shall crop the image from the right
    $('.background-intro-img').width(wid*2);
    $('.background-intro-img').height(wid*0.6*2);
    $('.bio-background-img').width(wid);
    $('.bio-background-img').height(wid*0.55);

    $('.production-container').width(wid);
    $('.production-container').height(wid*0.6);

    $('.production-background-img').width(wid*0.8);
    $('.production-background-img').height(wid*0.71*0.8);

    $('.tittle-text').removeClass("tt-wide").addClass("tt-vertical");
    $('.top-right-slogan').removeClass("trs-wide").addClass("trs-vertical");
    $('.services-list').removeClass("sl-wide").addClass("sl-vertical");
    $('.social-media').removeClass("sm-wide").addClass("sm-vertical");
    $('.navbar_company_section').removeClass("ncs-wide").addClass("ncs-vertical");
  }
  console.log( "widith: " + wid + " height: " + hei + "ratio: " + wid/hei);
}
// Check if the window changed size
  $( window ).resize(function() {
    set_size();
  });

  $("body").on("load", function(){
    console.log("loaded");
  });
