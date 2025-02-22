document.getElementById("signInForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const fileInput = document.getElementById("file").files[0]; // Get the file selected by the user

  // Set valid username and password
  const validUsername = "3849";
  const validPassword = "99001";

  // Set correct file to be uploaded (you can change this)
  const validFileName = "hi.pdf"; // Specify the file you want the user to upload

  // Set URL and file location for redirection
  const redirectURL = "https://www.youtube.com"; // Change this URL to your desired URL
  const redirectFile = "files/yourfile.pdf"; // Change this to your desired file location

  // Check if the file uploaded by the user is the correct one
  if (fileInput && fileInput.name === validFileName) {
    // Validate if the entered username and password match the valid ones
    if (username === validUsername && password === validPassword) {
      // Hide the form and show the redirect options
      document.getElementById("signInForm").style.display = "none";
      document.getElementById("redirectOptions").style.display = "block";
      
      // Store the redirect URL and file in global variables
      window.redirectURL = redirectURL;
      window.redirectFile = redirectFile;
      
    } else {
      // Show error message if credentials don't match
      document.getElementById("error-message").innerText = "Invalid username or password.";
    }
  } else {
    // Show error message if the wrong file is uploaded
    document.getElementById("error-message").innerText = "Please upload the correct file.";
  }
});

// Redirect to the website
document.getElementById("redirectToURL").addEventListener("click", function () {
  window.location.href = window.redirectURL; // Redirect to the set URL
});

// Redirect to the file
document.getElementById("redirectToFile").addEventListener("click", function () {
  window.location.href = window.redirectFile; // Redirect to the set file
});


