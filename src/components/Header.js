import { MainContext, useContext } from '../context';
import React, { useEffect, useState } from 'react';

function Header() {
  const { theme, appendMethods } = useContext(MainContext);

  const [logoText, setLogoText] = useState('deneme');

  useEffect(() => {
    appendMethods({ setLogoText });
  }, []);

  return (
    <div>
      <h3>{logoText}</h3>
      Current theme = {theme}
    </div>
  );
}

export default Header;
