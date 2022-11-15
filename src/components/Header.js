// dependencies
import { useState } from 'react';
import styled from "styled-components";

// components
import LoginModal from "./LoginModal";

// images
import Logo from '../images/logo.png';

const StyledHeader = styled.header`
  position: sticky;
  height: 80px;
  background: #fff;
  box-shadow: 0 2px 2px rgb(0, 0, 0, .2), 0 4px 4px rgb(0, 0, 0, .1);
<<<<<<< HEAD

  @media screen and (max-height: 720px) {
    height: 70px;
  }
=======
>>>>>>> f4c586bed62c4bd59062db4478135b6335897f99
`;

const Header = () => {
  const [loginModalShow, setLoginModalShow] = useState(false);

  return (
    <StyledHeader>
      <div className="container h-100 d-flex justify-content-between align-items-center">
        {/* <img src={Logo} alt="Logo" /> */}
        <div></div>
        <button 
          className="btn btn-primary rounded-pill py-2 px-5" 
          type="button"
          onClick={() => setLoginModalShow(true)}
        >
          <strong>Login</strong>
        </button>
        <LoginModal show={loginModalShow} setShow={setLoginModalShow} />
      </div>
    </StyledHeader>
  );
};

export default Header;