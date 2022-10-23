//dependencies
import { useState, useRef } from 'react';
import { FaSyncAlt, FaTshirt, FaFillDrip, FaImage, FaDollarSign } from 'react-icons/fa'
import { Menu as StyledMenu } from '../styles';
import styled from 'styled-components';

// images
import ShirtFront from '../imagem/texturaFrente.png';

const MenuRightModelItem = styled.div`
  :hover {
    background-color: #f8f9fa;
    cursor: pointer;
  }
`;

const MENU_MODELS = 0;
const MENU_COLOR  = 1;
const MENU_IMAGE  = 2;
const MENU_BOUGHT = 3;

const MenuRight = ({ type, frontShirtRef }) => {

  const Models = () => (
    <>
      <h5 className="m-3">
        <strong>Modelos</strong>
      </h5>
      <div className="row mx-auto gx-0 gap-3 justify-content-center" style={{ overflowY: 'scroll' }}>
        {
          new Array(12).fill(0).map(() => (
            <MenuRightModelItem className="col-5 text-center p-2 rounded" >
              <img className="mb-3" style={{ height: '100px' }} src={ShirtFront} alt="" />
              <p style={{ lineHeight: 1.2 }}>
                <small className="mt-2">BLUSA COM RECORTE LATERAL</small>
              </p>
            </MenuRightModelItem>
          ))
        }
      </div>
    </>
  );

  const Color = () => {
    const MOCKUP_LEFT_SLEEVE = 0;
    const MOCKUP_RIGHT_SLEEVE = 1;
    const MOCKUP_BODY = 2;
    const MOCKUP_COLLAR = 3;

    const handleColorChange = (evt, shapeId) => {
      const color = evt.target.value;

      const shapes = frontShirtRef.current.querySelectorAll('path');

      shapes[shapeId].style.fill = color;
    };

    return (
      <>
        <h5 className="m-3">
          <strong>Cor</strong>
        </h5>
        <div className="d-flex flex-column">
          <div>
            <small>Manga esquerda</small>
            <input type="color" defaultValue="#ffffff" onChange={(evt) => handleColorChange(evt, MOCKUP_LEFT_SLEEVE)} />
          </div>
          <div>
            <small>Manga direita</small>
            <input type="color" defaultValue="#ffffff" onChange={(evt) => handleColorChange(evt, MOCKUP_RIGHT_SLEEVE)} />
          </div>
          <div>
            <small>Tronco</small>
            <input type="color" defaultValue="#ffffff" onChange={(evt) => handleColorChange(evt, MOCKUP_BODY)} />
          </div>
          <div>
            <small>Gola</small>
            <input type="color" defaultValue="#ffffff" onChange={(evt) => handleColorChange(evt, MOCKUP_COLLAR)} />
          </div>
        </div>
      </>
    ) 
  };

  return (
    <div className="custom p-2">
      {
        type === MENU_MODELS ? 
        <Models /> :
        type === MENU_COLOR ?
        <Color />: null
      }
    </div>
  );
};

const Menu = ({ frontShirtRef }) => {
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
            <li role="button" className={item.className} onClick={(evt) => handleItemClick(evt, i)}>
              <item.icon size={24} />
              <span>{item.label}</span>
            </li>
          ))
        }
      </ul>
      <MenuRight frontShirtRef={frontShirtRef} type={menuType} />
    </StyledMenu>
  );
};

export default Menu;