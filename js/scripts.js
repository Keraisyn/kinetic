/*
 * Kinetic New Tab javascript file.
 * Version 0.8.6
 * Febuary 5th, 2018
 */

// Background images
function background() {
  var backgroundImages = [
    "/backgrounds/background_01.jpeg", // List of background images
    "/backgrounds/background_02.jpeg",
    "/backgrounds/background_03.jpeg",
    "/backgrounds/background_04.jpeg",
    "/backgrounds/background_05.jpeg",
    "/backgrounds/background_06.jpeg",
    "/backgrounds/background_07.jpeg",
    "/backgrounds/background_08.jpeg",
    "/backgrounds/background_09.jpeg"
  ];

  image = "url(" + backgroundImages[Math.floor(Math.random() * backgroundImages.length)] + ")"; // Pick a random background image

  document.body.style.backgroundImage = image; // Set the background image to the body
}

function clock() {
  var time = new Date(), // Find the time
    h = time.getHours(),
    m = time.getMinutes(),
    z = " am";

  if (h >= 12) {
    z = " pm"; // Change to pm if in the afternoon
  }

  if (h > 12) {
    h -= 12; // Change 24 hour time to 12 hour time
  }

  function checkTime(i) {
    if (i < 10) { i = "0" + i; }  // add zero in front of numbers < 10
    m = i;
  }

  checkTime(m);
  document.getElementById("clock").innerHTML = h + ":" + m + z; // Set the time to the clock
  var t = setTimeout(clock, 1000); // Check the time every 1000ms
}

// Close modal on click
function closeModal(e) {
  if (e.target === this) {
    this.style.display = "none"; // Close the modal if the user clicks outside of the modal content
  }
}

// Calendar button
function calendar() {
  document.getElementById("calendar-modal").style.display = "block";
}

// Stores the calendar url from the input box
function calendarSet() {
  var link = document.getElementById("calendar-link").value;

  if (!link) {
    alert("Error: No value specified");
    return;
  }

  chrome.storage.sync.set({ 'calendarlink': link }, function () {
    calendarGet();
  });
}

// Resets the calendar to SJAM
function calendarReset() {
  defaultValue = "https://calendar.google.com/calendar/embed?src=googleapps.wrdsb.ca_ptpdj55efmhg1nb89ruc15fi3k%40group.calendar.google.com&ctz=America%2FToronto";
  chrome.storage.sync.set({ 'calendarlink': defaultValue }, function () {
    calendarGet();
  });
}

// Syncs the calendar from the chrome storage API
function calendarGet() {
  defaultValue = "https://calendar.google.com/calendar/embed?src=googleapps.wrdsb.ca_ptpdj55efmhg1nb89ruc15fi3k%40group.calendar.google.com&ctz=America%2FToronto";
  chrome.storage.sync.get({ calendarlink: defaultValue }, function (data) {
    calendarlink = data.calendarlink;
    document.getElementById("calendar-modal__iframe").src = calendarlink;
  });
}

// Links Button
function openLinksModal() {
  document.getElementById("links-modal").style.display = "block";
}

function openTimetableModal() {
  document.getElementById("timetable-modal").style.display = "block";
}

function timetableSet() {
  value = this.innerHTML;
  chrome.storage.sync.set({ 'timetable': value });
}

function timetableGet() {
  defaultValue = "<tr><th>Time</th> <td contenteditable=False><input type=time>-<input type=time></td><td contenteditable=False><input type=time>-<input type=time></td><td contenteditable=False<input type=time>-<input type=time></td><td contenteditable=False><input type=time>-<input type=time></td><td contenteditable=False><input type=time>-<input type=time></td></tr><tr><th>Day 1</th><td>Period A</td><td>Period B</td><td>Lunch</td><td>Period D</td><td>Period E</td></tr><tr><th>Day 2</th><td>Period A</td><td>Period B</td><td>Lunch</td><td>Period E</td><td>Period D</td></tr>";
  chrome.storage.sync.get({ timetable: defaultValue }, function (data) {
    document.getElementById("timetable-modal__timetable").innerHTML = data.timetable;
  });
}

// Make an element draggable
function dragElement(elem) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  elem.onmousedown = mouseDown;

  function mouseDown(e) {
    e = e || window.event;
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = drag;
  }

  function drag(e) {
    e = e || window.event;
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onousemove = null;
  }
}

// Main
document.addEventListener("DOMContentLoaded", function () {
  background(); // Random background onload
  clock(); // Display the time
  calendarGet(); // Find the right calendar
  timetableGet(); // Sync the user's timetable

  document.getElementById("calendar-icon").addEventListener("click", calendar); // Open calendar modal onclick
  document.getElementById("calendar-modal").addEventListener("click", closeModal); // Close calendar modal onclick
  document.getElementById("submit").addEventListener("click", calendarSet); // Submit custom calendar link onclick
  document.getElementById("calendar-modal__default-calendar").addEventListener("click", calendarReset); // Reset SJAM calendar link onclick
  document.getElementById("links-icon").addEventListener("click", openLinksModal); // Open links modal onclick
  document.getElementById("links-modal").addEventListener("click", closeModal); // Close links modal onclick and disappear into the void
  document.getElementById("timetable-icon").addEventListener("click", openTimetableModal); // Open timetable modal onclick
  document.getElementById("timetable-modal").addEventListener("click", closeModal); // Close timetable modal onclick
  document.getElementById("timetable-modal__timetable").addEventListener("input", timetableSet); // Save timetable on edit
});