// Function that corrects the title
function get_no_notification_title(title) {
  return title.replace(/\([0-9]+\)/, "") // Removes numbers between parentheses
}

// Set the title
document.title = get_no_notification_title(document.title)

// Create a listener so that if the title changes, it is also corrected
function onTitleChange(_) {
  const noNotificationTitle = get_no_notification_title(document.title);
  if (document.title !== noNotificationTitle)
    document.title = noNotificationTitle
}

// Register listener
new MutationObserver(onTitleChange).observe(
  document.querySelector('title'),
  {subtree: true, characterData: true, childList: true}
);