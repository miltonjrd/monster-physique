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

const MENU_TEMPLATES = 0;
const MENU_COLOR  = 1;
const MENU_IMAGE  = 2;
const MENU_BOUGHT = 3;

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
      border-radius: .5rem;
      text-align: center;

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
              icon: ({ size }) => <FaTshirt size={size} />,
              className: ''
            },
            {
              label: 'Cor',
              icon: ({ size }) => <FaFillDrip size={size} />,
              className: ''
            },
            {
              label: 'Imagem',
              icon: ({ size }) => <FaImage size={size} />,
              className: ''
            },
            {
              label: 'Fazer orçamento',
              icon: ({ size }) => <FaDollarSign size={size} />,
              className: 'gold'
            }
          ].map((item, i) => (
            <li key={i} role="button" className={item.className} onClick={(evt) => handleItemClick(evt, i)}>
              <item.icon size={24} />
              <span>{item.label}</span>
            </li>
          ))
        }
      </ul>
      <Right type={menuType} />
    </StyledMenu>
  );
};

export default Menu;