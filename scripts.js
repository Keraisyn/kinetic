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

/* Calendar button */
function calendar(event) {
  document.getElementById("calendmodal").style.display = "block";
}

/* Links button */
function links() {
  alert("i am a lINks");
}

function optionsModal() {
  document.getElementById("optionsmodal").style.display = "none";
}

/* Settings Button */
function settingsModal() {
  document.getElementById("optionsmodal").style.display = "block";
}

function save_options() {
  var textColor = document.getElementById("textColor").value;
  chrome.storage.sync.set({
    textColor: textColor
  }, function () {
    var status = document.getElementById("status");
    status.textContent = "Options saved.";
    setTimeout(function () {
      status.textContent = "";
    }, 750);
  });
}
/* Main */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calendicon").addEventListener("click", calendar);
  document.getElementById("linksicon").addEventListener("click", links);
  document.getElementById("settingsicon").addEventListener("click", settingsModal);
  document.getElementById("save").addEventListener("click", save_options);
  document.getElementById("calendmodal").addEventListener("click", function(event){
    if (event.target !== this)
      return;
      document.getElementById("calendmodal").style.display = "none";
  });
  background();
  clock();
});
