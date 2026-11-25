const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

if (menuToggle && navigation) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

const enquiryForm = document.querySelector("#enquiry-form");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", () => {
    const bodyField = enquiryForm.querySelector('input[name="body"]');
    const name = enquiryForm.querySelector("#enquiry-name").value.trim();
    const service = enquiryForm.querySelector("#enquiry-service").value;
    const phone = enquiryForm.querySelector("#enquiry-phone").value.trim();
    const message = enquiryForm.querySelector("#enquiry-message").value.trim();

    bodyField.value = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      "",
      "Enquiry:",
      message || "No additional details provided.",
    ].join("\n");
  });
}
