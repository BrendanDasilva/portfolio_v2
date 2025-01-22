// Welcome Section Slides Behavior
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const introSlide = document.getElementById("introduction");
  const skillsSlide = document.getElementById("languages-skills");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    const isActive = toggleButton.classList.contains("active");

    if (isActive) {
      // Slide out Languages & Skills, Slide in Introduction
      introSlide.classList.remove("slide-out");
      introSlide.classList.add("slide-in");
      skillsSlide.classList.remove("slide-in");
      skillsSlide.classList.add("slide-out");
      toggleButton.textContent = "Languages & Skills";
      body.classList.remove("skills-active");
    } else {
      // Slide out Introduction, Slide in Languages & Skills
      introSlide.classList.remove("slide-in");
      introSlide.classList.add("slide-out");
      skillsSlide.classList.remove("slide-out");
      skillsSlide.classList.add("slide-in");
      toggleButton.textContent = "About";
      body.classList.add("skills-active");
    }

    toggleButton.classList.toggle("active");
  });

  // Accordion functionality for skills columns
  const skillsHeaders = document.querySelectorAll(".skills-column h3");

  skillsHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const column = header.parentElement;
      const isActive = column.classList.contains("active");

      // Close all other columns
      document.querySelectorAll(".skills-column").forEach((col) => {
        col.classList.remove("active");
      });

      // Toggle the clicked column
      if (!isActive) {
        column.classList.add("active");
      }
    });
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

  portfolioItems.forEach((item, index) => {
    if (index === 0) {
      // Exclude the first portfolio item
      item.classList.add("visible");
    } else {
      // Alternate fade-in direction
      if (index % 2 === 0) {
        item.classList.add("fade-in-left");
      } else {
        item.classList.add("fade-in-right");
      }
      observer.observe(item);
    }
  });
});

// drop down for portfolio expanding + slide arrow buttons
document.addEventListener("DOMContentLoaded", () => {
  // Handle the expand button functionality
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

  // Handle the arrow button functionality for scrolling images
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  portfolioItems.forEach((item) => {
    const expandedImages = item.querySelector(".expanded-images");
    const leftArrow = item.querySelector(".left-arrow");
    const rightArrow = item.querySelector(".right-arrow");

    if (leftArrow && rightArrow && expandedImages) {
      leftArrow.addEventListener("click", () => {
        expandedImages.scrollBy({
          left: -525, // Adjust this value based on your image width
          behavior: "smooth",
        });
      });

      rightArrow.addEventListener("click", () => {
        expandedImages.scrollBy({
          left: 525, // Adjust this value based on your image width
          behavior: "smooth",
        });
      });
    }
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
