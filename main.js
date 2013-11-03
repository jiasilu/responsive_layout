(function() {
  var dropdown = $(".dropdown");
  $(".down_arrow_icon").on("click", function(event) {
    event.preventDefault();
    dropdown.toggle("slow");
  });

  $(".menu_icon").on("click", function(event) {
    event.preventDefault();
    if(dropdown.hasClass("top")) {
      dropdown.toggle("slow");
    } else {
      dropdown.removeClass("box").addClass("top").insertBefore("header");
      dropdown.prepend($(".account .text"));
      dropdown.hide();
      dropdown.toggle("slow");
    }
  });
})();
