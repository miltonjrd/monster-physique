import { Modal, CloseButton } from 'react-bootstrap';

const LoginModal = ({ show, setShow }) => {
  return (
    <Modal show={show}>
      <Modal.Header className="border-bottom-0">
        <CloseButton className="shadow-none" onClick={() => setShow(false)} />
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
  );
};

export default LoginModal;