// Welcome Section Slides Behavior
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".nav-link");
  const slides = document.querySelectorAll(".slide");

  // Set initial state for slides
  slides.forEach((slide) => {
    if (!slide.classList.contains("active")) {
      slide.classList.add("inactive");
    }
  });

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const targetSlide = button.getAttribute("data-slide");
      const targetScroll = button.getAttribute("data-scroll");

      if (targetSlide) {
        slides.forEach((slide) => {
          if (slide.id === targetSlide) {
            slide.classList.add("active");
            slide.classList.remove("inactive");
          } else {
            slide.classList.remove("active");
            slide.classList.add("inactive");
          }
        });
      }

      if (targetScroll) {
        document
          .getElementById(targetScroll)
          .scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Show the introduction slide by default
  const introSlide = document.getElementById("introduction");
  introSlide.classList.add("active");
  introSlide.classList.remove("inactive");
});

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
      threshold: 0.2, // Trigger when 20% of the item is visible
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
      const expanded = button.getAttribute("aria-expanded") === "true" || false;
      button.setAttribute("aria-expanded", !expanded);

      // Toggle the expanded section (if applicable)
      const portfolioItem = button.closest(".portfolio-item");
      const expandedSection = portfolioItem.querySelector(".expanded-section");
      if (expandedSection) {
        expandedSection.classList.toggle("open");
      }
    });
  });
});
