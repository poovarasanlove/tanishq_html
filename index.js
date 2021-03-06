    

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
        $('.end-layout').removeClass('active');
        $('.canvas-blk img').removeClass('active done');
        $('.draw-content').hide();
        $('.draw-count-content').fadeIn();
        var count = 3;
        var counting = setInterval(function() {
            var text = count != 0 ? count : "Go";
            $('.num-count').text(text);
            count-- || (clearInterval(counting),$('.draw-count-content, .image-set-logo').fadeOut(1000),$('.canvas-blk, .canvas-blk .circle').fadeIn(1000),$('.canvas-blk, .canvas-blk .circle').addClass('active'),$('#sig-canvas').addClass('circle-draw'));
            // var text = (count1 == 0) ? 'Go': count1;
        }, 1000)
    });
    $('#sig-canvas').on('touchend mousedown', function() {
        if ($(this).hasClass('circle-draw') && !$(this).hasClass('disabel-circle')){
            circle();
            $(this).addClass('disabel-circle');
        }else if ($(this).hasClass('square-draw') && !$(this).hasClass('disabel-square')){
            square();
            $(this).addClass('disabel-square');
        }else if ($(this).hasClass('hexa-draw') && !$(this).hasClass('disabel-hexa')){
            hexa();
            $(this).addClass('disabel-hexa');
        }

    });

function circle() {
    setTimeout(function () {
        $('.help-text').find('h4').html('Nice! </br> Try another shape?');
        $('.help-text').fadeIn();
    },6500)
    setTimeout(function () {
        clearCanvas();
        $('.help-text').fadeOut();
        if (!$('.canvas-blk .circle').hasClass('done')) {
            $('.canvas-blk .circle').addClass('done');
            $('.canvas-blk .square').addClass('active');
        }
        $('#sig-canvas').removeClass('circle-draw disabel-circle');
        $('#sig-canvas').addClass('square-draw');
    },8000)
};
function square() {
        setTimeout(function () {
            $('.help-text').find('h4').html('Oh we like that.<br/> Try another?');
            $('.help-text').fadeIn();
        },6500)
        setTimeout(function () {
            $('.help-text').fadeOut();
             if (!$('.canvas-blk .square').hasClass('done')) {
                $('.canvas-blk .square').addClass('done');
                $('.canvas-blk .hexagon').addClass('active');
            }
            $('#sig-canvas').removeClass('square-draw disabel-square');
            $('#sig-canvas').addClass('hexa-draw');
            clearCanvas();
        }, 8000);
}
function hexa() {
setTimeout(function () {
            $('.help-text').find('h4').html('Pretty! <br/>Want to see the jewellery<br/>inspired by your karigari?');
            $('.help-text').fadeIn();
        },6500)
setTimeout(function () {
        $('.help-text').fadeOut(0);
        if (!$('.canvas-blk .hexagon').hasClass('done')) {
            $('.canvas-blk .hexagon').addClass('done');
            $('.end-layout').addClass('active');
        }
        $('#sig-canvas').removeClass('hexa-draw disabel-hexa');
        clearCanvas();
    }, 10000);
}
   $(window).on('load', function() {
    var winwid = $(window).width();
    console.log(winwid);
    if (winwid < 1200) {
        $('#sig-canvas').attr('width', winwid);
        clearCanvas();
    }   
   });


var canvas = document.getElementById("sig-canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#fff";
ctx.lineWidth = 10;


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
// var body = document.getElementsByTagName("body");

window.addEventListener('touchmove', ev => {
  if (ev.target == canvas) {
    ev.preventDefault();
    ev.stopImmediatePropagation();
  };
}, { passive: false });

function clearCanvas() {
    canvas.width = canvas.width;
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 10;
}

        