document.addEventListener("DOMContentLoaded", () => {
    // Retrieve and display metadata
    chrome.storage.local.get(null, (data) => {
      const output = document.getElementById("metadataOutput");
      output.textContent = JSON.stringify(data, null, 2); // Pretty print the metadata
    });
  
    // Navigate back to the main page
    document.getElementById("backToMain").addEventListener("click", () => {
      window.location.href = chrome.runtime.getURL("popup.html");
    });
  });
  