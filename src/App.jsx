import React from 'react';
import ArtBackground from './components/ArtBackground';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <>
      <ArtBackground />
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 1, 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '0 1rem'
      }}>
        <Hero />
        <SocialLinks />
      </div>
    </>
  );
}

export default App;
