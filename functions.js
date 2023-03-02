// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through each link and add a click event listener
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the link from navigating to the href location

    // Get the section ID from the href attribute
    const sectionId = link.getAttribute('href');

    // Scroll to the section with a smooth animation
    scrollToSection(sectionId);
  });
});

// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.querySelector(sectionId);
  const offset = 100; // Adjust this value to offset the scroll position

  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop - offset
  });
}






const progressBars = document.querySelectorAll(".progress-bar");

// Loop through each progress bar and update it
progressBars.forEach((progressBar, index) => {
  // Set the initial value of the progress bar to zero
  let progress = 0;

  // Use setInterval to increment the progress bar every 100ms
  const intervalId = setInterval(() => {
    // Increment the progress by a certain amount (in this case, the index of the progress bar)
    progress += index + 1;

    // Update the progress bar style
    progressBar.style.width = `${progress}%`;

    // Update the progress bar text
    progressBar.innerHTML = `${progress}%`;

    // Stop the interval once the progress reaches 100
    if (progress >=90 ) {
      clearInterval(intervalId);
    }
  }, 100);
});