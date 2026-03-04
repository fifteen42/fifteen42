import React from 'react';
import { Link } from 'react-router-dom';

const challenges = [
  {
    date: '2025.02.10',
    product: { name: 'Fooo', desc: 'A personal agent team', url: 'https://www.fooo.ooo/' },
    video: { desc: 'Most humans will work for agents within 10 years', url: 'https://www.xiaohongshu.com/discovery/item/698b42380000000015022f05?source=webshare&xhsshare=pc_web&xsec_token=ABnTxgyqVJLdyjFIou0KOrR2jTb0QI40Xt-0Mgs2atTM8=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.12',
    product: { name: 'acqu.ai', desc: 'AI marketplace for digital products & SaaS', url: 'https://acqu.ai/' },
    video: { desc: 'What is OpenClaw actually useful for? My hands-on experience', url: 'https://www.xiaohongshu.com/discovery/item/698ca082000000001d027e17?source=webshare&xhsshare=pc_web&xsec_token=ABsdlGbuB_iEMIcm5a_N_kDdeH4RgssiJ0bM6k7GPuaKE=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.13',
    product: { name: 'Agent Cards', desc: 'AI agents as cyberpunk trading cards with stats & rarity', url: 'https://agentcards.pro/' },
    video: { desc: 'Will acquiring software become as easy as shopping in the AI era?', url: 'https://www.xiaohongshu.com/discovery/item/698de8e3000000001503175e?source=webshare&xhsshare=pc_web&xsec_token=ABcw6UTjVwaHhx5v8aOBCovkdZi2eY2J-reP5v0kHsxSY=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.14',
    product: { name: 'X402', desc: 'HTTP 402 payment protocol for autonomous AI agent micropayments', url: 'https://www.pay402.pro/' },
    video: { desc: 'What can Claude Code freely create on its own?', url: 'https://www.xiaohongshu.com/discovery/item/698f4227000000001d01223b?source=webshare&xhsshare=pc_web&xsec_token=ABx7Rf5vYtcI91PbEUSoxycAPy75TwgiEZp2LDFIVeO_M=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.15',
    product: { name: 'Video2Skill', desc: 'Transform video content into structured skills for coding agents', url: 'https://video2skill.com' },
    video: { desc: 'Want to see a Mac Mini deploy OpenClaw tutorial?', url: 'https://www.xiaohongshu.com/discovery/item/69907986000000001600a037?source=webshare&xhsshare=pc_web&xsec_token=ABLvIDUJYDMuk5WqIOHj-KPlG4vb275y_xBPEDnGWsYX0=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.16',
    product: { name: 'Vigent', desc: 'AI agent platform', url: 'https://vigent.pro/' },
    video: { desc: 'Deploying OpenClaw on Mac Mini is such a hassle — cloud services are better', url: 'https://www.xiaohongshu.com/discovery/item/6991d06b000000001600a001?source=webshare&xhsshare=pc_web&xsec_token=ABqOeO1RNDIjR-ZGoucJdeKUDXJgwJmQc4gSVWL7oq2o0=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.17',
    product: { name: 'Soul', desc: 'Define your AI agent\'s personality, attitude & agency', url: 'https://soul.fooo.ooo/' },
    video: { desc: 'The father of lobster OpenClaw just joined OpenAI!', url: 'https://www.xiaohongshu.com/discovery/item/699278df000000001d0107c7?source=webshare&xhsshare=pc_web&xsec_token=ABwMxlWizK5z9a45ORmapjsDuKkci6hBjO39GGIju9uF0=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.17',
    product: { name: 'Productize', desc: 'Productize yourself with AI-powered personal branding', url: 'https://productize.fooo.ooo/' },
    video: { desc: 'How to productize yourself in the AI era', url: 'https://www.xiaohongshu.com/discovery/item/69947e110000000015022a7f?source=webshare&xhsshare=pc_web&xsec_token=ABv5jrhY4h0VFp jc_5BDzAUcH9kMC0gAfvCaxiLfePrBk=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.18',
    product: { name: 'Hello World', desc: 'AI productivity & production relations platform', url: 'https://hello-world.fooo.ooo/' },
    video: { desc: 'How to turn a Skill into a product?', url: 'https://www.xiaohongshu.com/discovery/item/6996dcd2000000001d01291b?source=webshare&xhsshare=pc_web&xsec_token=ABAydkHWI-Qu4T6pyOv51WrmiSBeXZczStJ-7fKj_O764=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.19',
    product: { name: 'Hello Fooo', desc: 'Connect your work, team, and AI without friction', url: 'https://hello-fooo.fooo.ooo/' },
    video: { desc: 'Skills are so useful!', url: 'https://www.xiaohongshu.com/discovery/item/6996e297000000001503109d?source=webshare&xhsshare=pc_web&xsec_token=ABAydkHWI-Qu4T6pyOv51WrskMPXUEo_o_vraVU8fvKDk=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.20',
    product: { name: 'AIBoost', desc: 'AI-powered enterprise efficiency & productivity platform', url: 'https://aiboost.fooo.ooo/' },
    video: { desc: 'How to turn videos into Skills', url: 'https://www.xiaohongshu.com/discovery/item/69986c33000000001600893f?source=webshare&xhsshare=pc_web&xsec_token=ABtTj9sunnhBiwwJpCYh2QDRNEVXSoeREXpjjO_T46dG8=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.21',
    product: { name: 'Bubble', desc: 'A lightweight VMM built from scratch in Rust', url: 'https://github.com/fooo-ooo/bubble' },
    video: { desc: 'Most programmers should become Agent engineers', url: 'https://www.xiaohongshu.com/discovery/item/6999c36a000000001d013b1d?source=webshare&xhsshare=pc_web&xsec_token=AB06a3P-VOlX8Ysv6yNXQGmQiRceQjDKaetTJEDcXPfgc=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.22',
    product: { name: 'AgentVerse', desc: 'Discover & evaluate next-generation AI agents', url: 'https://agentverse.fooo.ooo/' },
    video: { desc: 'If you can use CLI, don\'t use GUI anymore', url: 'https://www.xiaohongshu.com/discovery/item/699b131a000000001d025c5f?source=webshare&xhsshare=pc_web&xsec_token=AB9dFM3XKDqzfj1o-xQte9zP9LPqlfrzabnut6Bdr22V8=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.23',
    product: { name: 'CodArt', desc: 'A coding agent built from scratch', url: 'https://codart.fun' },
    video: { desc: 'Showing your face is like stamping your content', url: 'http://xhslink.com/o/5Alk9tCNtjs' },
  },
  {
    date: '2026.02.24',
    product: { name: 'Agentlas', desc: 'Compare top AI agent frameworks side-by-side', url: 'https://agentlas.pro/' },
    video: { desc: 'Everyone can vibe code — sales matter more now', url: 'https://www.xiaohongshu.com/discovery/item/699dc6fa00000000150307c1?source=webshare&xhsshare=pc_web&xsec_token=ABWDyRCw5nwas4nhK2-Re-SJPmAVrrzp6VOTdi-oQgR2c=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.25',
    product: { name: 'GIFcut', desc: 'Convert videos to GIFs in your browser', url: 'https://gifcut.fooo.ooo' },
    video: { desc: 'Code with Claude Code on your phone', url: 'https://www.xiaohongshu.com/discovery/item/699f08c70000000015030562?source=webshare&xhsshare=pc_web&xsec_token=ABSuLFQhNyQGTlX6adQ4hos_FmcwhvP_hbQJhZ0Yhb57o=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.26',
    product: { name: 'Rec', desc: 'Browser-based screen recording, no install needed', url: 'https://rec.fooo.ooo/' },
    video: { desc: 'A job that will definitely emerge: AI Efficiency Specialist', url: 'https://www.xiaohongshu.com/discovery/item/69a04925000000001b01752e?source=webshare&xhsshare=pc_web&xsec_token=AB4kcA7fNhytrau03klQ6WD4qDWRt1xqQRZnD_3BFCOms=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.27',
    product: { name: 'SaaS Boost', desc: 'AI-powered marketing engine for SaaS products', url: 'https://saasboost.fooo.ooo' },
    video: { desc: 'Counterintuitive: AI is massively increasing programmer jobs', url: 'https://www.xiaohongshu.com/discovery/item/69a1ac4e000000001d0269f2?source=webshare&xhsshare=pc_web&xsec_token=AB-Wxvn020Jp7JLEGseOfXCouS_bAQ7C6112dq7iekMlw=&xsec_source=pc_share' },
  },
  {
    date: '2026.02.28',
    product: { name: 'PicVid', desc: 'Turn images into video in your browser', url: 'https://picvid.fooo.ooo' },
    video: { desc: 'The Agent framework Pi behind OpenClaw is worth learning', url: 'https://www.xiaohongshu.com/discovery/item/69a305730000000015038706?source=webshare&xhsshare=pc_web&xsec_token=ABH8TL7yMQvXUB8WCBswOUFcCydLtFwIbxtC-lAjvdn1c=&xsec_source=pc_share' },
  },
  {
    date: '2026.03.01',
    product: { name: 'GEO', desc: 'Optimize content to be directly cited by AI', url: 'https://geo.fooo.ooo' },
    video: { desc: 'With AI, ideas are no longer enough', url: 'https://www.xiaohongshu.com/discovery/item/69a450e60000000015032448?source=webshare&xhsshare=pc_web&xsec_token=ABlBWmM6OdGQDqDHn0SWD2iyTqoR-i9FO-K-BlZYkTLxE=&xsec_source=pc_share' },
  },
  {
    date: '2026.03.02',
    product: { name: 'MoodFlow', desc: 'Track and understand your emotional journey', url: 'https://moodflow.fooo.ooo' },
    video: { desc: 'AI has reduced my use of WeChat Reading', url: 'https://www.xiaohongshu.com/discovery/item/69a5a47c000000001d013c5d?source=webshare&xhsshare=pc_web&xsec_token=ABMx_yRp4uXeHjRhnm6JaYFLGYY2ZN7nIGDOfKUEfFoSY=&xsec_source=pc_share' },
  },
  {
    date: '2026.03.03',
    product: { name: 'FundMate', desc: 'AI-powered fundraising agent for startups', url: 'https://fundmate.fooo.ooo' },
    video: { desc: 'Google Trends is a great tool for discovering real demand', url: 'https://www.xiaohongshu.com/discovery/item/69a6f23e000000001d0134a7?source=webshare&xhsshare=pc_web&xsec_token=ABHAVBXWbVB3xk0g8sHg_ThZinClQGlOv5A2DGUSV1N7g=&xsec_source=pc_share' },
  },
  {
    date: '2026.03.04',
    product: { name: 'Agent Studio', desc: 'AI-powered talent agency management platform', url: 'https://agent-studio.fooo.ooo' },
    video: { desc: 'Is being too controlling why you can\'t use OpenClaw well?', url: 'http://xhslink.com/o/3CE4gpZPRA4' },
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
            <div key={c.date} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.45rem',
            }}>
              <div className="mono" style={{
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
              }}>
                {c.date}
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
