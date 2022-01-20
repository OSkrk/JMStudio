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
   if (wid > hei){ //This is wide screen
  $('.background-intro-img').width(wid);
  $('.background-intro-img').height(wid*0.6);
  $('.tittle-text').removeClass("tt-vertical").addClass("tt-wide");
  $('.top-right-slogan').removeClass("trs-vertical").addClass("trs-wide");
  $('.services-list').removeClass("sl-vertical").addClass("sl-wide");
  $('.equalizer').removeClass("e-vertical").addClass("e-wide");
  $('.navbar_company_section').removeClass("ncs-vertical").addClass("ncs-wide");
  console.log(" wide screen");
  }
  else{ // this vertical screen : this case shall crop the image from the right
    console.log("vertical screen");
    $('.background-intro-img').width(wid*2);
    $('.background-intro-img').height(wid*0.6*2);
    $('.tittle-text').removeClass("tt-wide").addClass("tt-vertical");
    $('.top-right-slogan').removeClass("trs-wide").addClass("trs-vertical");
    $('.services-list').removeClass("sl-wide").addClass("sl-vertical");
    $('.equalizer').removeClass("e-wide").addClass("e-vertical");
    $('.navbar_company_section').removeClass("ncs-wide").addClass("ncs-vertical");
  }
}
// Check if the window changed size
  $( window ).resize(function() {
    set_size();
  });

  $("body").on("load", function(){
    console.log("loaded");
  });
