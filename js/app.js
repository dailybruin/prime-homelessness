// $(function(){
//   $('.contents').hide();

//   $('.contents-btn').click(function() {
//     $('.contents').toggle();
//   });

//   console.log("In toggle function");
// });

// $(function(){
//   console.log("In resize function");
//   if ($(window).width() > 700) {
//     $.stratus({
//       key: "8f41bb09d7580c54b24f5be783d2b6fb",
//       links: "https://soundcloud.com/zedsdead/sets/somewhere-else-ep"
//     });
//   }
//   else {
//     $('.small-player').append('<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/243897832&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>')
//   }

//   $('.flexslider').flexslider();
// });



// var menu_toggle = function() {
//   /* Push the body and the nav over by 285px over */
//   $('.icon-menu').click(function() {
//     $('.menu').animate({
//       left: "0px"
//     }, 200);

//     $('body').animate({
//       left: "285px"
//     }, 200);
//   });

//   /* Then push them back */
//   $('.icon-close').click(function() {
//     $('.menu').animate({
//       left: "-285px"
//     }, 200);

//     $('body').animate({
//       left: "0px"
//     }, 200);
//   });
// };

var contents_toggle = function() {
  $('.contents').hide();

  $('.contents-btn').click(function() {
    console.log("Toggling");
    $('.contents').toggle();
  });

  $(document).click(function() {
    console.log("OMg a click");
  });

  console.log("In toggle function");

};


$(document).ready(contents_toggle);