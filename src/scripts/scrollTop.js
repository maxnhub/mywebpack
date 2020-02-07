function scrollTop() {
  //скролл наверх
  function scrollToTop(scrollDuration) {
      var scrollHeight = window.scrollY
        , scrollStep = Math.PI / (scrollDuration / 15)
        , cosParameter = scrollHeight / 2;
      var scrollCount = 0, scrollMargin, scrollInterval = setInterval(function() {
          if (window.scrollY != 0) {
              scrollCount = scrollCount + 1;
              scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
              window.scrollTo(0, scrollHeight - scrollMargin);
          } else
              clearInterval(scrollInterval);
      }, 15);
  }

  var toTop = document.querySelector('.footer__scrollup');
  toTop.addEventListener('click', function(e) {
      e.preventDefault();
      scrollToTop(1000);
  });
}