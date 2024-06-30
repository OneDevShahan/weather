import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Weather from './components/Weather';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className=" dark:bg-gray-900 min-h-screen">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Weather/>
    </div>
  );
}

export default App;
