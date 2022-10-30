// dependencies
import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';

// context
import SimulatorContext from '../context/SimulatorContext';

// components
import Menu from '../components/Menu';
import TemplateContainer from '../components/TemplateContainer';
import ResetChangesModal from '../components/ResetChangesModal';

//images

const Home = () => {
  const [resetModalShow, setResetModalShow] = useState(false);
  
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

  useEffect(() => {
    const { front, back } = simulatorContext.templateRefs;

    const frontShapes = front.current.querySelectorAll('path');
    const backShapes = back.current.querySelectorAll('path');

    simulatorContext.custom.forEach((c, i) => {
      frontShapes[i].style.fill = c;
      backShapes[i].style.fill = c;
    })

  }, [simulatorContext]);
  
  return (
    <SimulatorContext.Provider 
      value={{ context: simulatorContext, setContext: setSimulatorContext }}
    >
      <main className="container">
        <div className="d-flex mx-4 mt-5">
            <Menu />
          <section className="bg-white border rounded-1 d-flex flex-column justify-content-center ms-3 p-3">
            <button
              className="d-none bg-dark border-0 rounded text-white p-2 align-self-end"
              style={{
                width: "80px",
                height: "80px",
              }}
            >
              Girar 180º
            </button>
            <TemplateContainer />
            <button 
              className="btn btn-danger text-white px-4 mt-3 align-self-center"
              onClick={() => setResetModalShow(true)}
            >
              <strong>Resetar mudanças</strong>
            </button>
            <ResetChangesModal show={resetModalShow} setShow={setResetModalShow} />
          </section>
        </div>
      </main>
    </SimulatorContext.Provider>
  );
}

export default Home;