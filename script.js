$(document).ready(function(){
  // Add smooth scrolling to all links with the "scroll" class
  $(".scroll").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  
  $(".section").each(function() {
    $(this).waypoint(function() {
      $(this.element).addClass('in-view');
    }, {
      offset: '80%' 
    });
  });
});
