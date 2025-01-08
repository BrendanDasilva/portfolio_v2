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
      const targetSlide = button.getAttribute("data-slide");
      const targetScroll = button.getAttribute("data-scroll");

      if (targetSlide || targetScroll) {
        event.preventDefault(); // Prevent default behavior only for slide transitions and smooth scrolling
      }

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

// modals for expanded section images
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  // Ensure the modal is hidden initially
  modal.style.display = "none";

  document.querySelectorAll(".image-item, .portfolio-image").forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.style.backgroundImage
        ? img.style.backgroundImage.slice(5, -2)
        : img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// back to top button
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTopBtn");

  // Show or hide the button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1000) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  // Scroll to the top of the page when the button is clicked
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
