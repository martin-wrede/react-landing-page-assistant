import React from 'react';

const Hero = ({ data }) => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${data.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-overlay">
        <div className="container">
          <h1>{data.headline}</h1>
          <p className="subheadline">{data.subheadline}</p>
          <div className="hero-cta-buttons">
            <a href={data.cta1.link} className="cta-button">{data.cta1.text}</a>
            <a href={data.cta2.link} className="cta-button">{data.cta2.text}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;