document.addEventListener("DOMContentLoaded", function () {
  const lazyVideos = document.querySelectorAll(".lazy-video");

  const videoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        const source = video.querySelector("source");

        if (source.dataset.src) {
          source.src = source.dataset.src;
          video.load(); 
        }

        observer.unobserve(video);
      }
    });
  });

  lazyVideos.forEach(video => videoObserver.observe(video));
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Next button click
nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first slide
  }
  updateSlider();
});

// Previous button click
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1; // Loop to the last slide
  }
  updateSlider();
});

// Function to update slider position
function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Autoplay functionality with 2-second interval
setInterval(() => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first slide
  }
  updateSlider();
}, 4000); // 2000ms = 2 seconds


document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');
  const counterSection = document.getElementById('counter-section');
  
  // Intersection Observer for triggering counters when in view
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger counter animation when section is in view
        startCounting();
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is in view

  // Observe the counter section
  observer.observe(counterSection);

  // Counter animation function
  const startCounting = () => {
    counters.forEach(counter => {
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  };
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Your message has been successfully sent!");
  document.getElementById('contactForm').reset();
});