
$("document").ready(function() {

    // Toggle what-we-do icon with the detail
    $("#what-we-do .col-md-4").click(function() {
        $("img", this).toggle();
        $(".detail", this).toggle();
        console;
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

    // Collect form data
    $("form").submit(function(e) {
        e.preventDefault();
        let data = {}
        $("form .form-control").each(function() {
            data[this.name] = $(this).val();
        })

        if (data['name'] === '' || data['email'] === '') {
            alert("Please fill in the details and submit");
            return
        }

        // alert(`Thank you ${data.name} for reaching out. We appreciate your feedback.`);
        $(".contact-us .alert").append(`
            <h5 class="submit-alert">Thank you ${data.name} for contacting us. We appreciate your feedback.<br/> 
            <button class="btn btn-outline-light mt-2 px-5">OK</button> 
            </h5>
        `).ready(function() {
            $(".contact-us button").click(function() {
                $(".submit-alert").remove();
            })
        })

    })
})