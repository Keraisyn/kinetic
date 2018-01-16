(function () {
  chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({url: "launch.html"});
  });
})();