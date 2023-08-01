// swiper section ; ;
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay :{
      dalay : 500 , 
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  // contact form validation ; 

  const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    // Here, you can perform any actions with the form data, like sending it to a server using AJAX, etc.
    alert("Form submitted successfully!");
  }
});

function validateForm() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false;
  }

  // Email validation using a simple regular expression
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}