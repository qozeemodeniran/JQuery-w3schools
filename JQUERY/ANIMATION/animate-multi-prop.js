$(document).ready(function()
{
    $("button").click(function()
    {
        $("div").animate(
            {
                 left: '250px',
                 opacity: '0.5',
                 height: '+=100px',
                 width: '+=100px'
            }
        );
    });
});