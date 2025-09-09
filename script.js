// Loading Screen with minimum delay
const loaderStart = Date.now();
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  const minDelay = 500; // milliseconds
  const elapsed = Date.now() - loaderStart;
  const remaining = Math.max(0, minDelay - elapsed);
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 400);
    }, remaining);
  }
});
// Modal for Get Price
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('priceModal');
  const closeModal = document.getElementById('closeModal');
  const priceForm = document.getElementById('priceForm');
  const modalService = document.getElementById('modalService');
  const modalSuccess = document.getElementById('modalSuccess');
  // Open modal and fill service name
  document.querySelectorAll('.get-price-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const card = btn.closest('.waxing-card');
      const service = card.querySelector('h3').innerText;
      modal.classList.add('active');
      modalService.value = service;
      modalSuccess.style.display = 'none';
      priceForm.style.display = '';
    });
  });
  // Close modal
  closeModal.addEventListener('click', function() {
    modal.classList.remove('active');
  });
  // Submit form
  priceForm.addEventListener('submit', function(e) {
    e.preventDefault();
    priceForm.style.display = 'none';
    modalSuccess.style.display = 'block';
    // Modal will stay open until user closes it
  });
  // Close modal on overlay click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});
// Hamburger menu toggle for mobile with animation and auto-hide on scroll
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('navbar-hamburger');
  const menu = document.getElementById('navbar-menu');
  let lastScrollY = window.scrollY;

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  });

  // Close menu when a link is clicked (mobile UX)
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
    });
  });

  // Hide menu on scroll
  window.addEventListener('scroll', function() {
    if (menu.classList.contains('active')) {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
    }
    lastScrollY = window.scrollY;
  });
});
function showContact() {
  var info = document.getElementById("contactInfo");
  if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block";
    info.scrollIntoView({behavior: 'smooth', block: 'center'});
  } else {
    info.style.display = "none";
  }
}
