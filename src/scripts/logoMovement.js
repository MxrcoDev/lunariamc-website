document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    const container = document.getElementById('logo-container');
    const maxMovement = 5; // Movimento massimo in pixel
  
    document.addEventListener('mousemove', (e) => {
      const containerRect = container.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;
  
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      const deltaX = (mouseX - containerCenterX) / containerRect.width;
      const deltaY = (mouseY - containerCenterY) / containerRect.height;
  
      const moveX = deltaX * maxMovement;
      const moveY = deltaY * maxMovement;
  
      logo.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    });
  });