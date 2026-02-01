import { useEffect, useRef, useState } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

export default function BlurText({ 
  text, 
  delay = 50, 
  animateBy = "words", 
  direction = "top",
  className = "",
  startDelay = 0 // New prop for initial delay
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [canAnimate, setCanAnimate] = useState(false);
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCanAnimate(true);
      setIsVisible(true);
      return;
    }

    const startTimer = setTimeout(() => {
      setCanAnimate(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay, prefersReducedMotion]);

  useEffect(() => {
    if (!canAnimate || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [canAnimate, prefersReducedMotion]);

  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <div ref={ref} className={`flex flex-wrap justify-center ${className}`}>
      {elements.map((element, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? 'blur(0px)' : 'blur(10px)',
            transform: isVisible ? 'translateY(0)' : `translateY(${direction === 'top' ? '-20px' : '20px'})`,
            transition: prefersReducedMotion ? 'none' : `all 0.5s ease ${index * delay}ms`,
            marginRight: animateBy === "words" ? '0.25rem' : '0',
          }}
        >
          {element}
        </span>
      ))}
    </div>
  );
}