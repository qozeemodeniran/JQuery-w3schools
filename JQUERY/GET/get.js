$(document).ready(function()
{
    // Shows the text
    $("#text").click(function()
    {
        alert("TEXT: " + $("#test").text());
    });

    // SHows the html
    $("#html").click(function()
    {
        alert("HTML: " + $("#test").html());
    });

    // shows form input
    $("#name").click(function()
    {
        alert("Form Input: " + $("#myname").val());
    });

    // shows url
    $("#portfolio").click(function()
    {
        alert($("#myprofile").attr("href"));
    });
});