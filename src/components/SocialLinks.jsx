import React from 'react';

const SocialLinks = () => {
  const links = [
    { name: 'Email', url: 'mailto:tingfeifu@gmail.com' },
    { name: 'GitHub', url: 'https://github.com/fifteen42' },
    { name: 'X', url: 'https://x.com/fifteen42_' },
  ];

  return (
    <div className="animate-fade-in delay-200" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
      {links.map((link) => (
        <a 
          key={link.name} 
          href={link.url} 
          target={link.name === 'Email' ? '_self' : '_blank'}
          rel={link.name === 'Email' ? '' : 'noopener noreferrer'}
          className="mono"
          style={{ 
            fontSize: '0.9rem', 
            color: 'var(--text-primary)',
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            paddingBottom: '2px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--text-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
