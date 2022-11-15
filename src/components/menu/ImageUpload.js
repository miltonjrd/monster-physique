// dependencies
import { useState } from 'react';

// components
import ImageUploadConfirmationModal from './ImageUploadConfirmationModal';
import Dropzone from '../Dropzone';

const ImageUpload = () => {
  const [confirmationModalShow, setConfirmationModalShow] = useState(false);
  const [file, setFile] = useState(null);

  const handleValidUpload = (file) => {
    setFile(file);
    setConfirmationModalShow(true);
<<<<<<< HEAD
    
=======
>>>>>>> f4c586bed62c4bd59062db4478135b6335897f99
  };

  return (
    <>
      <h5 className="fw-bold">Upload de imagem</h5>
    
<<<<<<< HEAD
      <div className="d-flex flex-column align-items-center" style={{ overflowY: 'scroll' }}>
=======
      <div className="d-flex flex-column align-items-center">
>>>>>>> f4c586bed62c4bd59062db4478135b6335897f99
        <div className="alert alert-warning" style={{ borderStyle: 'dashed' }}>
          Formatos suportados: PNG, JPG, SVG e PDF
        </div>

        <Dropzone 
<<<<<<< HEAD
          className="hide-on-tablet"
          style={{ minHeight: '150px' }} 
=======
          style={{ height: '150px' }} 
>>>>>>> f4c586bed62c4bd59062db4478135b6335897f99
          mimeTypes={['image/png', 'image/jpeg', 'image/svg+xml']}
          onValidDrop={handleValidUpload}
        />
        <ImageUploadConfirmationModal 
          show={confirmationModalShow} 
          setShow={setConfirmationModalShow} 
          file={file}
        />
<<<<<<< HEAD
        <strong className='hide-on-tablet my-3'>ou</strong>
=======
        <strong className='my-3'>ou</strong>
>>>>>>> f4c586bed62c4bd59062db4478135b6335897f99
        <label>
          <span role="button" className="btn btn-primary rounded-pill px-3">Selecione o arquivo</span>
          <input 
            type="file" 
            className="d-none" 
            accept={['image/png', 'image/jpeg', 'image/svg+xml'].join(',')} 
<<<<<<< HEAD
            onChange={(evt) => {
              handleValidUpload(evt.target.files[0]);
              evt.target.value = null;
            }}
=======
            onChange={(evt) => handleValidUpload(evt.target.files[0])}
>>>>>>> f4c586bed62c4bd59062db4478135b6335897f99
          />
        </label>
      </div>
    </>
  );
};

export default ImageUpload;