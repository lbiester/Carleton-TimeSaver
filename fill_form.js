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
    dictionary = {}; // find stuff
    for (var i = 1; i <= 28; i++) {
        var start_time = "LIST_VAR4_" + i;
        var end_time = "LIST_VAR5_" + i;
        dictionary[start_time] = document.getElementById(start_time).value;
        dictionary[end_time] = document.getElementById(end_time).value;
    }
    chrome.storage.sync.set(dictionary);
}

function loadTimes() {
    chrome.storage.sync.get(function(items) {
        for (var key in items) {
            if (items.hasOwnProperty(key) && document.getElementById(key) !== null) {
                document.getElementById(key).value = items[key];
            }
        }
    });
}
