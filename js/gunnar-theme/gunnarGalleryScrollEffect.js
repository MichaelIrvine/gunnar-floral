//
// Scroll Magic
//
export const gunnarGalleryScroll = (function() {
  const galleryBlocks = document.querySelectorAll(".blocks-gallery-grid");
  const windowScrollPos = window.scrollY + window.innerHeight;
  const windowHalfWay = windowScrollPos / 2;
  // Debounce Function from David Walsh
  // https://davidwalsh.name/javascript-debounce-function
  //
  function debounce(func, wait = 20, immediate) {
    var timeout;
    return function() {
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

  // Make sure images at top of page display
  const checkBlockPos = () => {
    galleryBlocks.forEach(block => {
      if (block.offsetTop <= windowHalfWay) { 
        block.childNodes.forEach( item => {
          item.classList.add('fade-in');
        })
      }
    });
  };

  const checkScroll = e => {
    galleryBlocks.forEach(block => {
      console.log(block.offsetTop);
      if (block.offsetTop >= window.scrollY + window.innerHeight / 2) { 
        this.childNodes.forEach( item => {
          item.classList.add('fade-in');
        })
      } 
    });
  };

  checkBlockPos();
  window.addEventListener("scroll", checkScroll);
})();
