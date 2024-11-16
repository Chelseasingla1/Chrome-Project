document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("reminders", (data) => {
      const reminders = data.reminders || [];
      const list = document.getElementById("remindersList");
  
      reminders.forEach((reminder) => {
        const li = document.createElement("li");
        li.textContent = `${reminder.title} - ${reminder.date}`;
        list.appendChild(li);
      });
    });
  
    document.getElementById("backToMain").addEventListener("click", () => {
      window.location.href = chrome.runtime.getURL("popup.html");
    });
  });
  