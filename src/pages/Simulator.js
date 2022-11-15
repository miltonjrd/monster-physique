// dependencies
import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';

// context
import SimulatorContext from '../context/SimulatorContext';

// components
import Menu from '../components/Menu';
import TemplateContainer from '../components/TemplateContainer';

const Container =  styled.div`
  margin-top: 3rem;

  @media screen and (max-width: 1024px) {
    margin-top: 1rem;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    margin: 0 !important;

    section {
      width: 100%;
    }
  }
`;

const Simulator = () => {
  
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
    });

  }, [simulatorContext]);
  
  return (
    <SimulatorContext.Provider 
      value={{ context: simulatorContext, setContext: setSimulatorContext }}
    >
      <main className="container">
        <Container className="d-flex mx-4">
          <Menu />
          <section className="bg-white border rounded-1 d-flex flex-column justify-content-center p-3">
            <TemplateContainer />            
          </section>
        </Container>
      </main>
    </SimulatorContext.Provider>
  );
}

export default Simulator;