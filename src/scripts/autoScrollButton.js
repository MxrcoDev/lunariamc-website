document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.getElementById('scrollButton');
    const secondSection = document.getElementById('secondSection');
  
    scrollButton.addEventListener('click', () => {
      secondSection.scrollIntoView({ behavior: 'smooth' });
    });
  });