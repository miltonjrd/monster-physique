// dependencies
<<<<<<< HEAD
import { useState, useContext } from 'react';
=======
>>>>>>> f4c586bed62c4bd59062db4478135b6335897f99

// components
import Header from './components/Header';

// pages
<<<<<<< HEAD
import Simulator from './pages/Simulator';

// context
import LoaderContext from './context/LoaderContext';
=======
import Home from './pages/Home';
>>>>>>> f4c586bed62c4bd59062db4478135b6335897f99

import './App.scss'

const App = () => {
<<<<<<< HEAD
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
=======
  
  return (
    <>
      <Header />
      <Home />
    </>
>>>>>>> f4c586bed62c4bd59062db4478135b6335897f99
  );
}

export default App;
