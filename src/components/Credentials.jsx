import React from 'react';

const Credentials = ({ data }) => {
  return (
    <section className="credentials">
      <div className="container">
        {/* <h3 className="credentials-title">{data.title}</h3> */}
        <div className="logos-container">
          {data.logos.map((logo, index) => (
            <img key={index} src={logo.url} alt={logo.name} className="client-logo" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;