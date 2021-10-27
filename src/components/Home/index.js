import React from 'react';
import background from 'src/assets/home/background-home-desktop.jpg';

import './styles.scss';

export default function Home() {


  return (
    <div className="home" style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      backgroundSize: 'cover',      
      objectFit: 'contain',
    }}>
      <div className="home__head">
        <div className="home__head__title">
          <h2><strong>00</strong> Home</h2>
          <h2><strong>01</strong> Destination</h2>
          <h2><strong>02</strong> Crew</h2>
          <h2><strong>03</strong> Technology</h2>
        </div>
      </div>
      <div className="home__contain">
        <p>So, you want to travel to
          <strong>Space</strong>
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
        </p>
        <span>Explore</span>
      </div>
      
    </div>
  );
}
