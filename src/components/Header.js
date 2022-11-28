// dependencies
import { useState, useContext } from 'react';
import styled from "styled-components";
import { AiOutlineShoppingCart } from 'react-icons/ai';

// components
import LoginModal from "./LoginModal";
import CartModal from './CartModal';

// context
import ModalContext from '../context/ModalContext';

// images
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  position: sticky;
  height: 80px;
  background: #fff;
  border-bottom: 1px solid #dee2e6;

  .header-item {
    color: gray;
    text-decoration: none;
    transition: color ease-out .15s;

    :hover {
      color: #000;
    }
  }
`;


const Header = () => {
  const { setContext: setModalContext } = useContext(ModalContext);

  return (
    <StyledHeader>
      <div className='container h-100 d-flex justify-content-between align-items-center'>
        <Link to="/" class="text-decoration-none text-warning text-uppercase">
          <strong>Monster Physique</strong>
        </Link>
        <nav className="h-100">
          <ul className='list-unstyled d-flex gap-5 h-100 align-items-center'>
            <li>
              <Link to="/" className='header-item'>Home</Link>
            </li>
            <li>
              <Link to="products" className='header-item'>Produtos</Link>
            </li>
            <li>
              <Link to="simulator" className='header-item'>Simulador</Link>
            </li>
          </ul>
        </nav>
        <button 
          className="border-0 btn p-0"
          title="Carrinho de compras"
          onClick={() => setModalContext(state => ({ ...state, CART: true }))}
        >
          <AiOutlineShoppingCart className='header-item' style={{ fontSize: 24 }} />
        </button>
      </div>
      <CartModal />

    </StyledHeader>
  );
};

export default Header;