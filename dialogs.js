const alertContainer = document.querySelector("[data-alert-container]");
function showAlert(message, duration = 1000) {
    const alert = document.createElement("div");
    alert.textContent = message;
    alert.classList.add("alert");
    alertContainer.prepend(alert);
    if (duration == null) return;
    setTimeout(() => {
      alert.classList.add("hide");
      alert.addEventListener("transitionend", () => {
        alert.remove();
      });
    }, duration);
  }

const animContainer = document.getElementById('anim')
const hoverContainer = document.getElementById('hover')
const downloads = document.getElementById('downloads')
const dAnim = document.getElementById('d-anim')
const dHover = document.getElementById('d-hover')
const dAll = document.getElementById('d-all')


animContainer.addEventListener('click', () => {
    showAlert("Go to the 'Downloads' section to download these Animations", 3000)
})
hoverContainer.addEventListener('click', () => {
    showAlert("Go to the 'Downloads' section to download these Hover Effects", 3000)
})
downloads.addEventListener('click', () => {
    showAlert("Download the CSS files Here", 3000)
})