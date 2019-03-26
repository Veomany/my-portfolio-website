$("#about-to-top, #project-to-top").on("click", function() {
  $(window).scrollTop(0);
});

$(function(){
  $('li').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(e.target).attr("href")).offset().top
    }, 0);
  });
});