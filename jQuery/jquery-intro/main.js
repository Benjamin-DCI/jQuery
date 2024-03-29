// JS - document.getElementById("demo").innerHTML = "Hello, World!";
// JQ - $("#demo").html("Hello, World!");
// $("selector").method()

// $(document).ready(function() {
//   $("#demo").html("Whatever");
// });

// Here is a list of the most commonly used selectors

// $("*") - Wildcard/All Selector: selects every element on the page
// $("p") - Tag: selects every instance of the <p> tag
// $(".example") - Class: selects every element that has the example class applied to it
// $("#example") - ID: selects a single instance of the unique example ID
// $("[type='text']") - Attribute: selects any element with the text applied to the type attribute
// $("p:first-of-type") - Pseudo-element: Selects the first <p>


// events


// $(document).ready(function() {
//   $("#trigger").click(function() {
//     $("#demo").html("Hellloooooo");
//   });
// });

// the most commonly used event methods

// click() - Click: executes on a single mouse click
// hover() - Hover: executes when the mouse is hovered over an element. mouseenter() and mouseleave() apply only to the mouse entering or leaving an element, respectively
// submit() - Submit: executes when a form is submitted
// scroll() - Scroll: executes when the screen is scrolled
// keydown() - you all know what this does

$(document).ready(function() {
  $("#greeting").on("mouseenter mouseleave", function(e) {
    if(e.type === "mouseenter") {
      $("#greeting").css("color", "chartreuse");
    } else {
        $("#greeting").css("color", "orangered");
    }
  });
});
