import React, { useState, useEffect, useRef } from "react";

const ScrollReveals = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const revealRef = useRef(null);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsRevealed(true);
          revealObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // Adjust this value to change when the reveal happens
    );

    if (revealRef.current) {
      revealObserver.observe(revealRef.current);
    }

    return () => {
      if (revealRef.current) {
        revealObserver.unobserve(revealRef.current);
      }
    };
  }, []);

  return (
    <div className={`reveal ${isRevealed ? "revealed" : ""}`} ref={revealRef}>
          {isRevealed ? 'revealed' : 'Content to be revealed'}
    </div>
  );
};

export default ScrollReveals;
