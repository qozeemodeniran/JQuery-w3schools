$(document).ready(function()
{
    $("#show").click(function()
    {
        $("pre").show("slow");
    });

    $("#hide").click(function()
    {
        $("pre").hide("slow");
    });

    $("#toggle").click(function()
    {
        $("p").toggle("slow");
    });
});