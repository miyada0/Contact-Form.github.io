document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    document.getElementById("successMessage").textContent = "";
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
  
    let hasError = false;
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      hasError = true;
    }
  
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      hasError = true;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Invalid email format.";
      hasError = true;
    }
  
    if (message === "") {
      document.getElementById("messageError").textContent = "Message is required.";
      hasError = true;
    }

    if (!hasError) {
      document.getElementById("successMessage").textContent = "Form submitted successfully!";
      document.getElementById("contactForm").reset();
    }
  });
  