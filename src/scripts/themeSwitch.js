document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
  
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('light-mode');
  
      if (body.classList.contains('light-mode')) {
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill');
      } else {
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-fill');
      }
  
      themeToggle.classList.toggle('light-mode');
    });
  });