
$("document").ready(function() {

    // Toggle what-we-do icon with the details
    $("#what-we-do .col-md-4").click(function() {
        $("img", this).toggle();
        $(".detail", this).toggle();
    });

    // Target mouseenter and mouseleave on portfolio items
    $(".portfolio .col-md-3").mouseenter(function () {
        let projectStr = $('img',this).attr('src');
        let projectName = projectStr.split('/').pop().split('.').shift();
        $(this).append('<div class="layer">'+ projectName + '</div>');
    });
    $(".portfolio .col-md-3").mouseleave(function () {
      $(".layer",this).remove();
    });

    // When submit button is clicked    
    $("form").submit(function(e) {
        e.preventDefault();
        // Collect form data
        let name = $("#name").val(), email = $("#email").val(), message = $("#message").val();
        if (name ==='' || email === '' || message === '') {
          alert("Kindly fill in all fields and submit");
        } else {
          showDialog(name);

        }
       
    })
})

// Function to append and remove custom dialogue box
function showDialog(name) {
  $(".contact-us .alert").append(`
    <h5 class="submit-alert">Thank you ${name} for contacting us. We appreciate your feedback.<br/> 
    <button class="btn btn-outline-light mt-2 px-5">OK</button> 
    </h5>`
  )
    .ready(function () {
      // Clear the form fields
      $(".contact-us button").click(function () {
        
        $(".submit-alert").remove();
        location.reload();

      });
    });
}