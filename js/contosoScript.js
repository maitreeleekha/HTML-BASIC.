var slideInterval =  3500;
function getFigures(){
  
var carouselSection = document.getElementById("carousel");
var carouselFigArray=carouselSection.getElementsByTagName("figure");

/*console.log(carouselSection.getElementsByTagName("figure").length);*/
return carouselFigArray;
}

function moveForward() {
    var pointer;
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == 'visible') {
            figures[i].className = '';
            pointer = i;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}
moveForward();
