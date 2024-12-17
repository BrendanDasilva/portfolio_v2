const slides = document.querySelectorAll(".slide");
const progressBar = document.querySelector(".progress");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const lockIcon = document.getElementById("lock");

let currentSlide = 0;

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    if (index === currentSlide) {
      slide.style.overflow = index === slides.length - 1 ? "auto" : "hidden";
    }
  });

  // Update progress bar
  progressBar.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;

  // Update buttons
  prevButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === slides.length - 1;

  // Handle lock icon
  if (currentSlide === slides.length - 2) {
    lockIcon.classList.remove("locked");
    lockIcon.classList.add("unlocked");
    lockIcon.textContent = "🔓";
  } else {
    lockIcon.classList.remove("unlocked");
    lockIcon.classList.add("locked");
    lockIcon.textContent = "🔒";
  }
}

// Navigation button events
prevButton.addEventListener("click", () => {
  if (currentSlide > 0) currentSlide--;
  updateSlides();
});

nextButton.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) currentSlide++;
  updateSlides();
});

// Initialize
updateSlides();

// Fade-in for portfolio
document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the item is visible
    }
  );

  portfolioItems.forEach((item) => {
    observer.observe(item);
  });
});

// drop down for portfolio expanding
document.addEventListener("DOMContentLoaded", () => {
  const expandButtons = document.querySelectorAll(".expand-btn");

  expandButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const portfolioItem = button.closest(".portfolio-item");
      const expandedSection = portfolioItem.querySelector(".expanded-section");

      // Toggle the 'open' class for smooth roll-in
      if (expandedSection.classList.contains("open")) {
        expandedSection.classList.remove("open");
        button.textContent = "⬇"; // Reset button arrow
      } else {
        expandedSection.classList.add("open");
        button.textContent = "⬆"; // Change button arrow to collapse
      }
    });
  });
});
