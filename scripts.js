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
    
  var random = Math.floor(Math.random() * backgroundImages.length);
  
  image = "url(" + backgroundImages[random] + ")";
  document.body.style.backgroundImage = image;
}

/* Calendar button */
function calendar() {
  document.getElementById("calendmodal").style.display = "block";
}

/* Links button */
function links() {
  alert("i am a lINks");
}

/* Calendar Modal */
function calendarModal() {
  document.getElementById("calendmodal").style.display = "none";
}

/* Close button */
function close() {
  document.getElementById("calendmodal").style.display = "none";
}

/* Main */
document.addEventListener("DOMContentLoaded", function () {
  background();
  document.getElementById("calendicon").addEventListener("click", calendar);
  document.getElementById("linksicon").addEventListener("click", links);
  document.getElementById("calendmodal").addEventListener("click", calendarModal);
});