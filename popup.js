document.addEventListener("DOMContentLoaded", () => {
    // Navigate to the Gmail Bookmarks page
    document.getElementById("viewGmailBookmarks").addEventListener("click", () => {
      window.location.href = chrome.runtime.getURL("bookmarks.html");
    });
  
    // Navigate to the Links/Files page
    document.getElementById("viewLinksFiles").addEventListener("click", () => {
      window.location.href = chrome.runtime.getURL("links_files.html");
    });
  
    // Navigate to the Reminders page
    document.getElementById("viewReminders").addEventListener("click", () => {
      window.location.href = chrome.runtime.getURL("reminders.html");
    });
  });
  