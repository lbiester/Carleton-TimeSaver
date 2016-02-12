// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "load_times"});
  });
});

chrome.contextMenus.removeAll();
chrome.contextMenus.create({
    title: "Save Times from Timesheet",
    contexts: ["browser_action"],
    onclick: function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "save_times"});
        });
    }
});

chrome.contextMenus.create({
    title: "Clear Saved Times",
    contexts: ["browser_action"],
    onclick: function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "clear_times"});
        });
    }
});

chrome.contextMenus.create({
    title: "Clear Timesheet Form",
    contexts: ["browser_action"],
    onclick: function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "clear_form"});
        });
    }
});
