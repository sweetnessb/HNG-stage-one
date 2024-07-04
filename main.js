document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted successfully!");
  });

const emailElement = document.querySelector('[data-testid="slackEmail"]');

// Fetch the email from the data-email attribute
const email = emailElement.getAttribute("data-email");

emailElement.textContent = email;

function getCurrentDateTime() {
  const now = new Date();

  // Formatting the date and time
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };

  const dateTimeString = now.toLocaleDateString("en-US", options);

  const dateTimeElement = document.querySelector('[data-testid="currentDay"]');

  dateTimeElement.innerHTML = dateTimeString;
}

getCurrentDateTime();

setInterval(getCurrentDateTime, 1000);
