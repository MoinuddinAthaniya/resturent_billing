$(document).ready(function () {
  
    const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
    const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
    const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
  
    
  
    for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
      // mobile menu function
      const mobileMenuCloseFunc = function () {
        mobileMenu[i].classList.remove('active');
      }
    
      mobileMenuOpenBtn[i].addEventListener('click', function () {
        mobileMenu[i].classList.add('active');
      });
    
      mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    
    }


    $('.contextMenu').on("contextmenu", function(event) {
      event.preventDefault();
      $(".context")
        .show()
        .css({
          top: event.pageY,
          left: event.pageX
        });
    });
    $(document).click(function() {
      if ($(".context").is(":hover") == false) {
        $(".context").fadeOut("fast");
      };
    });
  
  
  });

  
  
  
  
  