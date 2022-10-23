// dependencies
import React, { useState, useRef } from 'react'
import { Modal, CloseButton } from 'react-bootstrap';
import { LoginModal, ContainerShirt, ButtonShirt, Shirt } from './styles'
import GlobalStyle from './styles/global'

// components
import Menu from './components/Menu';

//images
import ShirtFront from './imagem/texturaFrente.png';
import ShirtBack from './imagem/texturaCostas.png';

function Home() {
  const [resetModalShow, setResetModalShow] = useState(false);
  const frontShirtRef = useRef();
  
  return (
    <main className="container">
      <div className="d-flex mx-4 mt-5">
        <Menu frontShirtRef={frontShirtRef} />
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
          <ContainerShirt>
            <div>
              <div className="position-relative text-center" style={{ flex: 1 }}>
                <svg ref={frontShirtRef} height="368" viewBox="0 0 300 368" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42 70L28 45.5L27.5 45L18 68.5L15.5 82L12.5 100.5L11 119L7.5 134L0.5 155L1.5 156L13 159C15.5 159.833 20.6 161.5 21 161.5C21.4 161.5 30.1667 163.833 34.5 165L44 165.5H49.5L53 161L58 149.5L62 125L53.5 99.5L42 70Z" fill="#fff"/>
                  <path d="M258 70L272 45.5L272.5 45L282 68.5L284.5 82L287.5 100.5L289 119L292.5 134L299.5 155L298.5 156L287 159C284.5 159.833 279.4 161.5 279 161.5C278.6 161.5 269.833 163.833 265.5 165L256 165.5H250.5L247 161L242 149.5L238 125L246.5 99.5L258 70Z" fill="#fff"/>
                  <path d="M101 5L108.5 1L109.5 0.5L151.5 3L191.5 1.5L199 5L199.5 5.50002L209.5 10.5L228 19L244 27.5L262.5 38.5L272.5 45L257.5 70.5L250 91L238 125L242 150.5L240.5 155.5L239 210.5L237.5 224.5L238.5 252L239 280.5L242.5 313L245 322.5L247 342L249 352L251 358L248.5 360L225.5 367L195 368H81.5L67.5 366L53.5 361.5L50.5 359.5L50 357C50.5 355.833 51.5 353.4 51.5 353C51.5 352.6 52.8333 346.833 53.5 344L55 326L59 303.5L61 275.5L61.5 254L62.5 225L61 202V165.5L58 150L62.5 124.5L51.5 93.5L41.5 68L28 46L37.5 38L49 31.5L64.5 22.5L78 16L86.5 11.5L96.5 7.5L101 5Z" fill="#fff"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M110.667 7.41667L109 4.5L108 1L109.5 0.5L125.5 1.5L151 3L170.5 2L191.5 1.5L190.295 4.2541L192 1.5L198.5 4.5V7.5L196.5 10.5L192.5 17L186.5 23.5L179 29L171.5 33L162.5 35.5L153.5 37.5H146.5L141 37L129 34L121 30L113 24L108 18.5L102.5 10.5L101 7.5L101.5 5L103 4.5L107.5 1.5L109 4.5L110 6.5L110.667 7.41667ZM111.098 8.0098L121 9L129.5 10C131.833 10.1667 136.6 10.5 137 10.5C137.4 10.5 142.833 11.1667 145.5 11.5H152.5L165.5 11L176.5 10.5L186.993 9.58753L185.5 12L178.5 18.5L171 23.5L164 26L155.5 27.5H148.5L142.5 27L131.5 25L124.5 21.5L119 17.5L114 12L111.098 8.0098Z" fill="#fff"/>
                </svg>
                <img src={ShirtFront} alt="" tabIndex={-1} />
              </div>
              <div className='d-flex justify-content-center'>
                <div className='bg-primary rounded-pill py-2 px-5 mt-3'>
                  <strong>Frente</strong>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center" style={{ flex: 1 }}>
                <img src={ShirtBack} alt="" tabIndex={-1} />
              </div>
              <div className='d-flex justify-content-center'>
                <div className='bg-primary rounded-pill py-2 px-5 mt-3'>
                  <strong>Costas</strong>
                </div>
              </div>
            </div>

          </ContainerShirt>
          <button 
            className="btn btn-danger text-white px-4 mt-3 align-self-center"
            onClick={() => setResetModalShow(true)}
          >
            <strong>Resetar mudanças</strong>
          </button>
        </section>
        <Modal show={resetModalShow}>
          <Modal.Header>
            <h4 className="modal-title">Camisa modelo</h4>
            <CloseButton className="shadow-none" onClick={() => setResetModalShow(false)} />
          </Modal.Header>
          <Modal.Body>
            <p>Tem certeza que voce deseja dar o cu?</p>
          </Modal.Body>
          <Modal.Footer className="justify-content-stretch">
            <button type="button" className="btn btn-primary">Salvar</button>
          </Modal.Footer>
        </Modal>
      </div>
      <GlobalStyle />
    </main>
  );
}


export default Home;
