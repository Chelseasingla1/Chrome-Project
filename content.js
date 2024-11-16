const links = Array.from(document.querySelectorAll("a")).map(link => link.href);
const attachments = Array.from(document.querySelectorAll(".attachment")).map(attachment => ({
  name: attachment.textContent,
  downloadUrl: attachment.getAttribute("data-download-url")
}));

chrome.runtime.sendMessage({ action: "storeData", links, attachments });
