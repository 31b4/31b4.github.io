document.addEventListener('DOMContentLoaded', () => {
    // return // DISABLE
    const starsContainer = document.querySelector('#firstsection');
    let mouseX = 0;
    let mouseY = 0;
  
    document.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
  
    for (let i = 0; i < 60; i++) {
      createStar();
    }
  
    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 6 + 1}s`;
      starsContainer.appendChild(star);
    }
  
    function createConstellation() {
      const littleBearStars = [
        {x: 30, y: 45, name: 'Pherkad'},      // 3 - Bottom left of bowl
        {x: 30, y: 55, name: 'Zeta UMi'},     // 5 - Connection of handle to bowl
        {x: 15, y: 55, name: 'Kochab'},       // 2 - Bottom right of bowl
        {x: 13, y: 45, name: 'Eta UMi'},      // 7 - Top left of bowl
        {x: 52, y: 20, name: 'Polaris'},      // 1 - North Star (handle tip)
        {x: 40, y: 40, name: 'Epsilon UMi'},  // 4 - Middle of handle
        {x: 48, y: 30, name: 'Yildun'},       // 6 - Second star in handle
      ];
      
      littleBearStars.forEach((star, index) => {
        const starElement = document.createElement('div');
        starElement.classList.add('star', 'constellation-star');
        starElement.style.top = `${star.y}%`;
        starElement.style.left = `${star.x}%`;
        starElement.title = star.name; // Add star name as tooltip
        starsContainer.appendChild(starElement);

        // Make Polaris (North Star) slightly bigger and brighter by default
        if (index === 4) {
          starElement.classList.add('polaris');
        }
      });

      // Draw lines between stars (initially hidden)
      const lineOrder = [0, 1, 2, 3, 0, 5, 6, 4];
      for (let i = 1; i < lineOrder.length; i++) {
        const star = littleBearStars[lineOrder[i]];
        const prevStar = littleBearStars[lineOrder[i-1]];
        drawLine(prevStar, star);
      }

      // Function to show the constellation
      function showConstellation() {
        document.querySelectorAll('.constellation-star:not(.polaris)').forEach(star => {
          star.classList.add('bright');
        });
        document.querySelectorAll('.constellation-line').forEach(line => {
          line.classList.add('visible');
        });

        // Hide after 2 seconds
        setTimeout(hideConstellation, 2000);
      }

      // Function to hide the constellation
      function hideConstellation() {
        document.querySelectorAll('.constellation-star:not(.polaris)').forEach(star => {
          star.classList.remove('bright');
        });
        document.querySelectorAll('.constellation-line').forEach(line => {
          line.classList.remove('visible');
        });
      }

      // Show constellation every 10 seconds
      setInterval(showConstellation, 10000);
    }
  
    function drawLine(start, end) {
      const line = document.createElement('div');
      line.classList.add('constellation-line');
      
      // Get the actual dimensions of the container
      const containerRect = starsContainer.getBoundingClientRect();
      
      // Calculate start and end positions in pixels
      const startX = (start.x / 100) * containerRect.width;
      const startY = (start.y / 100) * containerRect.height;
      const endX = (end.x / 100) * containerRect.width;
      const endY = (end.y / 100) * containerRect.height;
      
      // Calculate length and angle using pixel values
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const angle = Math.atan2(deltaY, deltaX);
      
      // Set line properties
      line.style.width = `${length}px`;
      line.style.left = `${start.x}%`;
      line.style.top = `${start.y}%`;
      line.style.transform = `rotate(${angle}rad)`;
      line.style.transformOrigin = '0 0';
      
      starsContainer.appendChild(line);
    }
  
    //createConstellation(); // DISABLE ursa minor
  
    function updateStarsPosition() {
      const stars = document.querySelectorAll('.star');
  
      stars.forEach((star) => {
        const speed = parseFloat(star.style.animationDuration) || 1;
        const offsetX = mouseX * speed * 2; // Adjust the sensitivity factor
        const offsetY = -mouseY * speed * 2; // Adjust the sensitivity factor
  
        star.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
  
      requestAnimationFrame(updateStarsPosition);
    }
  
    updateStarsPosition();
  
    // DISABLE ursa minor
    /*
    document.addEventListener('click', () => {
      document.querySelectorAll('.constellation-star').forEach(star => {
        star.style.width = star.style.width === '3px' ? '1px' : '3px';
        star.style.height = star.style.height === '3px' ? '1px' : '3px';
        star.style.boxShadow = star.style.boxShadow ? '' : '0 0 10px 2px white';
      });
      document.querySelectorAll('.constellation-line').forEach(line => {
        line.style.opacity = line.style.opacity === '1' ? '0' : '1';
      });
    });
    */
  });
