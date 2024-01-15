document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('#firstsection');
    let mouseX = 0;
    let mouseY = 0;
  
    document.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
  
    for (let i = 0; i < 100; i++) {
      createStar();
    }
  
    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 2 + 1}s`;
      starsContainer.appendChild(star);
    }
  
    function updateStarsPosition() {
      const stars = document.querySelectorAll('.star');
  
      stars.forEach((star) => {
        const speed = parseFloat(star.style.animationDuration) || 1;
        const offsetX = mouseX * speed * 10; // Adjust the sensitivity factor
        const offsetY = -mouseY * speed * 10; // Adjust the sensitivity factor
  
        star.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
  
      requestAnimationFrame(updateStarsPosition);
    }
  
    updateStarsPosition();
  });
  