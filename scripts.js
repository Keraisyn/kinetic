/* Background images */
function background() {
  var backgroundImages = [
    "/backgrounds/background_01.jpeg",
    "/backgrounds/background_02.jpeg",
    "/backgrounds/background_03.jpeg",
    "/backgrounds/background_04.jpeg",
    "/backgrounds/background_05.jpeg",
    "/backgrounds/background_06.jpeg",
    "/backgrounds/background_07.jpeg",
    "/backgrounds/background_08.jpeg",
    "/backgrounds/background_09.jpeg"
  ];
  
  image = "url(" + backgroundImages[Math.floor(Math.random() * backgroundImages.length)] + ")";
  
  document.body.style.backgroundImage = image;
}

function clock() {
  
  var time = new Date(),
    h = time.getHours(),
    m = time.getMinutes(),
    z = " am";
  
  if (h >= 12) {
    z = " pm";
  }
  
  if (h > 12) {
    h -= 12;
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i; }  // add zero in front of numbers < 10
    m = i;
  }

  checkTime(m);
  document.getElementById("clock").innerHTML = h + ":" + m + z;
  var t = setTimeout(clock, 500);
}

// Calendar button
function calendar() {
  document.getElementById("calendmodal").style.display = "block";
}
// Settings Button
function linksModal() {
  document.getElementById("linksmodal").style.display = "block";
}

function fadeOutEffect() {
    var fadeTarget = document.getElementById("hideAll");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity < 0.1) {
            clearInterval(fadeEffect);
        } else {
            fadeTarget.style.opacity -= 0.1;
        }
    }, 100);
    fadeTarget.style.display = "none";
}

/* Main */
document.addEventListener("DOMContentLoaded", function () {
  background();
  clock();
  fadeOutEffect();
  document.getElementById("calendicon").addEventListener("click", calendar);
  document.getElementById("linksicon").addEventListener("click", linksModal);
  document.getElementById("calendmodal").addEventListener("click", function(event){
    if (event.target !== this)
    return;
    this.style.display = "none";
  });
  document.getElementById("linksmodal").addEventListener("click", function(event){
    if (event.target !== this)
    return;
    this.style.display = "none";
  });
});
