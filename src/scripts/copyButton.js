document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copyButton');
    let clickCount = 0;
    const serverIP = 'play.lunariamc.it';
  
    copyButton.addEventListener('click', () => {
      clickCount++;
      copyButton.classList.add('loading');
      
      navigator.clipboard.writeText(serverIP).then(() => {
        setTimeout(() => {
          copyButton.classList.remove('loading');
          
          if (clickCount) {
            copyButton.querySelector('.button-text').textContent = '✅';
            setTimeout(() => {
              copyButton.querySelector('.button-text').textContent = 'Copia IP';
              clickCount = 0;
            }, 3000);
          }
        }, 1000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
        copyButton.classList.remove('loading');
      });
    });
  });