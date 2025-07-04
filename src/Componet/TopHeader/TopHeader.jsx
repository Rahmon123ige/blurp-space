import React, { useState, useEffect } from 'react';
import './TopHeader.css';
import Logo from '../../Data/logo.webp';

const TopHeader = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling UP
        setShowHeader(false);
      } else {
        // Scrolling DOWN or no movement
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`top-header ${showHeader ? 'visible' : 'hidden'}`}>
      <div className="top-left">Sell on Blurp Space</div>
      <div className="top-center">
        <img src={Logo} alt="Blurp Space" className="top-logo" />
      </div>
      <div className="top-right">Earn</div>
    </div>
  );
};

export default TopHeader;
