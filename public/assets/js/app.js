$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    // alert("submit button working");
    var newBurger = {
      name: $("#bg")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
  $("#eat").on("click", function(event) {
    {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");

      var newDevouredState = {
        devoured: newDevoured
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(function() {
        console.log("changed devoured state to", newDevouredState);
        // Reload the page to get the updated list
        location.reload();
      });
    }
  });
});
