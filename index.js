    

    $(window).on('load', function() {
        $('.render-blk').stop(true, true).animate({ opacity: 1 }, 1000);
        setTimeout(function() {
            $('.load-wraper').stop(true, true).animate({ opacity: 0 }, 1000);
        },500)
        setTimeout(function() {
            $('.load-wraper').hide();
        },1000)
        if (sessionStorage.getItem('loader') == null) {
            sessionStorage.setItem('loader', 'true');
        }
    });
    $('svg,.target-palce').on('mousemove',function(e){
        $('.a').attr('cx',e.pageX).attr('cy',e.pageY)
    });
    $('.banner-elements.model svg,.target-palce').on('click', function() {
        $('.fade-text').fadeOut();
        $('.banner-elements.model svg').css('opacity',0);
        $('.banner-elements.model .light-model').css('opacity',1);
        setTimeout(function(argument) {
            $('.one').css('opacity',1);
            $('.desk-banner-blk').addClass('active');
            $('.banner-elements.model,.banner-elements.logo,.banner-elements.frame,.banner-elements.jewellery,.fadein-text').addClass('active');
        }, 100)
        setTimeout(function(argument) {
            $('#clip').hide();
            $('body,html').removeClass('flow');
        }, 4000)
    })
    $('.mob-banner-blk').on('click', function() {
        $('.fade-text').fadeOut();
        $(this).addClass('active');
        $('body,html').removeClass('flow');
    });
    $('.play-games').on('click', function() {
        $('.draw-content').hide();
        $('.draw-count-content').fadeIn();
        var count = 3;
        var counting = setInterval(function() {
            console.log(count);
            var text = count != 0 ? count : "Go";
            $('.num-count').text(text);
            count-- || (clearInterval(counting),$('.draw-count-content, .image-set-logo').fadeOut(1000),$('.canvas-blk, .canvas-blk .circle').fadeIn(1000));
            // var text = (count1 == 0) ? 'Go': count1;
        }, 1000)
    });



// function touchHandler(e) {
//     "use strict";

//     var el = e.target;

//     if (el.parentNode.id === "sl-m") {
//         if (e.type === "touchstart") {
//             touch.startX = e.changedTouches[0].screenX;
//             touch.startY = e.changedTouches[0].screenY;
//         } else {
//             touch.endX = e.changedTouches[0].screenX;
//             touch.endY = e.changedTouches[0].screenY;

//             touch.lenX = Math.abs(touch.endX - touch.startX);
//             touch.lenY = Math.abs(touch.endY - touch.startY);

//             if (touch.lenY < 20) {
//                 // disable scroll
//                 document.body.style.overflowY = "hidden";

//                 // do swipe related stuff
//                 swipe(el.parentNode);
//             } else {
//                 // enable scroll if swipe was not intended
//                 document.body.style.overflowY = "scroll";
//             }
//         }
//     } else {
//         // keep scroll enabled if touch is outside the image slider 
//         document.body.style.overflowY = "scroll";
//     }
// }
            
//             // Get a regular interval for drawing to the screen
//             window.requestAnimFrame = (function (callback) {
//                 return window.requestAnimationFrame || 
//                             window.webkitRequestAnimationFrame ||
//                             window.mozRequestAnimationFrame ||
//                             window.oRequestAnimationFrame ||
//                             window.msRequestAnimaitonFrame ||
//                             function (callback) {
//                                 window.setTimeout(callback, 1000/60);
//                             };
//             })();

//             // Set up the canvas
//             var canvas = document.getElementById("sig-canvas");
//             var ctx = canvas.getContext("2d");
//             ctx.strokeStyle = "#fff";
//             ctx.lineWidth = 10;

//             // Set up the UI
//             // var sigText = document.getElementById("sig-dataUrl");
//             // var sigImage = document.getElementById("sig-image");
//             // var clearBtn = document.getElementById("sig-clearBtn");
//             // var submitBtn = document.getElementById("sig-submitBtn");
//             // clearBtn.addEventListener("click", function (e) {
//             //     clearCanvas();
//             //     sigText.innerHTML = "Data URL for your signature will go here!";
//             //     sigImage.setAttribute("src", "");
//             // }, false);
//             // submitBtn.addEventListener("click", function (e) {
//             //     var dataUrl = canvas.toDataURL();
//             //     sigText.innerHTML = dataUrl;
//             //     sigImage.setAttribute("src", dataUrl);
//             // }, false);

//             // Set up mouse events for drawing
//             var drawing = false;
//             var mousePos = { x:0, y:0 };
//             var lastPos = mousePos;
//             canvas.addEventListener("mousedown", function (e) {
//                 drawing = true;
//                 lastPos = getMousePos(canvas, e);
//             }, false);
//             canvas.addEventListener("mouseup", function (e) {
//                 drawing = false;
//             }, false);
//             canvas.addEventListener("mousemove", function (e) {
//                 mousePos = getMousePos(canvas, e);
//             }, false);

