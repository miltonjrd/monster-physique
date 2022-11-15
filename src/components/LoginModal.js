// dependencies
import { useState, useContext } from 'react';
import { Modal, CloseButton } from 'react-bootstrap';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import api from '../api';

// context
import LoaderContext from '../context/LoaderContext';

const LoginModal = ({ show, setShow }) => {
  const [showPassword, setShowPassword] = useState(false);

  const { setContext: setIsLoading } = useContext(LoaderContext);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const { identifier, password } = evt.target;
    
    const data = {
      identifier: identifier.value,
      password: password.value
    };

    try {
      setIsLoading(true);
      const res = await api.post('api/auth/user', data);
      console.log(res.data.message);
      sessionStorage.setItem('authorization', res.data.token);
    } catch (err) {
      console.log(err.response.data.message);
    }

    setIsLoading(false);
  };

  return (
    <Modal show={show}>
      <Modal.Header className="border-bottom-0">
        <CloseButton className="shadow-none" onClick={() => setShow(false)} />
      </Modal.Header>
      <Modal.Body>
        <div className="form-title text-center">
          <h4>Login</h4>
        </div>
        <form className="d-flex flex-column text-center gap-2" onSubmit={handleSubmit}>
          <div className="form-floating">
            <input id="identifier" name="identifier" type="text" className="form-control" placeholder=" " autoComplete='off'/>
            <label for="identifier">Email ou nome de usuário</label>
          </div>
          <div className="form-floating">
            <div className="form-control d-flex align-items-center">
              <input 
                id="password"
                name="password" 
                type={showPassword ? 'text' : 'password'}
                placeholder=" " 
                className='border-0'
                style={{ 
                  flex: 1,
                  height: 24 
                }} 
              />
              <button 
                type="button" 
                className="bg-transparent border-0" 
                title="Mostrar senha"
                onClick={() => setShowPassword(!showPassword)}
              >
                {
                  showPassword ? 
                  <AiFillEyeInvisible className="text-secondary" style={{ fontSize: 24 }} /> : 
                  <AiFillEye className="text-secondary" style={{ fontSize: 24 }} />
                }
              </button>
            </div>
            <label for="password">Senha</label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <span>Crie sua conta <a href="#a" className="text-info">Clique Aqui</a>.</span>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;