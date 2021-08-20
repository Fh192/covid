import React from 'react';
import './App.css';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='container'>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default App;
