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

    
    //Preload all images in the slideShow
    var preLoadImages = ["/src/images/januaryStone.jpg",
                                        "/src/images/februaryStone.jpg",
                                        "/src/images/marchStone.jpg",
                                        "/src/images/aprilStone.jpg",
                                        "/src/images/mayStone.jpg",
                                        "/src/images/juneStone.jpg",
                                        "/src/images/julyStone.jpg",
                                        "/src/images/augustStone.jpg",
                                        "/src/images/septemberStone.jpg",
                                        "/src/images/octoberStone.jpg",
                                        "/src/images/novemberStone.jpg",
                                        "/src/images/decemberStone.jpg"
                                        ];
                                        
                                
    var imgs=[];
    for(var i = 0; i<preLoadImages.length; i++)
    {
        imgs[i]=new Image();//creating image objects in cache
        imgs[i].src=preLoadImages[i];
        console.log(imgs[i]);
    }
    
    $("#slideShow a").click(function(evt){
        evt.preventDefault();//stop the link to perform its normal function
        var imgPath=$(this).attr("href");
        console.log(imgPath);
        var oldImage=$("#photo img");
        var newImage=$('img src="'+ imgPath+'">');
        console.log(oldImage);
        console.log(newImage);
        /*
        debugger;
        newImage.hide();
        $("#photo").prepend('<img src="/src/images/Dematoid.JPG"');
        newImage.fadeIn(1000);
        oldImage.fadeOut(1000, function(){
            $(this).remove();
        });//fadeOut ends here*/
    });//click ends here
    $("#slideShow a:first").click();



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
