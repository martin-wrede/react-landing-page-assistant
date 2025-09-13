
import React, { useState } from 'react';
import './App.css';

// Import data
import contentData from './data/content.json';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import Credentials from './components/Credentials';
import Features from './components/Features';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  // Beispiel, wie man einen Block ein- oder ausblenden könnte
  const [showFAQ] = useState(true);

  return (
    <div className="App">
      <Header data={contentData.header} />
      
      <main>
        <Hero data={contentData.hero} />
        <Credentials data={contentData.credentials} />
        <Features data={contentData.features} />
        
        {/* Hier ist das Beispiel zum Ausblenden. Sie können das mit jedem Block machen. */}
        {showFAQ && <FAQ data={contentData.faq} />}
        
        <CTASection data={contentData.ctaSection} />
      </main>

      <Footer data={contentData.footer} />
    </div>
  );
}

export default App;