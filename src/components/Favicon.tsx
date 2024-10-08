import React, { useEffect } from 'react';

const Favicon: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  useEffect(() => {
    const favicon = document.getElementById('favicon') as HTMLLinkElement;

    if (darkMode) {
      favicon.href = '/logo-dark-group.svg'; 
    } else {
      favicon.href = '/logo-group.svg';
    }
  }, [darkMode]);

  return null;
};

export default Favicon;
