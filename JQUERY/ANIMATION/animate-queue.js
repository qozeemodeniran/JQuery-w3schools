$(document).ready(function()
{
    $("button").click(function()
    {
        var div = $("div");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
        div.animate({left: '200px'}, "slow");
        div.animate({width: '100%'}, "slow");
        div.animate({height: '500px', opacity: '1.0'}, "slow");
        div.animate({fontSize: '4em'}, "slow");
    });
});