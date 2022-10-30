//dependencies
import { useEffect, useState, useRef, useContext } from 'react';
import { FaSyncAlt, FaTshirt, FaFillDrip, FaImage, FaDollarSign } from 'react-icons/fa'
import styled from 'styled-components';

// context
import SimulatorContext from '../context/SimulatorContext';

// images
import ShirtFront from '../images/texturaFrente.png';

const MenuRightModelItem = styled.div`
  :hover {
    background-color: #f8f9fa;
    cursor: pointer;
  }
`;

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

const Templates = () => (
  <>
    <h5 className="mb-3">
      <strong>Modelos</strong>
    </h5>
    <div className="row mx-auto gx-0 gap-3 justify-content-center" style={{ overflowY: 'scroll' }}>
      {
        new Array(12).fill(0).map((_, i) => (
          <MenuRightModelItem className="col-5 text-center p-2 rounded" key={i}>
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

const ColorPicker= ({ feature, colors, onAccordionOpen }) => {
  const colorPickerAccordion = useRef();
  const colorPickerBtn = useRef();

  const { context: simulatorContext, setContext: setSimulatorContext } = useContext(SimulatorContext);

  const onColorPick = (color) => {
    
    setSimulatorContext((state) => {
      const newCustom = [...state.custom];
      newCustom[feature.id] = color;
      return {
        ...state,
        custom: newCustom
      };
    });
  };

  return (
    <div className="d-flex flex-column gap-2">
      <small className="text-muted">{feature.label}</small>
      <button 
        ref={colorPickerBtn}
        className="border rounded"
        style={{
          backgroundColor: simulatorContext.custom[feature.id] || '#fff',
          height: '25px',
          width: '25px',
          cursor: 'pointer'
        }} 
        onClick={() => {
          if (colorPickerAccordion.current.classList.contains('d-none'))
            onAccordionOpen();
          colorPickerAccordion.current.classList.toggle('d-none');
        }}
      />
      <div ref={colorPickerAccordion} className="color-picker-accordion d-flex d-none gap-1 border p-2 rounded">
        {
          colors.map((color, i) => (
            <button 
              key={i}
              className="border"
              style={{
                backgroundColor: color,
                height: '20px',
                width: '20px',
                cursor: 'pointer'
              }} 
              onClick={() => {
                colorPickerBtn.current.style.backgroundColor = color;
                onColorPick(color);
              }}
            />
          ))
        }
      </div>
    </div>
  );
};

const Color = () => {
  const optionsContainer = useRef();

  const MOCKUP_LEFT_SLEEVE = 3;
  const MOCKUP_RIGHT_SLEEVE = 2;
  const MOCKUP_BODY = 0;
  const MOCKUP_COLLAR = 1;

  return (
    <>
      <h5 className="mb-3">
        <strong>Cor</strong>
      </h5>
      <div ref={optionsContainer} className="d-flex flex-column gap-3">
        {
          [
            {
              label: 'Tronco',
              id: MOCKUP_BODY,
            },
            {
              label: 'Gola',
              id: MOCKUP_COLLAR
            },
            {
              label: 'Manga esquerda',
              id: MOCKUP_LEFT_SLEEVE
            },
            {
              label: 'Manga direita',
              id: MOCKUP_RIGHT_SLEEVE
            },
          ].map((feature, i) => (
            <ColorPicker 
              key={i}
              feature={feature} 
              colors={['#000', "#fff", '#ff0000', '#0000ff', '#000066', '#ffff00', '#ffcc00', '#00ff00', '#009933', '#ff6600', '#ff00ff', '#333333', '#999999', '#990000']} 
              onAccordionOpen={() => {
                Array.from(optionsContainer.current.querySelectorAll('.color-picker-accordion'))
                .forEach(accordion => {
                  accordion.classList.add('d-none');
                })
              }}
            />
          ))
        }
      </div>
    </>
  ) 
};

const ImageUpload = () => {


  return (
    <>
      <h5 className="fw-bold">Upload de imagem</h5>
    
      <div>
        <div className="alert alert-warning" style={{ borderStyle: 'dashed' }}>
          Formatos suportados: PNG, JPEG, JPG e PDF
        </div>

        <div 
          style={{
            height: '150px',
            border: '1px dashed #dee2e6'
          }}
          className="d-flex justify-content-center align-items-center bg-light rounded"
        >
          <small>Arraste e solte o seu arquivo aqui</small>
        </div>
      </div>
    </>
  );
};

const MenuRight = ({ type }) => {

  return (
    <div className="custom p-4">
      {
        type === MENU_TEMPLATES ? 
        <Templates /> :
        type === MENU_COLOR ?
        <Color /> :
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
      <MenuRight type={menuType} />
    </StyledMenu>
  );
};

export default Menu;