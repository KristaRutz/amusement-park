$(document).ready(function() {
  var height = parseInt(prompt("What is your height in inches"));

  if (height) {
    if (height <= 48) {
      $(".kid").addClass("highlight");
      $(".all").addClass("highlight");
      $(".adult").addClass("opaque");
    } else {
      $(".adult").addClass("highlight");
      $(".all").addClass("highlight");
      $(".kid").addClass("opaque");
    }
  }


  $("form").submit(function(event) {
    var starbucks = parseInt($("input:radio[name=starbucks]:checked").val());
    var plans = parseInt($("input:radio[name=plans]:checked").val());
    var icecream = parseInt($("input:radio[name=icecream]:checked").val());
    var ridetype = parseInt($("input:radio[name=ridetype]:checked").val());

    if (starbucks && plans && icecream && ridetype) {
      var resultNum = Math.round((starbucks + plans + icecream + ridetype) / 4) ;
      
      if (resultNum === 1) {
        $(".carousel").show();
      } else if (resultNum === 2) {
        $(".waterslide").show();
      } else if (resultNum === 3) {
        $(".rollercoaster").show();
      }

    } else {
        if (starbucks) {
          $("div.starbucks").addClass("has-success");
        } else {
          $("div.starbucks").addClass("has-error");
          $("div.starbucks").append('<label class="radio">Please select an option</label>');
        }
        if (plans) {
          $("div.plans").addClass("has-success");
        } else {
          $("div.plans").addClass("has-error");
          $("div.plans").append('<label class="radio">Please select an option</label>');
        }
        if (icecream) {
          $("div.icecream").addClass("has-success");
        } else {
          $("div.icecream").addClass("has-error");
          $("div.icecream").append('<label class="radio">Please select an option</label>');
        }
        if (ridetype) {
          $("div.ridetype").addClass("has-success");
        } else {
          $("div.ridetype").addClass("has-error");
          $("div.ridetype").append('<label class="radio">Please select an option</label>');
        }
    }



    event.preventDefault();
  });

});