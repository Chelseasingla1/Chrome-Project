document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("linksFiles", (data) => {
      const linksFiles = data.linksFiles || [];
      const list = document.getElementById("linksFilesList");
  
      linksFiles.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name}: ${item.link}`;
        list.appendChild(li);
      });
    });
  
    document.getElementById("backToMain").addEventListener("click", () => {
      window.location.href = chrome.runtime.getURL("popup.html");
    });
  });
  