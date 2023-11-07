'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);




document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const successToast = document.getElementById('successToast');

  if (contactForm && successToast) {
      contactForm.addEventListener('submit', function (e) {
          e.preventDefault();

          // Get form data
          const formData = new FormData(contactForm);

          // Send form data using Fetch API
          fetch('sendmail.php', {
              method: 'POST',
              body: formData
          })
          .then(response => {
              if (response.ok) {
                  // Show the success toast
                  successToast.classList.remove('hidden');

                  // Hide the toast after 5 seconds
                  setTimeout(function () {
                      successToast.classList.add('hidden');
                  }, 5000);

                  // Optionally, reset the form
                  contactForm.reset();
              } else {
                  console.error('Error submitting form:', response.statusText);
                  // Handle error - show an error message or take appropriate action
              }
          })
          .catch(error => {
              console.error('Error:', error);
              // Handle error - show an error message or take appropriate action
          });
      });
  } else {
      console.error('Contact form or success toast not found.');
  }
});
