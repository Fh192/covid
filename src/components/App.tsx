import React from 'react';
import './App.css';
import Main from './Main/Main';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='container'>
        <div className="placeholder"></div>
        <Main />
      </div>
    </div>
  );
};

export default App;
