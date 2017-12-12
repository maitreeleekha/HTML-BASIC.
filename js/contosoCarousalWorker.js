var slideInterval =  3500;
function getFigures(){
  
var carouselSection = document.getElementById("carousel");
var carouselFigArray=carouselSection.getElementsByTagName("figure");

/*console.log(carouselSection.getElementsByTagName("figure").length);*/
return carouselFigArray;
}

function moveForward(){
var figures = getFigures();
for(var i=0;(i%(figures.length))<figures.length ; i++)
{
if(figures[i%(figures.length)].className=='visible')
{
    figures[i%(figures.length)].className='';  
    figures[(i+1)%(figures.length)].className='visible';
    /*postMessage("new visible state i value: ", (i+1)%(figures.length));*/
    setTimeout(moveForward,slideInterval);
}
}
}

moveForward();