window.addEventListener('DOMContentLoaded', () => {
  const originalTitle = document.title;
  const originalIcon = "n.png";
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      document.title = "Home";
      updateFavicon("img/i.ico");
    } else {
      document.title = originalTitle;
      updateFavicon(originalIcon);
    }
  });
  //this is where if your out of tab it changes the favicon & title to google classroom
  function updateFavicon(url) {
    let link = document.querySelector("link[rel='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = url;
  }
});