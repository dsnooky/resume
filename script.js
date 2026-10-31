/*
  RESUME ONLINE MAKER
  IMPORTANT: Replace the placeholder below with your Facebook Page username.
  Example: https://m.me/YourPageUsername
*/
const MESSENGER_URL = "https://m.me/bysnooky";

document.querySelectorAll("[data-messenger]").forEach((link) => {
  link.href = MESSENGER_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.addEventListener("click", (event) => {
    if (MESSENGER_URL.includes("YOUR_FACEBOOK_PAGE_USERNAME")) {
      event.preventDefault();
      alert("Please update the Facebook Messenger link in script.js with your Facebook Page username.");
    }
  });
});

document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (MESSENGER_URL.includes("YOUR_FACEBOOK_PAGE_USERNAME")) {
      event.preventDefault();
      alert("Please add your Facebook Page username in script.js to activate service inquiry buttons.");
      return;
    }
    const service = link.dataset.service;
    const message = `Hi! I would like to inquire about your ${service} service. Please send me the details.`;
    link.href = `${MESSENGER_URL}?ref=${encodeURIComponent(message)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
