

window.addEventListener("DOMContentLoaded", (event) => {
  // Get the container element
  var btnContainer = document.getElementById("category-menu");

  // Get all buttons with class="btn" inside the container
  var btns = btnContainer.getElementsByClassName("menu-item");


  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  // $(document).ready(function () {
  //   $(".qty-add").on("click", function () {
  //     var $button = $(this);
  //     var $parent = $button.parent();
  //     var oldValue = $parent.find('.qty-input').val();

  //     var newVal = parseFloat(oldValue) + 1;

  //     $parent.find('.qty-input').val(newVal);
  //   });

  //   $(".qty-remove").on("click", function () {
  //     var $button = $(this);
  //     var $parent = $button.parent();
  //     var oldValue = $parent.find('.qty-input').val();

  //     if (oldValue > 0) {
  //       var newVal = parseFloat(oldValue) - 1;
  //     } else {
  //       newVal = 0;
  //     }
  //     $parent.find('.qty-input').val(newVal);
  //   });

  // });


  // below commented code is for dynamic color theam set
  // ----------------------------------------------------
  // ----------------------------------------------------
  // ----------------------------------------------------





  // const colorPicker = document.getElementById('colorPicker');
  // const targets = document.querySelectorAll('.dynamic-color');
  // colorPicker.addEventListener('change', function () {
  //   const selectedColor = colorPicker.value;

  //   const red = parseInt(selectedColor.substring(1, 3), 16);
  //   const green = parseInt(selectedColor.substring(3, 5), 16);
  //   const blue = parseInt(selectedColor.substring(5, 7), 16);

  //   const rgb = [red, green, blue]; 
  //   targets.forEach(target => {
  //     if (selectedColor == '#ffffff') {
  //       target.style.color = '#000000';
  //       target.style.border = '2px solid #000000';
  //       target.style.backgroundColor = 'rgb('+rgb+')';
  //     } else {
  //       target.style.border = 'none';
  //       target.style.color = '#ffffff';
  //       target.style.backgroundColor = 'rgb('+rgb+')';
  //     }
  //   });
  // });


  


});