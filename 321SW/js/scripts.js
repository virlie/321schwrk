$(document).ready(function() {
  $("#name-form").submit(function(event) {
    var lettername = $("input#name-input").val();

    $(".name-input").text(lettername);

    $("#letter-show").show();

    event.preventDefault();
  });
});
