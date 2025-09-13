import React from 'react';

const CTASection = ({ data }) => {
  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <h2>{data.headline}</h2>
        <a href={data.cta.link} className="cta-button">{data.cta.text}</a>
        {data.cta.subtext && <p className="cta-subtext">{data.cta.subtext}</p>}
      </div>
    </section>
  );
};

export default CTASection;