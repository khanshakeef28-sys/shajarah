import React, { useCallback, useRef } from 'react';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const MagicBentoItem = ({
  children,
  className = '',
  spotlightRadius = 360,
  glowColor = '132, 0, 255',
  enableTilt = false,
  clickEffect = true,
  disableAnimations = false
}) => {
  const itemRef = useRef(null);

  const handleMove = useCallback(
    (event) => {
      if (disableAnimations || !itemRef.current) return;
      const rect = itemRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      itemRef.current.style.setProperty('--magic-x', `${x}px`);
      itemRef.current.style.setProperty('--magic-y', `${y}px`);
      itemRef.current.style.setProperty('--magic-radius', `${spotlightRadius}px`);
      itemRef.current.style.setProperty('--magic-glow', glowColor);

      if (enableTilt) {
        const percentX = (x / rect.width) * 2 - 1;
        const percentY = (y / rect.height) * 2 - 1;
        const rotateX = clamp(percentY * -6, -6, 6);
        const rotateY = clamp(percentX * 6, -6, 6);
        itemRef.current.style.setProperty('--magic-tilt-x', `${rotateX}deg`);
        itemRef.current.style.setProperty('--magic-tilt-y', `${rotateY}deg`);
      }
    },
    [disableAnimations, enableTilt, glowColor, spotlightRadius]
  );

  const handleLeave = useCallback(() => {
    if (!itemRef.current) return;
    itemRef.current.style.setProperty('--magic-tilt-x', `0deg`);
    itemRef.current.style.setProperty('--magic-tilt-y', `0deg`);
  }, []);

  const handleClick = useCallback(() => {
    if (!itemRef.current || !clickEffect || disableAnimations) return;
    itemRef.current.classList.remove('magic-bento-click');
    void itemRef.current.offsetWidth;
    itemRef.current.classList.add('magic-bento-click');
  }, [clickEffect, disableAnimations]);

  return (
    <div
      ref={itemRef}
      className={`magic-bento-item ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={handleClick}
    >
      <div className="magic-bento-inner">{children}</div>
    </div>
  );
};

export const MagicBento = ({ children, className = '' }) => {
  return <div className={`magic-bento-grid ${className}`}>{children}</div>;
};
