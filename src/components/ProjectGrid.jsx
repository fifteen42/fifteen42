import React, { useState } from 'react';

const products = [
  { emoji: '✏️', name: 'Cavo', url: 'https://cavo.pro/', desc: 'Explain ideas with drawing, voice & camera.' },
  { emoji: '🍏', name: 'SayApple', url: 'https://sayapple.co/', desc: 'Learn languages through AI voice comics.' },
  { emoji: '🗺️', name: 'Context Atlas', url: 'https://contextatlas.com', desc: 'Curated guides on context engineering.' },
  { emoji: '🎨', name: 'Codart', url: 'https://codart.fun', desc: 'Draw and let AI teach you creative coding.' },
];

const ProductItem = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        color: 'var(--text-primary)',
        fontSize: '1rem',
        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}>
        <span style={{
          transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transform: hovered ? 'scale(1.3) rotate(-8deg)' : 'scale(1) rotate(0deg)',
          display: 'inline-block',
        }}>{product.emoji}</span>
        <span className="mono">{product.name}</span>
      </div>

      {/* Tooltip */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '100%',
        transform: hovered
          ? 'translate(-50%, 8px) scale(1)'
          : 'translate(-50%, 4px) scale(0.95)',
        opacity: hovered ? 1 : 0,
        filter: hovered ? 'blur(0px)' : 'blur(4px)',
        pointerEvents: 'none',
        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
        whiteSpace: 'nowrap',
        fontSize: '0.78rem',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-sans)',
        letterSpacing: '0.01em',
        paddingTop: '2px',
      }}>
        {product.desc}
      </div>
    </a>
  );
};

const ProjectGrid = () => {
  return (
    <div className="animate-fade-in delay-200" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '3rem',
    }}>
      <p className="mono" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Building</p>
      <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {products.map((p) => (
          <ProductItem key={p.name} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
