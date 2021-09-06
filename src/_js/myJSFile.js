window.onload=function(){
    const hamburgerButton =document.getElementById("hamburger");
    const navList=document.getElementById("nav-list");
    
    function toggleButton(){
        navList.classList.toggle("show");
    }
           hamburgerButton.addEventListener("click",toggleButton);   
            
}

$(document).ready(function()
{
    //FAQs toggle effect
    $(".answer").hide();
    $(".faq h3").click(function(){
        var $answer=$(this).next(".answer");
        if($answer.is(":hidden"))
        {
             $answer.fadeIn();
             $(this).addClass("close");
        }
        else
        {
         $(this).next(".answer").fadeOut();
         $(this).removeClass("close");
        }
    });//FAQs toggle ends here

    //signup form slide down using bind() method in jquery
    $("#signup").bind({
        "mouseover": function(evt){
            evt.preventDefault();
        if($("#login").is(":hidden"))
        {
            $("#login").fadeIn(500);
            $(this).addClass("closeLoginForm");
         }
         else
         {
            $("#login").slideUp(800);
            $(this).removeClass("closeLoginForm");
            }
    },//mouseover function ends here  
        "click": function(){

        }//click function ends here
    });//bind ends here

    //Cart Absolute Positioning
    $("#openCart").click(function(evt){
        evt.preventDefault();
        if($("#shoppingCart").is(":hidden"))
        {
            $("#shoppingCart").fadeIn(500);
            $(this).addClass("closeShoppingCart");
         }
         else
         {
            $("#shoppingCart").slideUp(800);
            $(this).removeClass("closeShoppingCart");
            }
    });//cart ends here

});//ready ends here
