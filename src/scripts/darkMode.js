document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
  
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
      enableDarkMode();
    }
  
    darkModeToggle.addEventListener('click', () => {
      if (body.classList.contains('dark-mode')) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
  
    function enableDarkMode() {
      body.classList.add('dark-mode');
      darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
      localStorage.setItem('darkMode', 'enabled');
    }
  
    function disableDarkMode() {
      body.classList.remove('dark-mode');
      darkModeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
      localStorage.setItem('darkMode', null);
    }
  });