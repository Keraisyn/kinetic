/* Background images */
function background() {
  var backgroundImages = [
    "/backgrounds/background_01.jpeg",
    "/backgrounds/background_02.jpeg",
    "/backgrounds/background_03.jpeg",
    "/backgrounds/background_04.jpeg",
    "/backgrounds/background_05.jpeg",
    "/backgrounds/background_06.jpeg",
    "/backgrounds/background_07.jpeg"
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

function closeCalendar(e) {
  if (e.target === this) {
    this.style.display = "none";
  }
}

// Settings Button
function linksModal() {
  document.getElementById("linksmodal").style.display = "block";
}

function closeLinks(e) {
  if (e.target === this) {
    this.style.display = "none";
  }
}

/* Main */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calendicon").addEventListener("click", calendar);
  document.getElementById("linksicon").addEventListener("click", linksModal);
  document.getElementById("calendmodal").addEventListener("click", closeCalendar);
  document.getElementById("linksmodal").addEventListener("click", closeLinks);
  background();
  clock();
  
});
