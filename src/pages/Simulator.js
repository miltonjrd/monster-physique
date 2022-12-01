// dependencies
import { useEffect, useState, useRef, useContext } from 'react'
import styled from 'styled-components';

// context
import SimulatorContext from '../context/SimulatorContext';

// components
import Menu from '../components/Menu';
import TemplateContainer from '../components/TemplateContainer';

const Container =  styled.div`
  display: flex;
  margin-top: 3rem;

  @media screen and (max-width: 1366px) {
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
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

  const { context: simulatorContext } = useContext(SimulatorContext);
  
  return (
    <main className="container">
      <Container className="mx-4">
        <Menu />
        <section className="bg-white border rounded-1 d-flex flex-column justify-content-center p-3">
          <TemplateContainer />            
        </section>
      </Container>
    </main>
  );
}

export default Simulator;