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


  $('.production-background-img').removeClass("pbi-vertical").addClass("pbi-wide");
  $('.production-container').removeClass("pc-vertical").addClass("pc-wide");
  $('.production_project_card').removeClass("ppc-vertical").addClass("ppc-wide");

$('.book_button').removeClass("book_button-vertical").addClass("book_button-wide");

$('.card-text').removeClass("card-text-vertical").addClass("card-text-wide");

$('.button_course_booking').removeClass(".button_course_booking-vertical").addClass(".button_course_booking-wide");

  $('.tittle-text').removeClass("tt-vertical").addClass("tt-wide");
  $('.top-right-slogan').removeClass("trs-vertical").addClass("trs-wide");
  $('.services-list').removeClass("sl-vertical").addClass("sl-wide");
  $('.social-media').removeClass("sm-vertical").addClass("sm-wide");
  $('.navbar_company_section').removeClass("ncs-vertical").addClass("ncs-wide");

console.log( "wide  widith: " + wid + " height: " + hei + " ratio: " + wid/hei);
  }
  else{ // this vertical screen : this case shall crop the image from the right
    $('.background-intro-img').width(wid*2);
    $('.background-intro-img').height(wid*0.6*2);
    $('.bio-background-img').width(wid*2);
    $('.bio-background-img').height(wid*0.55*2);

    $('.production-container').removeClass("pc-wide").addClass("pc-vertical");

    $('.production-background-img').removeClass("pbi-wide").addClass("pbi-vertical");
    $('.production_project_card').removeClass("ppc-wide").addClass("ppc-vertical");

    $('.book_button').removeClass("book_button-wide").addClass("book_button-vertical");

$('.card-text').removeClass("card-text-wide").addClass("card-text-vertical");

$('.button_course_booking').removeClass(".button_course_booking-wide").addClass(".button_course_booking-vertical");

    $('.tittle-text').removeClass("tt-wide").addClass("tt-vertical");
    $('.top-right-slogan').removeClass("trs-wide").addClass("trs-vertical");
    $('.services-list').removeClass("sl-wide").addClass("sl-vertical");
    $('.social-media').removeClass("sm-wide").addClass("sm-vertical");
    $('.navbar_company_section').removeClass("ncs-wide").addClass("ncs-vertical");

    console.log( "vertical widith: " + wid + " height: " + hei + "ratio: " + wid/hei);
  }

}
// Check if the window changed size
  $( window ).resize(function() {
    set_size();
  });

  $("body").on("load", function(){
    console.log("loaded");
  });
