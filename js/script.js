// Function to toggle what we do icons with
// their details
function toggleDetail() {
    $("img", this).toggle();
    $(".detail", this).toggle();
}


$("document").ready(function() {
    $("#what-we-do .col-md-4").click(toggleDetail);
})