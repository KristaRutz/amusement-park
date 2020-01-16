$(document).ready(function() {
  var height = parseInt(prompt("What is your height in inches"));

  if (height <= 48) {
    $(".kid").addClass("highlight");
    $(".all").addClass("highlight");
    $(".adult").addClass("opaque");
  } else {
    $(".adult").addClass("highlight");
    $(".all").addClass("highlight");
    $(".kid").addClass("opaque");
  }
});