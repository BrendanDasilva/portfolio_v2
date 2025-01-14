// Welcome Section Slides Behavior
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const introSlide = document.getElementById("introduction");
  const skillsSlide = document.getElementById("languages-skills");

  toggleButton.addEventListener("click", () => {
    const isActive = toggleButton.classList.contains("active");

    if (isActive) {
      // Switch to Introduction Slide
      introSlide.classList.add("slide-in");
      introSlide.classList.remove("slide-out");
      skillsSlide.classList.add("slide-out");
      skillsSlide.classList.remove("slide-in");
      toggleButton.textContent = "Languages & Skills";
    } else {
      // Switch to Languages & Skills Slide
      introSlide.classList.add("slide-out");
      introSlide.classList.remove("slide-in");
      skillsSlide.classList.add("slide-in");
      skillsSlide.classList.remove("slide-out");
      toggleButton.textContent = "About";
    }

    toggleButton.classList.toggle("active");
  });
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
  const expandButtons = document.querySelectorAll(".expand-btn, .expand-text");

  expandButtons.forEach((element) => {
    element.addEventListener("click", () => {
      const button = element
        .closest(".expand-btn-container")
        .querySelector(".expand-btn");
      const expanded = button.getAttribute("aria-expanded") === "true" || false;
      button.setAttribute("aria-expanded", !expanded);

      // Toggle the expanded section (if applicable)
      const portfolioItem = button.closest(".portfolio-item");
      const expandedSection = portfolioItem.querySelector(".expanded-section");
      if (expandedSection) {
        expandedSection.classList.toggle("open");
      }

      // Toggle the text between "View More" and "View Less"
      const expandText = button.nextElementSibling;
      if (expandText) {
        expandText.textContent = expanded ? "View More" : "View Less";
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
