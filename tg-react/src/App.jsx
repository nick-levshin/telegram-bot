import React from 'react';
import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div>
      work
      <button onClick={() => onClose()}>Cancel</button>
    </div>
  );
};

export default App;
