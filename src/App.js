import { useState } from 'react';
import { Modal, CloseButton } from 'react-bootstrap';

import Home from './Home';

import { Header, Button } from './styles';

import './App.scss'

function App() {
  const [loginModalShow, setLoginModalShow] = useState(false);

  return (
    <>
      <Header>
        <div className="container h-100 d-flex justify-content-between align-items-center">
          <h4>Logo</h4>
          <button 
            className="btn btn-primary rounded-pill py-2 px-5" 
            type="button"
            onClick={() => setLoginModalShow(true)}
          >
            <strong>Login</strong>
          </button>
          <Modal show={loginModalShow}>
            <Modal.Header className="border-bottom-0">
              <CloseButton className="shadow-none" onClick={() => setLoginModalShow(false)} />
            </Modal.Header>
            <Modal.Body>
              <div className="form-title text-center">
                <h4>Login</h4>
              </div>
              <form className="d-flex flex-column text-center gap-2">
                <input type="email" className="form-control" placeholder="Seu email" />
                <input type="password" className="form-control" placeholder="Sua senha"></input>
                <button type="button" className="btn btn-primary">Login</button>
              </form>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
              <div className="signup-section">Crie sua conta <a href="#a" className="text-info">Clique Aqui</a>.</div>
            </Modal.Footer>
          </Modal>
        </div>
      </Header>
      <Home />
    </>
  );
}

export default App;
