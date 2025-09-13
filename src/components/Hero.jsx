import React from 'react';

const Hero = ({ data }) => {
  return (
    <section className="hero">
      <div className="container">
        <h1>{data.headline}</h1>
        <p className="subheadline">{data.subheadline}</p>
        <a href={data.cta.link} className="cta-button">{data.cta.text}</a>
        <div className="hero-image-container">
            <img src={data.imageUrl} alt="Hero" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;