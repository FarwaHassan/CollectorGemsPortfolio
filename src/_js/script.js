window.onload=function(){
    const hamburgerButton =document.getElementById("hamburger");
    const navList=document.getElementById("nav-list");
    
    function toggleButton(){
        navList.classList.toggle("show");
    }
           hamburgerButton.addEventListener("click",toggleButton);    
}
function listOfStones()
{
    var stones=["Emerald","Ruby","Sapphire","Opal","Tourmaline","Garnet","Topaz","Spinel","Amber","Amethyst","Citrine","Sphene","Chalcedony","Diamond"];
        for (var i=0;i <stones.length;i++)

        {
    document.write(stones[i]+"  //");
        }
    }
    function myBirthStone()
    {
        var birthMonth=prompt("What is your Birth Month?","");
        return birthMonth;
    }
    
    function birthStones(birthMonth)
    {
        const stoneByMonth=[
            ["January","Garnet"],
            ["February","Amethyst"],
            ["March","Aquamarine"],
            ["April","Diamond"],
            ["May","Emerald"],
            ["June","Pearl"],
            ["July","Ruby"],
            ["August","Peridot"],
            ["September","Sapphire"],
            ["October","Opal"],
            ["November","Topaz"],
            ["December","Turquoise"]
        ];

        for (var i=0; i<stoneByMonth.length;i++)
        {
            //document.write("<br>"+"BirthStone for the month of "+stoneByMonth[i][0]+"  is "+stoneByMonth[i][1]+"</br>");
            if(stoneByMonth[i][0]==birthMonth)
            return stoneByMonth[i][1];
        }
       return alert("Incorrect Month Entered");

    }
    function crystalStructures()
    {
        const crystalStructures=[
            ["Cubic"],
            ["Tetragonal"],
            ["Hexagonal"],
            ["Trigonal"],
            ["Orthorhombic"],
            ["Monoclinic"],
            ["Triclinic"],
            ["Amorphous"]
        ] ;
        for (var i=0; i<crystalStructures.length;i++)
        {
            document.write("<br>"+crystalStructures[i]+"</br>");
        }    
    }
    function imageGallery()
    {
        let myImage=document.querySelector("img");
        myImage.onclick=function()
        {
            let mySrc=myImage.getAttribute("src");
            if(mySrc==="src/images/CollectorGemsLogo.png")
            {
                myImage.setAttribute("src","src/images/CollectorGems.png");
            }
            else
            {
                myImage.setAttribute("src","src/images/CollectorGemsLogo.png");
            }
        }
    }
