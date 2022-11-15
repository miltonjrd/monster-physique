//dependencies
import { useEffect, useState, useRef, useContext } from 'react';
import { CloseButton } from 'react-bootstrap';
import { FaSyncAlt, FaTshirt, FaFillDrip, FaImage, FaDollarSign } from 'react-icons/fa'
import styled from 'styled-components';
import api from '../api';

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
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    background-color: #3e3e3a;
    width: 100px;
    border-radius: .5rem;
    list-style: none;
    padding: 0;
    margin: 0;
    z-index: 1;

    &.active {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;

      & + .custom {
        visibility: visible;

      }

      li.active {
        background-color: #31312b;
      }
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


      :hover {
        cursor: pointer;
        background-color: #31312b;
      }
    }

    @media screen and (max-width: 480px) {
      position: absolute;
      bottom: 0;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      border-radius: 0;

      li {
        border-radius: 0;
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
    visibility: hidden;

    @media screen and (max-width: 1280px) {
      width: 325px;
    }

    @media screen and (max-width: 480px) {
      position: absolute;
      bottom: 100px;
      width: 100%;
      z-index: 1;
      height: 250px;
    }
  }

  @media screen and (max-width: 480px) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    
  }
`;

const Right = ({ type, listRef }) => {

  return (
    <div className="custom p-4">
      <div className="d-flex justify-content-end">
        <CloseButton onClick={() => listRef.current.classList.remove('active')} />
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
  const [menuType, setMenuType] = useState(0);
  const [cartModalShow, setCartModalShow] = useState(false);
  const listRef = useRef();
  const { context: simulatorContext } = useContext(SimulatorContext);

  const handleItemClick = (evt, i) => {
    Array.from(listRef.current.querySelectorAll('li')).forEach((item) => {
      item.classList.remove('active');
    });

    evt.currentTarget.classList.add('active');
    listRef.current.classList.add('active');
    setMenuType(i);
  };

  const handleBudgetOrder = () => {
    const data = {
      template_id: simulatorContext.template,
      color_fill: '#ffffff',
      images_positions: {
        front: simulatorContext.images.front.map(image => ({ ...image.position })),
        back: simulatorContext.images.back.map(image => ({ ...image.position })),
      }
    };

    const images = {
      front: simulatorContext.images.front.map(image => image.file),
      back: simulatorContext.images.back.map(image => image.file)
    };

    const formData = new FormData();

    formData.append('template_id', 1);
    formData.append('color_fill', data.color_fill);
    images.front.forEach((file) => {
      formData.append('images_front[]', file);
    });
    images.back.forEach((file) => {
      formData.append('images_back[]', file);
    });
    formData.append('images_front_pos', JSON.stringify(data.images_positions.front));
    formData.append('images_back_pos', JSON.stringify(data.images_positions.back));
    
    api.post('/budgets', formData, {
      'Content-Type': 'multipart/form-data'
    });
  };

  return (
    <StyledMenu className="me-3">
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
            <li 
              key={i} 
              role="button" 
              className={item.className} 
              onClick={(evt) => {
                handleItemClick(evt, i);
                item.onClick && item.onClick();
              }}
            >
              <item.icon size={18} className="mb-2" />
              <small>{item.label}</small>
            </li>
          ))
        }
        <li className='gold' role="button" onClick={() => setCartModalShow(true)}>
          <FaDollarSign size={18} className="mb-2" />
          <small style={{ lineHeight: 1.1 }}>Fazer orçamento</small>
        </li>
      </ul>
      <Right listRef={listRef} type={menuType} />
      <CartModal show={cartModalShow} setShow={setCartModalShow} />
    </StyledMenu>
  );
};

export default Menu;