var ocean = document.getElementById("ocean"),
  waveWidth = 10,
  waveCount = Math.floor(window.innerWidth / waveWidth),
  docFrag = document.createDocumentFragment();

for (var i = 0; i < waveCount; i++) {
  var wave = document.createElement("div");
  wave.className += " wave";
  docFrag.appendChild(wave);
  wave.style.left = i * waveWidth + "px";
  wave.style.webkitAnimationDelay = i / 100 + "s";
}

ocean.appendChild(docFrag);


(function() {
  function randomRainDropLocation() {
    return Math.floor(Math.random() * 1000);  
  }

  function startRain(plane) {
    plane = plane || '';
    
    setInterval(function(){
      var $rainDrop = $('<div class="sky__rain rain"></div>');
      
      if(plane) {
        $rainDrop.addClass('rain--' + plane);
      }
      
      $sky.append($rainDrop);
      $rainDrop.css('left', randomRainDropLocation() + '%');
      setTimeout(function(){
        $rainDrop.remove();
      }, 3000)
    }, 25);
  }
  
  var $sky = $('.js-object-sky');
  return {
    init: function init() {
      startRain();
      startRain('back');
    }
  }
}()).init();


var iframeElement   = document.querySelector('iframe');
var iframeElementID = iframeElement.id;
var widget1         = SC.Widget(iframeElement);
var widget2         = SC.Widget(iframeElementID);









