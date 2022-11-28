// dependencies
import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';

// context
import SimulatorContext from '../context/SimulatorContext';

// components
import Header from '../components/Header';
import Landing from '../components/Landing';
import Depoiments from '../components/Depoiments';
import Footer from '../components/Footer';
import Produtos from '../components/Produtos';
import Contact from '../components/Contact';



//images

const Home = () => {
  
  return (
    <main className="mt-5">
        <Landing />
        <Produtos />
        <Depoiments />
        <Footer />
        <Contact />
    </main>
  );
}

export default Home;