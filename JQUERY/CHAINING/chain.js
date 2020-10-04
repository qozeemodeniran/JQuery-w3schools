$(document).ready(function()
{
    $("button").click(function()
    {
        $("p").css("color", "yellow")
        .slideUp("slow")
        .slideDown("slow");
    });
});