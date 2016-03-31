document.addEventListener("DOMContentLoaded", function() {
    // load times listener
    document.getElementById("load-times").addEventListener("click", function() {
        sendMessageAndClose("load_times");
    });

    // save times listener
    document.getElementById("save-times").addEventListener("click", function() {
        sendMessageAndClose("save_times");
    });

    // clear times listener
    document.getElementById("clear-times").addEventListener("click", function() {
        sendMessageAndClose("clear_times");
    });

    // clear form listener
    document.getElementById("clear-form").addEventListener("click", function() {
        sendMessageAndClose("clear_form");
    });
});

function sendMessageAndClose(message) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": message});
        window.close();
    });
}
