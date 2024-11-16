document.addEventListener("DOMContentLoaded", () => {
  const bookmarkButton = document.getElementById("bookmarkEmail");

  // Bookmark Gmail Email
  bookmarkButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];

      // Ensure it's a Gmail tab
      if (activeTab.url.includes("mail.google.com")) {
        // Collect additional metadata
        const category = document.getElementById("category").value.trim();
        const tags = document.getElementById("tags").value.split(",").map(tag => tag.trim());
        const reminder = document.getElementById("reminder").value;

        // Create bookmark data
        const bookmarkData = {
          id: Date.now().toString(), // Unique ID for the bookmark
          title: activeTab.title,
          url: activeTab.url,
          category: category || "General", // Default to "General" if empty
          tags: tags || [],
          reminder: reminder || null
        };

        // Save the bookmark
        chrome.storage.local.get("gmailBookmarks", (data) => {
          const bookmarks = data.gmailBookmarks || [];
          bookmarks.push(bookmarkData);

          chrome.storage.local.set({ gmailBookmarks: bookmarks }, () => {
            alert("Gmail email bookmarked successfully!");

            // Set reminder if applicable
            if (reminder) {
              const reminderTime = new Date(reminder).getTime();
              chrome.alarms.create(bookmarkData.id, { when: reminderTime });
              console.log(`Reminder set for: ${reminder}`);
            }

            // Redirect back to bookmarks page
            window.location.href = chrome.runtime.getURL("bookmarks.html");
          });
        });
      } else {
        alert("Please open a Gmail email to bookmark.");
      }
    });
  });

  // Back to Bookmarks
  document.getElementById("backToBookmarks").addEventListener("click", () => {
    window.location.href = chrome.runtime.getURL("bookmarks.html");
  });
});
