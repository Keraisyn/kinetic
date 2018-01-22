function save_options() {
  var textColor = document.getElementById("textColor").value;
  
  chrome.storage.sync.set({
    textColor: textColor
  }, function() {
    var status = document.getElementById("status");
    status.textContent = "Options saved.";
    setTimeout(function() {
      status.textContent = "";
    }, 750);
  });
}