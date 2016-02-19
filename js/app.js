$(function(){
  if ($(window).width() > 700) {
    $.stratus({
      key: "8f41bb09d7580c54b24f5be783d2b6fb",
      links: "https://soundcloud.com/zedsdead/sets/somewhere-else-ep"
    });
  }
  else {
    $('.small-player').append('<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/243897832&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>')
  }

  $('.flexslider').flexslider();
});