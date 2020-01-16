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

    $("div.starbucks").removeClass("has-error");
    $("div.plans").removeClass("has-error");
    $("div.icecream").removeClass("has-error");
    $("div.ridetype").removeClass("has-error");
    $(".errorMessage").remove();

    if (starbucks && plans && icecream && ridetype) {

      $("div.starbucks").removeClass("has-success");
      $("div.plans").removeClass("has-success");
      $("div.icecream").removeClass("has-success");
      $("div.ridetype").removeClass("has-success");

      var resultNum = Math.round((starbucks + plans + icecream + ridetype) / 4) ;
      
      if (resultNum === 1) {
        $(".carousel").show();
        $(".waterslide").hide();
        $(".rollercoaster").hide();
      } else if (resultNum === 2) {
        $(".waterslide").show();
        $(".carousel").hide();
        $(".rollercoaster").hide();
      } else if (resultNum === 3) {
        $(".rollercoaster").show();
        $(".waterslide").hide();
        $(".carousel").hide();
      }

    } else {
        if (starbucks) {
          $("div.starbucks").addClass("has-success");
        } else {
          $("div.starbucks").addClass("has-error");
          $("div.starbucks").append('<label class="radio errorMessage">Please select an option</label>');
        }
        if (plans) {
          $("div.plans").addClass("has-success");
        } else {
          $("div.plans").addClass("has-error");
          $("div.plans").append('<label class="radio errorMessage">Please select an option</label>');
        }
        if (icecream) {
          $("div.icecream").addClass("has-success");
        } else {
          $("div.icecream").addClass("has-error");
          $("div.icecream").append('<label class="radio errorMessage">Please select an option</label>');
        }
        if (ridetype) {
          $("div.ridetype").addClass("has-success");
        } else {
          $("div.ridetype").addClass("has-error");
          $("div.ridetype").append('<label class="radio errorMessage">Please select an option</label>');
        }
    }



    event.preventDefault();
  });

});