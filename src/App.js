// dependencies
import { useState, useContext } from 'react';

// components
import Header from './components/Header';

// pages
import Simulator from './pages/Simulator';

// context
import LoaderContext from './context/LoaderContext';

import './App.scss'

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ context: isLoading, setContext: setIsLoading }}>
      <div
        className={`${isLoading ? 'd-flex' : 'd-none'} justify-content-center align-items-center position-absolute w-100 h-100`}
        style={{
          backgroundColor: '#00000030',
          zIndex: 1060
        }}
      >
        <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} />
      </div>
      <Header />
      <Simulator />
    </LoaderContext.Provider>
  );
}

export default App;
