document.addEventListener("DOMContentLoaded", () => {
    const bookmarkList = document.getElementById("bookmarkList");
    const noBookmarks = document.getElementById("noBookmarks");
    const addBookmark = document.getElementById("addBookmark");
  
    // Retrieve bookmarks from storage
    chrome.storage.local.get("gmailBookmarks", (data) => {
      const bookmarks = data.gmailBookmarks || [];
  
      if (bookmarks.length === 0) {
        // Show the "No bookmarks" message and the add button
        noBookmarks.style.display = "block";
      } else {
        // Display the list of bookmarks
        bookmarks.forEach((bookmark) => {
          const li = document.createElement("li");
          li.textContent = bookmark.title;
          li.dataset.id = bookmark.id;
  
          li.innerHTML = `
          <strong>${bookmark.title}</strong><br>
          <em>Category:</em> ${bookmark.category}<br>
          <em>Tags:</em> ${bookmark.tags.join(", ")}<br>
          <em>Reminder:</em> ${bookmark.reminder ? new Date(bookmark.reminder).toLocaleString() : "None"}<br>
        `;

          li.addEventListener("click", () => {
            // Redirect to a page for viewing details about this bookmark
            window.location.href = chrome.runtime.getURL(`bookmark_details.html?id=${bookmark.id}`);
          });
  
          bookmarkList.appendChild(li);
        });
      }
    });
  
    chrome.storage.local.get("gmailBookmarks", (data) => console.log(data));

    // Add bookmark button click event
    addBookmark.addEventListener("click", () => {
      window.location.href = chrome.runtime.getURL("add_bookmark.html");
    });
  
    // Back to Main Page
    document.getElementById("backToMain").addEventListener("click", () => {
      window.location.href = chrome.runtime.getURL("popup.html");
    });
  });
  