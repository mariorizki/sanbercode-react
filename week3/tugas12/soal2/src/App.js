import React, { useState } from 'react';
import Mycomponents from './components/MyComponents';
import { ThemeContext } from './themeContext';

const App = () => {
  const changeThemeHandler = () => {
    setState(currentTheme => ({
      theme: currentTheme.theme === 'dark' ? 'white' : 'dark',
      changeThemeHandler: changeThemeHandler
    }));
  };

  const [state, setState] = useState({
    theme: 'dark',

    changeThemeHandler: changeThemeHandler
  });

  return (
    <ThemeContext.Provider value={state}>
      <Mycomponents />
    </ThemeContext.Provider>
  );
};

export default App;
