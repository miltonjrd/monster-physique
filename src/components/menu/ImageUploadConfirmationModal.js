// dependencies
import { useContext } from 'react';
import { Modal } from 'react-bootstrap';

// context
import SimulatorContext from '../../context/SimulatorContext';

const ImageUploadConfirmationModal = ({ show, setShow, file }) => {
  const { context: simulatorContext, setContext: setSimulatorContext } = useContext(SimulatorContext);

  const handleSideChoose = (side) => {
    const images = simulatorContext.images[side];
    const id = !images.length ? 0 : (images[images.length - 1].id) + 1;
    const image = {
      id,
<<<<<<< HEAD
      file,
      position: {
        x: 0,
        y: 0
      }
=======
      src: URL.createObjectURL(file),
>>>>>>> f4c586bed62c4bd59062db4478135b6335897f99
    };
    setSimulatorContext((state) => {
      const newState = { 
        ...state, 
        images: { 
          ...state.images,
          [side]: [
            ...state.images[side],
            image
          ]
        }
      };

      return newState;
    })
    setShow(false);
  };

  return (
    <Modal show={show}>
      <Modal.Body>
        <p className="text-center">Selecione o lado onde deseja inserir esta imagem</p>
<<<<<<< HEAD
        <div className="d-flex justify-content-center gap-4">
=======
        <div className="d-flex">
>>>>>>> f4c586bed62c4bd59062db4478135b6335897f99
          <button type="button" className="btn btn-primary" onClick={() => handleSideChoose('front')}>Frente</button>
          <button type="button" className="btn btn-primary" onClick={() => handleSideChoose('back')}>Costas</button>
        </div>
      </Modal.Body>
    </Modal>
  );

};

export default ImageUploadConfirmationModal;