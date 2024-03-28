document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
  
    
    if (name === "" || email === "" || phone === "") {
      alert("Please fill in all the required fields.");
      return;
    }
  
    
    alert("Thank you, " + name + "! Your message has been submitted.\n\nEmail: " + email + "\nPhone: " + phone + "\nMessage: " + message);

  });