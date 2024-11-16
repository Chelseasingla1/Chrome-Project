chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get("gmailBookmarks", (data) => {
    const bookmarks = data.gmailBookmarks || [];
    const bookmark = bookmarks.find((b) => b.id === alarm.name);

    if (bookmark) {
      chrome.notifications.create(alarm.name, {
        type: "basic",
        iconUrl: "icon128.png",
        title: "Reminder",
        message: `Reminder for: ${bookmark.title} (${bookmark.category})`
      });
    }
  });
});
