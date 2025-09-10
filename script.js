// --------------------
// Part 1: Event Handling
// --------------------
const toggleBtn = document.getElementById("toggleModeBtn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent =
    document.body.classList.contains("dark-mode")
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";
});

// --------------------
// Part 2: Interactive Elements
// --------------------

// Counter
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const countDisplay = document.getElementById("count");

counterBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// FAQ Section
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// --------------------
// Part 3: Form Validation
// --------------------
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent default submission
  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation (min 6 chars)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // If valid, show success
  if (isValid) {
    successMessage.textContent = "🎉 Signup successful!";
    form.reset();
  }
});
