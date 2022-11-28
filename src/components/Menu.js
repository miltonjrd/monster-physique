//dependencies
import { useEffect, useState, useRef, useContext } from 'react';
import { FaSyncAlt, FaTshirt, FaFillDrip, FaImage, FaDollarSign } from 'react-icons/fa';
import { CloseButton } from 'react-bootstrap';
import domtoimage from 'dom-to-image';
import FileSaver, { fileSaver } from 'file-saver';
import styled from 'styled-components';

// context
import SimulatorContext from '../context/SimulatorContext';
import ModalContext from '../context/ModalContext';

// components
import Colors from './menu/Colors';
import Templates from './menu/Templates';
import ImageUpload from './menu/ImageUpload';
import CartModal from './CartModal';
import api from '../api';

const MENU_TEMPLATES = 0;
const MENU_COLOR  = 1;
const MENU_IMAGE  = 2;

const StyledMenu = styled.aside`
  display: flex;
  z-index: 1;

  ul {
    display: flex;
    flex-direction: column;
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

    @media screen and (max-width: 1366px) {
      width: 350px;
    }
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    ul {
      flex-direction: row;
      justify-content: center;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-radius: 0;
    }

    .custom {
      height: 300px;
      width: 100%;
      margin-bottom: 100px;
    }
  }
`;

const Right = ({ type, close }) => {

  return (
    <div className={`custom p-4 ${type === -1 ? 'invisible' : ''}`}>
      <div className="d-flex justify-content-end">
        <CloseButton onClick={close} />
      </div>
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
  const [activeMenu, setActiveMenu] = useState(-1);
  const { setContext: setModalContext } = useContext(ModalContext);
  const { context: simulatorContext } = useContext(SimulatorContext);

  return (
    <StyledMenu>
      <ul className={activeMenu !== -1 ? 'active' : ''}>
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
            <li 
            key={i} 
            role="button" 
            className={`${item.className} ${activeMenu === i ? 'active' : ''}`} 
            onClick={(evt) => setActiveMenu(i)}
            >

              <item.icon size={18} className="mb-2" />
              <small>{item.label}</small>
            </li>
          ))
        }
        <li 
          role="button" 
          className="gold" 
          onClick={async () => {
            const node = document.querySelector('#template-container');
            const formData = new FormData();
            const blob = await domtoimage.toBlob(node);
            console.log(blob)
            const data = {
              template_name: simulatorContext.template.name,
              template_id: simulatorContext.template.id,
              tissue: 'Algodao',
              quantity: 1,
              annex: blob
            };

            for (let key in data) {
              formData.append(key, data[key]);
            }
            api.post('cart', formData);

            setModalContext(state => ({ ...state, CART: true }));
          }}
        >
          <FaDollarSign size={18} className="mb-2" />
            <small>Fazer oçamento</small>
          </li>
      </ul>
      <Right type={activeMenu} close={() => setActiveMenu(-1)} />
    </StyledMenu>
  );
};

export default Menu;