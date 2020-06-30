import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext';

import './MyPage.css';

const MyPage = () => {
  const { theme, changeThemeHandler } = useContext(ThemeContext);
  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <h1>{theme === 'dark' ? 'Hello World' : 'Halo Dunia'}</h1>
      <button onClick={changeThemeHandler}>
        {theme === 'dark'
          ? 'Change Language to Indonesia'
          : 'Ubah Bahasa ke Inggris'}
      </button>
    </div>
  );
};

export default MyPage;
