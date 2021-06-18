// Function to toggle what we do icons with
// their details
function toggleDetail() {
    $("img", this).toggle();
    $(".detail", this).toggle();
}


$("document").ready(function() {
    $("#what-we-do .col-md-4").click(toggleDetail);

    // Target mouseenter and mouseleave on portfolio
    $(".portfolio .col-md-3").mouseenter(function () {
        let projectStr = $('img',this).attr('src');
        let projectName = projectStr.split('/').pop().split('.').shift();
        $(this).append('<div class="layer">'+ projectName + '</div>');
    });

    $(".portfolio .col-md-3").mouseleave(function () {
      $(".layer",this).remove();
    });
})