window.onload=function(){
    const hamburgerButton =document.getElementById("hamburger");
    const navList=document.getElementById("nav-list");
    
    function toggleButton(){
        navList.classList.toggle("show");
    }
           hamburgerButton.addEventListener("click",toggleButton);   
            
}
window.onload = function(){
    //slideShow using navigation buttons on the left and right    
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
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const totalImages = imgs.length;
let index = 0;

prev.addEventListener("click", () => {
  nextImage('next');
});

next.addEventListener("click", () => {
  nextImage('prev');
});

function nextImage(direction) {
    if (direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } 
  else {
    if(index == 0) {
      index = totalImages - 1;
    } 
    else {
      index--;
    }
  }

  for(let i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove('main');
    console.log(imgs[i]);
  }
  
  imgs[index].classList.add('main');
}//nextImage function ends here
}//onload ends here





$(document).ready(function()
{
    //slideShow of banner images using thumbnails on the left
    $("#slideShow a").click(function(evt){
        evt.preventDefault();//stop the link to perform its normal function
        var imgPath=$(this).attr("href");
        var oldImage=$("#photo img");
        var newImage=$('<img src="'+imgPath+'">');
        newImage.hide();
        $("#photo").prepend(newImage);
        newImage.fadeIn(1000);
        oldImage.fadeOut(1000, function(){
            $(this).remove();
        });//fadeOut ends here
        
    });//click ends here
    $("#slideShow a:first").click();//always load the first image in the slideShow


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
