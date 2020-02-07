function langSelect() {
  var langSelected = document.querySelector('.content__language-select');
  var langDropdown = document.querySelector('.content__language-dropdown');
  langSelected.addEventListener('click', function(e) {
      e.preventDefault();
      langDropdown.classList.toggle('content__language-dropdown--active');
  });

  Array.from(langDropdown.children).forEach(function(el, i) {
      el.addEventListener('click', function() {
          if (langDropdown.classList.contains('content__language-dropdown--active')) {
              var prevActiveItem = langDropdown.querySelector('.content__language-dropdown__item--active');
              if (prevActiveItem === el)
                  return;

              prevActiveItem.classList.remove('content__language-dropdown__item--active');
              el.classList.add('content__language-dropdown__item--active');

              var selectedText = langSelected.querySelector('.content__language-select-text');
              selectedText.innerHTML = el.innerHTML;

              langDropdown.classList.remove('content__language-dropdown--active');
          }
      });
  });
}

langSelect();

function langSelectFooter() {
  var langSelected = document.querySelector('.footer__language-select');
  var langDropdown = document.querySelector('.footer__language-dropdown');
  langSelected.addEventListener('click', function(e) {
      e.preventDefault();
      langDropdown.classList.toggle('footer__language-dropdown--active');
  });

  Array.from(langDropdown.children).forEach(function(el, i) {
      el.addEventListener('click', function() {
          if (langDropdown.classList.contains('footer__language-dropdown--active')) {
              var prevActiveItem = langDropdown.querySelector('.footer__language-dropdown__item--active');
              if (prevActiveItem === el)
                  return;

              prevActiveItem.classList.remove('footer__language-dropdown__item--active');
              el.classList.add('footer__language-dropdown__item--active');

              var selectedText = langSelected.querySelector('.footer__language-select-text');
              selectedText.innerHTML = el.innerHTML;

              langDropdown.classList.remove('footer__language-dropdown--active');
          }
      });
  });
}

langSelectFooter();
