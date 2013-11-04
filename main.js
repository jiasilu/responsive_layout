(function() {
  var dropdown = $(".dropdown");
  var selector_array = $(".search a")
  var down_button = $(".down_arrow_icon")
  var menu_button = $(".menu_icon")
  var detectViewPort = function(){
    var viewPortWidth = $(window).width();
    if (viewPortWidth > 800 && dropdown.hasClass("top")) {
      dropdown.addClass("box").removeClass("top").insertAfter(".account .menu");
      $(".account .menu").prepend(dropdown.find(".text"));
    }
  };

  //Search catagory menu click event handler
  selector_array.on("click", function(event) {
    event.preventDefault();
    selector_array.removeClass("active");
    $(event.target).addClass("active");
  });

  //Dropdown button click event handler for viewport > 800px
  down_button.on("click", function(event) {
    event.preventDefault();
    dropdown.toggle("slow");
  });

  //Dropdown button click event handler for viewport size < 800px
  menu_button.on("click", function(event) {
    event.preventDefault();
    if (dropdown.hasClass("top")) {
      dropdown.toggle("slow");
    } else {
      dropdown.removeClass("box").addClass("top").insertBefore("header");
      dropdown.prepend($(".account .text"));
      dropdown.hide().toggle("slow");
    }
  });

  //Window resize listener
  $(window).resize(function () {
     detectViewPort();
  });
})();
