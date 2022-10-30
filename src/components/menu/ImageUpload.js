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
  };

  return (
    <>
      <h5 className="fw-bold">Upload de imagem</h5>
    
      <div className="d-flex flex-column align-items-center">
        <div className="alert alert-warning" style={{ borderStyle: 'dashed' }}>
          Formatos suportados: PNG, JPG, SVG e PDF
        </div>

        <Dropzone 
          style={{ height: '150px' }} 
          mimeTypes={['image/png', 'image/jpeg', 'image/svg+xml']}
          onValidDrop={handleValidUpload}
        />
        <ImageUploadConfirmationModal 
          show={confirmationModalShow} 
          setShow={setConfirmationModalShow} 
          file={file}
        />
        <strong className='my-3'>ou</strong>
        <label>
          <span role="button" className="btn btn-primary rounded-pill px-3">Selecione o arquivo</span>
          <input 
            type="file" 
            className="d-none" 
            accept={['image/png', 'image/jpeg', 'image/svg+xml'].join(',')} 
            onChange={(evt) => handleValidUpload(evt.target.files[0])}
          />
        </label>
      </div>
    </>
  );
};

export default ImageUpload;