chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "load_times") {
        loadTimes();
    } else if (request.message === "save_times") {
        saveTimes();
    }
  }
);

function saveTimes() {
    console.log("saving times...");
    dictionary = {}; // find stuff
    for (var i = 1; i <= 28; i++) {
        console.log(document.getElementById("LIST_VAR4_" + i));
        console.log(document.getElementById("LIST_VAR5_" + i));
    }
    chrome.storage.sync.set(dictionary);
}

function loadTimes() {
    console.log("loading times...");
    chrome.storage.sync.get(function(items) {
        console.log(items);
    });
}
