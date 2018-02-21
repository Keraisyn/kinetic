(function () {
  chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({url: "/kinetic.html"});
  });
})();
// The purpose of this file is to open a new tab when clicking the extension icon