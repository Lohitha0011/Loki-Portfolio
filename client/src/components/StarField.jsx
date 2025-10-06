import { useEffect, useRef } from 'react';

const StarField = () => {
  const starfieldRef = useRef(null);

  useEffect(() => {
    const starfield = starfieldRef.current;
    const numStars = 100;
    const numShootingStars = 3;

    // Generate static stars
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.width = Math.random() * 3 + 1 + 'px';
      star.style.height = star.style.width;
      star.style.animationDelay = Math.random() * 3 + 's';
      star.style.animationDuration = (Math.random() * 3 + 2) + 's';
      starfield.appendChild(star);
    }

    // Generate shooting stars
    for (let i = 0; i < numShootingStars; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.top = (20 + i * 20) + '%';
      shootingStar.style.animationDelay = i * 3 + 's';
      starfield.appendChild(shootingStar);
    }

    return () => {
      // Cleanup
      if (starfield) {
        starfield.innerHTML = '';
      }
    };
  }, []);

  return <div className="stars" ref={starfieldRef}></div>;
};

export default StarField;
