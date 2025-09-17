import React, { useContext } from 'react';
import { Context } from '../Context';

const Header = ({ data }) => {
  const { language, changeLanguage } = useContext(Context);

  return (
    <header className="header">
      <div className="container header-container">
        <img src={data.logoUrl} alt="Logo" width="200" className="logo" />
        <nav className="nav">
          <div className="language-switcher">
            <button
              className="lang-button"
              onClick={() => changeLanguage("de")}
              disabled={language === "de"}
            >
              DE
            </button>
            <button
              className="lang-button"
              onClick={() => changeLanguage("en")}
              disabled={language === "en"}
            >
              EN
            </button>
          </div>
        
        </nav>
      </div>
    </header>
  );
};

export default Header;