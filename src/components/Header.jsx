import React from 'react';

const Header = ({ data }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <img src={data.logoUrl} alt="Logo" className="logo" />
        <nav>
          <a href={data.cta.link} className="cta-button primary-cta">{data.cta.text}</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;