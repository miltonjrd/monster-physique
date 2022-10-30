// dependencies
import { useContext } from 'react';
import { Modal, CloseButton } from 'react-bootstrap';

// context
import SimulatorContext from '../context/SimulatorContext';

const ResetChangesModal = ({ show, setShow }) => {
  const { context: simulatorContext, setContext: setSimulatorContext } = useContext(SimulatorContext);
  
  const handleAccept = () => {
    setSimulatorContext((state) => {
      return {
        ...state,
        custom: state.custom.map(() => '#fff'),
        images: {
          front: [],
          back: []
        }
      };
    });

    setShow(false);
  };


  return (
    <Modal show={show}>
      <Modal.Body>
        <p className="text-center">Tem certeza de que deseja resetar as suas mudanças neste modelo?</p>
        <div className="d-flex justify-content-between">
          <button 
            type="button"
            className="btn btn-danger text-white"
            onClick={() => setShow(false)}
          >
            Cancelar
          </button>
          <button 
            type="button" 
            className="btn btn-primary px-4" 
            onClick={handleAccept}
          >
            Sim
          </button>
        </div>
      </Modal.Body>
        
    </Modal>
  );
};

export default ResetChangesModal;