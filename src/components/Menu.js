//dependencies
import { useEffect, useState, useRef, useContext } from 'react';
import { FaSyncAlt, FaTshirt, FaFillDrip, FaImage, FaDollarSign } from 'react-icons/fa'
import styled from 'styled-components';

// context
import SimulatorContext from '../context/SimulatorContext';

// components
import Colors from './menu/Colors';
import Templates from './menu/Templates';
import ImageUpload from './menu/ImageUpload';
import CartModal from './CartModal';

const MENU_TEMPLATES = 0;
const MENU_COLOR  = 1;
const MENU_IMAGE  = 2;

const StyledMenu = styled.aside`
  display: flex;

  ul {
    align-self: flex-start;
    background-color: #3e3e3a;
    width: 100px;
    border-radius: .5rem;
    list-style: none;
    padding: 0;
    margin: 0;

    &.active {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #fff;
      height: 100px;
      width: 100px;
      max-width: 980px;
      border-radius: .5rem;
      text-align: center;
      line-height: 1.2;

      &.gold {
        background-color: #ffe600;
        color: #000;

        :hover, &.active {
          background-color: #f7df00;
        }
      }

      :hover, &.active {
        cursor: pointer;
        background-color: #31312b;
      }
    }
  }

  .custom {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    height: 600px;
    width: 400px;
    border: 1px solid #3e3e3a;
    border-radius: .25rem;
    border-top-left-radius: 0;
  }
`;

const Right = ({ type }) => {

  return (
    <div className="custom p-4">
      {
        type === MENU_TEMPLATES ? 
        <Templates /> :
        type === MENU_COLOR ?
        <Colors /> :
        type === MENU_IMAGE ?
        <ImageUpload /> : null
      }
    </div>
  );
};

const Menu = () => {
  const [menuType, setMenuType] = useState(0);
  const [cartModalShow, setCartModalShow] = useState(false);
  const listRef = useRef();

  const handleItemClick = (evt, i) => {
    Array.from(listRef.current.querySelectorAll('li')).forEach((item) => {
      item.classList.remove('active');
    });

    evt.currentTarget.classList.add('active');
    listRef.current.classList.add('active');
    setMenuType(i);
  };

  return (
    <StyledMenu>
      <ul ref={listRef}>
        {
          [
            {
              label: 'Modelos',
              icon: ({ size, className }) => <FaTshirt size={size} className={className} />,
              className: ''
            },
            {
              label: 'Cor',
              icon: ({ size, className }) => <FaFillDrip size={size} className={className} />,
              className: ''
            },
            {
              label: 'Imagem',
              icon: ({ size, className }) => <FaImage size={size} className={className} />,
              className: ''
            }
          ].map((item, i) => (
            <li key={i} role="button" className={item.className} onClick={(evt) => handleItemClick(evt, i)}>
              <item.icon size={18} className="mb-2" />
              <span>{item.label}</span>
            </li>
          ))
        }
        <li role="button" className="gold" onClick={() => setCartModalShow(true)}>
          <FaDollarSign size={18} className="mb-2" />
            <span>Fazer oçamento</span>
          </li>
      </ul>
      <Right type={menuType} />
      <CartModal show={cartModalShow} setShow={setCartModalShow} />
    </StyledMenu>
  );
};

export default Menu;