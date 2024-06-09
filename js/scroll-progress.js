document.addEventListener('DOMContentLoaded', function () {
  const progressLine = document.querySelector('.progress-line');
  const progressDetails = document.querySelector('.progress-details');
  const sectionButtons = progressDetails.querySelectorAll('.section');

  // Scroll to section smoothly
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  // Update progress line width based on scroll position
  function updateProgressBar() {
    const scrollPosition = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrollPosition / totalHeight) * 100;
    progressLine.style.width = percentage + '%';
    
    // Update verbal progress sections based on scroll position
    sectionButtons.forEach(button => {
      const sectionId = button.id;
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          sectionButtons.forEach(btn => btn.classList.remove('current'));
          button.classList.add('current');
        }
      }
    });
  }


    // Event listener for scrolling to update progress bar
    window.addEventListener('scroll', function() {
      updateProgressBar();
    });

    // Initial call to update progress bar
    updateProgressBar();
  });

