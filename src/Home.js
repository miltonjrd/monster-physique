import React, { useState } from 'react'
import { Modal, CloseButton } from 'react-bootstrap';
import { Menu, LoginModal, ContainerShirt, ButtonShirt, Shirt } from './styles'
import { FaSyncAlt } from 'react-icons/fa'
import GlobalStyle from './styles/global'

import ShirtFront from './imagem/texturaFrente.png';

function Home() {
  const [resetModalShow, setResetModalShow] = useState(false);
  
  
  return (
    <main className="container">
      <div className="d-flex mx-4 mt-5">
        <Menu>
          <ul>
            <li className="active">
              <span>Modelos</span>
            </li>
            <li className="active">
              <span>Cor</span>
            </li>
            <li className="active">
              <span>Imagem</span>
            </li>
            <li className="active">
              <span>Modelos</span>
            </li>
          </ul>
          <div className="custom">

          </div>
        </Menu>
        <section className="d-flex flex-column justify-content-center ms-3">
          <ContainerShirt>
            <div className="d-flex justify-content-end">
              <button
                className="bg-dark border-0 rounded text-white p-2"
                style={{
                  width: "80px",
                  height: "80px",
                }}
              >
                Girar 180º
              </button>
            </div>
            <div className="text-center" style={{ flex: 1 }}>
              <img className="w-75" src={ShirtFront} alt="" />
            </div>
            <div className='d-flex justify-content-center'>
              <div className='bg-primary rounded-pill py-2 px-5'>
                <strong>Frente</strong>
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
