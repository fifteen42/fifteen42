import React from 'react';
import '../styles/animations.css';

const Hero = () => {
  return (
    <section className="hero" style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <h1 className="animate-fade-in mono" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '500', letterSpacing: '-0.05em' }}>
        Tingfei
      </h1>
      <p className="animate-fade-in delay-100" style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: '300' }}>
        Don't Panic
      </p>
    </section>
  );
};

export default Hero;
