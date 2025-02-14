document.addEventListener('DOMContentLoaded', function() {
    const sidebarTitle = document.querySelector('.sidebar-title');
    const featureItems = document.querySelectorAll('.feature-item');
    const featureCards = document.querySelectorAll('.feature-card');
    
    function checkScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
  
    // Anima il titolo della sidebar
    const sidebarContainer = document.querySelector('.sidebar-container');
    const sidebarRect = sidebarContainer.getBoundingClientRect();
    if (sidebarRect.top < windowHeight && sidebarRect.bottom > 0) {
      sidebarTitle.style.opacity = '1';
    } else {
      sidebarTitle.style.opacity = '0';
    }

    // Anima gli elementi delle caratteristiche
    featureItems.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < windowHeight * 0.8) {
        setTimeout(() => {
          item.classList.add('animate');
        }, index * 100);
      } else {
        item.classList.remove('animate');
      }
    });
  
      // Animate feature cards
      featureCards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top < windowHeight * 0.8) {
          setTimeout(() => {
            card.classList.add('animate');
          }, index * 100);
        } else if (cardRect.top > windowHeight * 1) {
          card.classList.remove('animate');
        }
      });
    }
  
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    checkScroll(); // Check on initial load
  });