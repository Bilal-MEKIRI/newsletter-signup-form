//Select the img element
const imageElement = document.getElementById("dynamic-image");

// Define the image sources for different screen sizes
const desktopImage = "/assets/images/illustration-sign-up-desktop.svg";
const mobileImage = "/assets/images/illustration-sign-up-mobile.svg";

// Function to update the image based on screen width
function updateImage() {
  if (window.innerWidth <= 815) {
    imageElement.src = mobileImage;
  } else {
    imageElement.src = desktopImage;
  }
}

// Call the function once to set the initial image
//The function runs at the begining to load the image based on the screen size
updateImage();

// Add an event listener for window resize
//The event listener enables the updateImage function to run each time the window size changes
window.addEventListener("resize", updateImage);

const emailInput = document.getElementById("input");
const errorMessage = document.getElementById("error-message");
const signUpForm = document.getElementById("sign-up-form");
const popUpBoxContainer = document.getElementById("pop-up-box-container");
const emailSpanElement = document.getElementById("email");

// Handling the contact form submission
signUpForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const emailValue = emailInput.value.trim(); // Trim whitespace from the input
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; // Email regex

  if (emailValue == "") {
    console.log("Invalid email");
    emailInput.classList.add("error"); // Add error styles
    errorMessage.textContent = "Email can not be empty";
    errorMessage.style.display = "initial"; // Show the error message
    popUpBoxContainer.classList.remove("visible"); //Removes the .visible class from the pop-up-box-container element
  } else if (!emailValue || !emailRegex.test(emailValue)) {
    console.log("Invalid email");
    emailInput.classList.add("error"); // Add error styles
    errorMessage.textContent = "Valid email required";
    errorMessage.style.display = "initial"; // Show the error message
    popUpBoxContainer.classList.remove("visible"); //Removes the .visible class from the pop-up-box-container element
  } else {
    console.log("Valid email");
    emailInput.classList.remove("error"); // Remove error styles
    errorMessage.style.display = "none"; // Hide the error message
    popUpBoxContainer.classList.add("visible"); //adds the .visible class from the pop-up-box-container element
    emailSpanElement.textContent = emailInput.value; //Dynamically prints the entered email in the confirmation pop up
  }
});

// Once the button is clicked the pop-up will be hidden
document.getElementById("pop-up-box-btn").addEventListener("click", () => {
  popUpBoxContainer.classList.remove("visible");
});
