import React from 'react';
import { MainContext, useContext } from '../context';
import ThemeSwitcher from './ThemeSwitcher';

function Footer() {
  const { setLogoText } = useContext(MainContext);

  const switchLogoText = () => {
    // burada ne yapacağız?
    setLogoText('test');
  };

  return (
    <div>
      footer component <br />
      <ThemeSwitcher />
      <button onClick={switchLogoText}>Switch Logo Text</button>
    </div>
  );
}

export default Footer;
