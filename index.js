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
  $('.tittle-text').animate({right: "8%"});
  $('.top-right-slogan').animate({right: "13%", fontSize: "3vw"});
  $('.services-list').animate({right: "19%", fontSize: "2vw"});
  $('.equalizer').animate({right: "22%"});

  $('.top-right-slogan').animate({right: "13%", top:"20%",fontSize: "3vw"});
  $('.services-list').animate({right: "19%", fontSize: "2vw"});
  $('.equalizer').animate({right: "22%",top:"60%", width:"10%",height: "25%"});
  console.log(" wide screen");
  }
  else{ // this vertical screen : this case shall crop the image from the right
    console.log("vertical screen");
    $('.background-intro-img').width(wid*2);
    $('.background-intro-img').height(wid*0.6*2);
    $('.background-intro-img').attr("position","right");
    $('.tittle-text').animate({right: "55%"});
    $('.top-right-slogan').animate({right: "55%", top:"15%",fontSize: "4.5vw"});
    $('.services-list').animate({right: "57%", fontSize: "4vw"});
    $('.equalizer').animate({right: "68%",top:"70%", width:"10%",height: "13%"});
  }
}
// Check if the window changed size
  $( window ).resize(function() {
    set_size();
  });

  $("body").on("load", function(){
    console.log("loaded");
  });
