// === Mobile Menu Toggle ===
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

// === Auto-Close Mobile Menu on Link Click ===
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("menu").classList.remove("active");
  });
});

// === Portfolio Filter Logic ===
const filters = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.portfolio-item');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    // Remove active class from all
    filters.forEach(f => f.classList.remove('active'));
    // Add active class to clicked one
    filter.classList.add('active');

    const value = filter.getAttribute('data-filter');

    items.forEach(item => {
      if (value === 'all' || item.classList.contains(value)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// === Auto-Fill Location (if input exists) ===
fetch("https://ipapi.co/json")
  .then(res => res.json())
  .then(data => {
    const locationInput = document.getElementById("user-location");
    if (locationInput) {
      const location = `${data.city}, ${data.region}, ${data.country_name}`;
      locationInput.value = location;
    }
  })
  .catch(() => {
    const locationInput = document.getElementById("user-location");
    if (locationInput) {
      locationInput.value = "Location not found";
    }
  });
