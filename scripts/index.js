function checkElementLocation() {
    var $window = $(window);
    var bottom_of_window = $window.scrollTop() + $window.height();
  
    $('.to-fade-in').each(function(i) {
      var $that = $(this);
      var bottom_of_object = $that.position().top + $that.outerHeight();
  
      //if element is in viewport, add the animate class
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('fade-in');
      }
    });
}
  
// if in viewport, show the animation
checkElementLocation();

$(window).on('scroll', function() {
  checkElementLocation();
});

const homeButton = document.querySelector('.home-button');

homeButton.addEventListener('mouseleave', (e) => {
    e.target.innerHTML = '<div class="nav-name">III</div>';
})

homeButton.addEventListener('mouseenter', (e) => {
    e.target.innerHTML = `<div class="nav-name"><span id="first-name"><span id="single-r">R</span>ICK</span><span id="last-name">ACKLEY</span><span id="suffix">III</span</div>`;
})

homeButton.addEventListener('click', () => {
    document.querySelector('#home-container').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})

