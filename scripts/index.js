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
document.querySelector('.about-button').addEventListener('click', () => {
    document.querySelector('#about-container').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})
document.querySelector('.skills-button').addEventListener('click', () => {
    document.querySelector('#skills-container').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})
document.querySelector('.portfolio-button').addEventListener('click', () => {
    document.querySelector('#portfolio-container').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})
document.querySelector('.contact-button').addEventListener('click', () => {
    document.querySelector('#contact-container').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})
document.querySelector('.resume-button').addEventListener('click', () => {
    window.open('https://drive.google.com/file/d/19-_JrY3plmfR982fAFpp-E4cUigrUVlF/view?usp=sharing');
})