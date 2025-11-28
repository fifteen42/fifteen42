import React from 'react';
import Sketch from 'react-p5';

const ArtBackground = () => {
  let particles = [];
  const numParticles = 100; // Reduced from 300 for "fewer lines"
  const noiseScale = 0.003; // Smoother flow
  let zOff = 0;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background(255);
    p5.noFill();
    
    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      spawnParticle(p5, true); 
    }
  };

  const spawnParticle = (p5, forceEdge = false) => {
    let p = {
      pos: p5.createVector(0, 0),
      vel: p5.createVector(0, 0),
      acc: p5.createVector(0, 0),
      maxSpeed: p5.random(0.5, 1.5), // Slower, more chill
      prevPos: p5.createVector(0, 0),
      life: p5.random(255)
    };

    // Always spawn at edges or random, but if random, ensure it's not in center
    if (forceEdge || p5.random() > 0.5) {
      if (p5.random() > 0.5) {
        p.pos.x = p5.random() > 0.5 ? 0 : p5.width;
        p.pos.y = p5.random(p5.height);
      } else {
        p.pos.x = p5.random(p5.width);
        p.pos.y = p5.random() > 0.5 ? 0 : p5.height;
      }
    } else {
      // Random position but retry if in center
      do {
        p.pos.x = p5.random(p5.width);
        p.pos.y = p5.random(p5.height);
      } while (isInCenter(p5, p.pos));
    }
    
    p.prevPos.set(p.pos);
    particles.push(p);
  };

  const isInCenter = (p5, pos) => {
    let centerX = p5.width / 2;
    let centerY = p5.height / 2;
    let safeRadius = Math.min(p5.width, p5.height) * 0.4; // 40% safe zone
    let d = p5.dist(pos.x, pos.y, centerX, centerY);
    return d < safeRadius;
  };

  const draw = (p5) => {
    p5.noStroke();
    p5.fill(255, 5); // Slow fade
    p5.rect(0, 0, p5.width, p5.height);

    zOff += 0.001; // Slower evolution

    particles.forEach((p) => {
      let angle = p5.noise(p.pos.x * noiseScale, p.pos.y * noiseScale, zOff) * p5.TWO_PI * 2;
      let v = p5.createVector(p5.cos(angle), p5.sin(angle));
      
      p.acc.add(v);
      p.vel.add(p.acc);
      p.vel.limit(p.maxSpeed);
      p.pos.add(p.vel);
      p.acc.mult(0);

      // Check if inside safe zone
      if (!isInCenter(p5, p.pos)) {
        // Draw only if outside safe zone
        p5.stroke(0, 30); // Faint
        p5.strokeWeight(0.5);
        p5.line(p.pos.x, p.pos.y, p.prevPos.x, p.prevPos.y);
      } else {
        // If it enters center, kill it and respawn at edge
        // This prevents "bunching" or "convergence" lines pointing to center
        spawnParticle(p5, true);
        // Update the particle in the array
        p.pos.set(particles[particles.length - 1].pos);
        p.prevPos.set(p.pos);
        // Remove the temp added particle from spawnParticle call to avoid growing array
        particles.pop(); 
      }

      p.prevPos.set(p.pos);

      // Wrap edges or respawn
      if (p.pos.x > p5.width || p.pos.x < 0 || p.pos.y > p5.height || p.pos.y < 0) {
        if (p5.random() > 0.5) {
           spawnParticle(p5, true);
           p.pos.set(particles[particles.length - 1].pos);
           p.prevPos.set(p.pos);
           particles.pop();
        } else {
           // Wrap
           if (p.pos.x > p5.width) { p.pos.x = 0; p.prevPos.x = 0; }
           if (p.pos.x < 0) { p.pos.x = p5.width; p.prevPos.x = p5.width; }
           if (p.pos.y > p5.height) { p.pos.y = 0; p.prevPos.y = 0; }
           if (p.pos.y < 0) { p.pos.y = p5.height; p.prevPos.y = p5.height; }
        }
      }
    });
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.background(255);
    particles = [];
    setup(p5, p5.canvas.parentElement);
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
};

export default ArtBackground;
