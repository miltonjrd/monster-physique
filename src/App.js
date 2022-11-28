// dependencies
import { useState, useContext, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// components
import Header from './components/Header';
import Popups from './components/Popups';

// pages
import Simulator from './pages/Simulator';
import AppRoutes from './AppRoutes';

// context
import LoaderContext from './context/LoaderContext';
import ModalContext from './context/ModalContext';
import PopupContext from './context/PopupContext';
import SimulatorContext from './context/SimulatorContext';

import './App.scss'

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [popups, setPopups] = useState([]);
  const [modalsState, setModalsState] = useState({
    CART: false
  });

  const templateFrontRef = useRef();
  const templateBackRef = useRef();

  const [simulatorContext, setSimulatorContext] = useState({
    custom: [],
    images: {
      front: [],
      back: []
    },
    templateRefs: {
      back: templateBackRef,
      front: templateFrontRef
    }
  });

  return (
    <Router>
      <PopupContext.Provider value={{ context: popups, setContext: setPopups }}>
        <LoaderContext.Provider value={{ context: isLoading, setContext: setIsLoading }}>
          <ModalContext.Provider value={{ context: modalsState, setContext: setModalsState }}>
            <SimulatorContext.Provider 
              value={{ context: simulatorContext, setContext: setSimulatorContext }}
            >
              <div
                className={`${isLoading ? 'd-flex' : 'd-none'} justify-content-center align-items-center position-absolute w-100 h-100`}
                style={{
                  backgroundColor: '#00000040',
                  zIndex: 1060
                }}
              >
                <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} />
              </div>
              <Popups />
              <Header />
              <AppRoutes />
            </SimulatorContext.Provider>
          </ModalContext.Provider>
        </LoaderContext.Provider>
      </PopupContext.Provider>
    </Router>
  );
}

export default App;
