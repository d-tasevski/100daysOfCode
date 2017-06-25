function debounce(func, wait = 20, immediate = true) {
    var timeout; // takes a function and runs that func every 20 miliseconds
    return function() { // always use this when working with scroll event listener
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

 function checkSlide(e) { // waypoint npm package in vanilla js
   sliderImages.forEach(sliderImage => {
      // halway through the image
      const slideInAt =  (window.scrollY + window.innerHeight) - sliderImage.height / 2 + 150;
      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.height; 
      // are the image half shown?
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;

      if(isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      };
   })
 };

 window.addEventListener('scroll', debounce(checkSlide)); 
