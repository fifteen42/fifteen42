import React from 'react';
import { Link } from 'react-router-dom';

const challenges = [
  {
    day: 1,
    date: '2025.02.10',
    product: { name: 'Fooo', desc: 'A personal agent team', url: 'https://www.fooo.ooo/' },
    video: { name: 'Day 1 Recap', desc: 'Most humans will work for agents within 10 years', url: 'https://www.xiaohongshu.com/discovery/item/698b42380000000015022f05?source=webshare&xhsshare=pc_web&xsec_token=ABnTxgyqVJLdyjFIou0KOrR2jTb0QI40Xt-0Mgs2atTM8=&xsec_source=pc_share' },
  },
];

const LinkIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: '-1px', marginRight: '3px' }}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const VideoIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: '-1px', marginRight: '3px' }}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const ExternalLink = ({ href, icon, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mono"
    style={{
      color: 'var(--text-primary)',
      textDecoration: 'none',
      borderBottom: '1px solid transparent',
      paddingBottom: '1px',
      fontSize: '0.75rem',
    }}
    onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--text-primary)'}
    onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
  >
    {icon}{children}
  </a>
);

const Challenge = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4rem 1rem',
    }}>
      <div style={{ width: '100%', maxWidth: '640px' }}>
        <Link
          to="/"
          className="mono"
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: '2rem',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          &larr; Back
        </Link>

        <h1 className="mono" style={{
          fontSize: '1.8rem',
          fontWeight: '500',
          letterSpacing: '-0.03em',
          marginBottom: '0.75rem',
        }}>
          100 Day Challenge
        </h1>
        <p style={{
          fontSize: '0.95rem',
          color: 'var(--text-secondary)',
          marginBottom: '3rem',
          fontWeight: '300',
        }}>
          One product and one video, every day.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {challenges.map((c) => (
            <div key={c.day} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.45rem',
            }}>
              <div className="mono" style={{
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
              }}>
                Day {c.day} · {c.date}
              </div>
              <div style={{
                display: 'flex',
                gap: '0.75rem',
                flexWrap: 'wrap',
              }}>
                <ExternalLink href={c.product.url} icon={<LinkIcon />}>
                  {c.product.name} — {c.product.desc} ↗
                </ExternalLink>
                <ExternalLink href={c.video.url} icon={<VideoIcon />}>
                  {c.video.desc} ↗
                </ExternalLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenge;