//             // Set up touch events for mobile, etc
//             canvas.addEventListener("touchstart", function (e) {
//                 mousePos = getTouchPos(canvas, e);
//                 var touch = e.touches[0];
//                 var mouseEvent = new MouseEvent("mousedown", {
//                     clientX: touch.clientX,
//                     clientY: touch.clientY
//                 });
//                 canvas.dispatchEvent(mouseEvent);
//             }, false);
//             canvas.addEventListener("touchend", function (e) {
//                 var mouseEvent = new MouseEvent("mouseup", {});
//                 canvas.dispatchEvent(mouseEvent);
//             }, false);
//             canvas.addEventListener("touchmove", function (e) {
//                 var touch = e.touches[0];
//                 var mouseEvent = new MouseEvent("mousemove", {
//                     clientX: touch.clientX,
//                     clientY: touch.clientY
//                 });
//                 canvas.dispatchEvent(mouseEvent);
//             }, false);

//             // Prevent scrolling when touching the canvas
//             document.body.addEventListener("touchstart", function (e) {
//                 if (e.target == canvas) {
//                     e.preventDefault();
//                 }
//             }, false);
//             document.body.addEventListener("touchend", function (e) {
//                 if (e.target == canvas) {
//                     e.preventDefault();
//                 }
//             }, false);
//             document.body.addEventListener("touchmove", function (e) {
//                 if (e.target == canvas) {
//                     e.preventDefault();
//                 }
//             }, false);

//             // Get the position of the mouse relative to the canvas
//             function getMousePos(canvasDom, mouseEvent) {
//                 var rect = canvasDom.getBoundingClientRect();
//                 return {
//                     x: mouseEvent.clientX - rect.left,
//                     y: mouseEvent.clientY - rect.top
//                 };
//             }

//             // Get the position of a touch relative to the canvas
//             function getTouchPos(canvasDom, touchEvent) {
//                 var rect = canvasDom.getBoundingClientRect();
//                 return {
//                     x: touchEvent.touches[0].clientX - rect.left,
//                     y: touchEvent.touches[0].clientY - rect.top
//                 };
//             }

//             // Draw to the canvas
//             function renderCanvas() {
//                 if (drawing) {
//                     ctx.moveTo(lastPos.x, lastPos.y);
//                     ctx.lineTo(mousePos.x, mousePos.y);
//                     ctx.stroke();
//                     lastPos = mousePos;
//                 }
//             }

//             // Clear the canvas
//             function clearCanvas() {
//                 canvas.width = canvas.width;
//             }

//             // Allow for animation
//             (function drawLoop () {
//                 requestAnimFrame(drawLoop);
//                 renderCanvas();
//             })();

//         // })();




var canvas = document.getElementById("sig-canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#222222";
ctx.lineWith = 2;


var drawing = false;
var mousePos = { x:0, y:0 };
var lastPos = mousePos;
canvas.addEventListener("mousedown", function (e) {
        drawing = true;
  lastPos = getMousePos(canvas, e);
}, false);
canvas.addEventListener("mouseup", function (e) {
  drawing = false;
}, false);
canvas.addEventListener("mousemove", function (e) {
  mousePos = getMousePos(canvas, e);
}, false);

// Get the position of the mouse relative to the canvas
function getMousePos(canvasDom, mouseEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: mouseEvent.clientX - rect.left,
    y: mouseEvent.clientY - rect.top
  };
}



// Get a regular interval for drawing to the screen
window.requestAnimFrame = (function (callback) {
        return window.requestAnimationFrame || 
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           window.oRequestAnimationFrame ||
           window.msRequestAnimaitonFrame ||
           function (callback) {
        window.setTimeout(callback, 1000/60);
           };
})();


// Draw to the canvas
function renderCanvas() {
  if (drawing) {
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
    lastPos = mousePos;
  }
}

// Allow for animation
(function drawLoop () {
  requestAnimFrame(drawLoop);
  renderCanvas();
})();


// Set up touch events for mobile, etc
canvas.addEventListener("touchstart", function (e) {
        mousePos = getTouchPos(canvas, e);
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousedown", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchend", function (e) {
  var mouseEvent = new MouseEvent("mouseup", {});
  canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchmove", function (e) {
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);

// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: touchEvent.touches[0].clientX - rect.left,
    y: touchEvent.touches[0].clientY - rect.top
  };
}


document.body.addEventListener("touchstart", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchend", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchmove", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);

function clearCanvas() {
    canvas.width = canvas.width;
}