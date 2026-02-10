import React from 'react';
import { Link } from 'react-router-dom';

const SocialLinks = () => {
  const links = [
    { name: 'Email', url: 'mailto:tingfeifu@gmail.com' },
    { name: 'GitHub', url: 'https://github.com/fifteen42' },
    { name: 'X', url: 'https://x.com/fifteen42_' },
  ];

  const linkStyle = {
    fontSize: '0.9rem',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    borderBottom: '1px solid transparent',
    paddingBottom: '2px',
  };

  const handleEnter = (e) => e.currentTarget.style.borderBottomColor = 'var(--text-primary)';
  const handleLeave = (e) => e.currentTarget.style.borderBottomColor = 'transparent';

  return (
    <div className="animate-fade-in delay-200" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.name === 'Email' ? '_self' : '_blank'}
          rel={link.name === 'Email' ? '' : 'noopener noreferrer'}
          className="mono"
          style={linkStyle}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {link.name}
        </a>
      ))}
      <Link
        to="/challenge"
        className="mono"
        style={linkStyle}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        100 Day Challenge
      </Link>
    </div>
  );
};

export default SocialLinks;
