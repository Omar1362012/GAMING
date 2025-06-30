var menueicon =  document.getElementById("menue");
var list = document.getElementById("list");
var menuestatus;
menuestatus = "closed";



menueicon.onclick = function(){
    if(menuestatus == "closed"){
        menueicon.src="close.png";
        list.style.display = "block";  
        menuestatus = "open";
    } else{
            menueicon.src="menue.png";
            list.style.display = "none";
            menuestatus = "closed";
    }
      
};






window.onscroll = function(){
    menueicon.src="menue.png";
    list.style.display = "none";
    menuestatus = "closed";
    
    if(window.pageYOffset>0){
        
    leftArrow.style.display = "none";
    rightArrow.style.display = "none";
        
    }else{
    leftArrow.style.display = "block";
    rightArrow.style.display = "block";
    }
    
}





console.log(window.pageYOffset);






var leftArrow = document.getElementById("left");
var rightArrow = document.getElementById("right");
var slider = document.getElementById("maincontent");
var images = ["gamingbg1.png", "gamingbg2.png", "gamingbg4.jpg"];
var i;
i = 0;
slider.style.backgroundImage = "url("+images[i]+")";
leftArrow.onclick = function() {
    if(i>0){
        slider.style.backgroundImage = "url("+images[i-1]+")";
        i = i - 1;
    }
}
rightArrow.onclick = function() {
    if(i<images.length-1){
        slider.style.backgroundImage = "url("+images[i+1]+")";
        i = i + 1;
    }
}














