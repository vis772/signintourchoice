document.getElementById("signUpForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  // Set forbidden username and password
  const forbiddenUsername = "3849";
  const forbiddenPassword = "99001";

  // Check if the entered username and password match the forbidden ones
  if (username === forbiddenUsername && password === forbiddenPassword) {
    // Show "Forbidden" message
    document.getElementById("error-message").innerText = "FORBIDDEN";

    // Display the kickout message and start the animation
    const kickoutMessage = document.getElementById("kickoutMessage");
    kickoutMessage.style.display = "block";

    // Wait for the animation to complete, then redirect
    setTimeout(function () {
      // Redirect to another page after the animation
      window.location.href = "index2.html"; // You can set your desired redirect URL here
    }, 5000); // Redirect after 5 seconds
  } else {
    // You can handle regular signup process here (for example, redirect to a different page)
    alert("Sign up successful!"); // Placeholder for successful sign-up
  }
});

