var divElement;
function init(){
    console.log("DOM IS READY!");
    divElement = document.body.querySelector("#mariodiv");
}

var currImage = 0;
var leftPos = 0;

function animateMario(){

    drawMario(currImage);
    //next time show the next sub image
    currImage = (currImage+1)%3;
    leftPos+=5;
    if(leftPos>=100)
    {leftPos=0;}

}

function drawMario(indexImage){

 divElement.style.marginLeft = leftPos+"px";
 divElement.style.width = "22px";
 divElement.style.height = "32px";
 divElement.innerHTML = "";

 divElement.style.backgroundColor = "transparent";
 divElement.style.backgroundImage = "url(https://mainline.i3s.unice.fr/mooc/marioSprite.png)";
 // select the starting pos in the background image
 var offset = indexImage * 24;
 divElement.style.backgroundPosition = offset+"px";
}


/*
TRACKING MOUSE POSITION::  

canvas.addEventListener('mousemove', function (evt) {
        mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        writeMessage(canvas, message);
    }, false);

    canvas.addEventListener('mousedown', function (evt) {
        mouseButton = evt.button;
        var message = "Mouse down button " + evt.button + " down at position: " + mousePos.x + ',' + mousePos.y;
        writeMessage(canvas, message);
    }, false);

    canvas.addEventListener('mouseup', function (evt) {
        var message = "Mouse up at position: " + mousePos.x + ',' + mousePos.y;
        writeMessage(canvas, message);
    }, false);
};



function writeMessage(canvas, message) {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '18pt Calibri';
    ctx.fillStyle = 'black';
    ctx.fillText(message, 10, 25);
    ctx.restore();
}

function getMousePos(canvas, evt) {
    // necessary to take into account CSS boudaries
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}


*/

/*
PAINTING ON FLY::

var canvas, ctx, painting = false, previousMousePos;

function getMousePos(canvas, evt) {
  // necessary to take into account CSS boudaries
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function drawLineImmediate(x1, y1, x2, y2) {
  // a line is a path with a single draw order
  // we need to do that in this example otherwise
  // at each mouse event we would draw the whole path
  // since the beginning. Remember that lines
  // normally are only usable in path mode
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function handleMouseMove(evt) {
  var mousePos = getMousePos(canvas, evt);

  // Let's draw some lines that follow the mouse pos
  if (painting) {
    drawLineImmediate(previousMousePos.x, previousMousePos.y,
                      mousePos.x, mousePos.y);

    previousMousePos = mousePos;
  }
}

function clicked(evt) {
  previousMousePos = getMousePos(canvas, evt);
  painting = true;
}

function released(evt) {
  painting = false;
}

window.onload = function () {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  painting = false;

  canvas.addEventListener('mousemove', handleMouseMove, false);
  canvas.addEventListener('mousedown', clicked);
  canvas.addEventListener('mouseup', released);
};

*/

/*

MOVING MONSTER::
var canvas, ctx;
   var monsterX=100, monsterY=100, monsterAngle=0;
   var incrementX = 0;
  
   function init() {
     // This function is called after the page is loaded
     // 1 - Get the canvas
     canvas = document.getElementById('myCanvas');
     // 2 - Get the context
     ctx=canvas.getContext('2d');
     // 3 add key listeners to the window element
     window.addEventListener('keydown', handleKeydown, false);
     window.addEventListener('keyup', handleKeyup, false);
     
     // 4 - start the animation
     requestId = requestAnimationFrame(animationLoop);
   }
   
  function handleKeydown(evt) {
     if (evt.keyCode === 37) {
        //left key 
       incrementX = -1;
     } else if (evt.keyCode === 39) {
        // right key
       incrementX = 1;
     } 
  }
  function handleKeyup(evt) {
    incrementX = 0;
  }
  
  
   function animationLoop() {
      // 1 - Clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 2 Draw
      drawMonster(monsterX, monsterY, monsterAngle, 'green', 'yellow');

      // 3 Move
      monsterX += incrementX;

      // call again mainloop after 16.6 ms (60 frames/s)
      requestId = requestAnimationFrame(animationLoop);
 }   
   function drawMonster(x, y, angle, headColor, eyeColor) {   
     // GOOD PRACTICE : SAVE CONTEXT AND RESTORE IT AT THE END
     ctx.save();
     
     // Moves the coordinate system so that the monster is drawn
     // at position (x, y)
     ctx.translate(x, y);
     ctx.rotate(angle)
     
     // head
     ctx.fillStyle=headColor;
     ctx.fillRect(0,0,200,200);
     
     // eyes
     ctx.fillStyle='red';
     ctx.fillRect(35,30,20,20);
     ctx.fillRect(140,30,20,20);
     
     // interior of eye
     ctx.fillStyle=eyeColor;
     ctx.fillRect(43,37,10,10);
     ctx.fillRect(143,37,10,10);
     
     // Nose
     ctx.fillStyle='black';
     ctx.fillRect(90,70,20,80);
     
     // Mouth
     ctx.fillStyle='purple';
     ctx.fillRect(60,165,80,20);
     
     // GOOD PRACTICE !
     ctx.restore();
   }
        
function start() {
   // Start the animation loop, targets 60 frames/s
   requestId = requestAnimationFrame(animationLoop);
 }
 function stop() {
   if (requestId) {
      cancelAnimationFrame(requestId);
   }
 }*/

 /*

 CURRENT LOCATION ::
 
 function init() {
    // Default position
    var centerpos = new google.maps.LatLng(48.579400,7.7519);

    // default options for the google map
    var optionsGmaps = {
      center:centerpos,
      navigationControlOptions: {
        style: google.maps.NavigationControlStyle.SMALL
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 15
    };

    // Init map object
    var map = new google.maps.Map(document.getElementById("map"), optionsGmaps);

      // callback function, called by getCurrentPosition() in case of success
      function success(position) {

        var infopos = "Got position : <br>";
        infopos += "Latitude : "+position.coords.latitude +"<br>";
        infopos += "Longitude: "+position.coords.longitude+"<br>";
        infopos += "Altitude : "+position.coords.altitude +"<br>";
        document.getElementById("myposition").innerHTML = infopos;

        // Make new object LatLng for Google Maps
        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        // Add a marker at position
        var marker = new google.maps.Marker({
          position: latlng,
          map: map,
          title:"You are here"
        });

          // center map on longitude and latitude
        map.panTo(latlng);
      }

      // callback function, called by getCurrentPosition() in case of error
      function error(error) {
        var info = "Error during geolocation : ";
        switch(error.code) {
        case error.TIMEOUT:
          info += "Timeout !";
        break;
        case error.PERMISSION_DENIED:
          info += "You did not access to the geolocation API";
        break;
        case error.POSITION_UNAVAILABLE:
          info += "Position could not be determined";
        break;
        case error.UNKNOWN_ERROR:
          info += "Unknown error";
        break;
        }
        document.getElementById("myposition").innerHTML = info;
      }
  
      // Ask browser for the current position
      // success and error are callbacks functions
      navigator.geolocation.getCurrentPosition(success, error);
    } */