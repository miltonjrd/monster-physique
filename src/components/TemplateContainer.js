// dependencies
import { useEffect, useContext, useState } from "react";
import { ResizableBox } from 'react-resizable';
import { IoResize, IoClose } from 'react-icons/io5';
import { baseUrl } from "../api";
import styled from "styled-components";

// context
import SimulatorContext from "../context/SimulatorContext";

// images
import ShirtFront from '../images/texturaFrente.png';
import ShirtBack from '../images/texturaCostas.png';

const Container = styled.div`
  display: flex;
  gap: 1rem;
  border-radius: .25rem;
  padding: .5rem;

  img.template-img, .template-svg {
    height: 345px;
    width: 100%;
  }

  .template-svg {
    position: absolute;
    left: 0;
    pointer-events: none;
    mix-blend-mode: multiply;
  }

  .image-overlay {
    position: absolute;
    width: 150px;
    cursor: grab;

    &.grabbing{
      cursor: grabbing;
    }

    img {
      width: 100%;
    }

    button {
      position: absolute;
      visibility: hidden;
    }

    :hover {
      
      button {
        visibility: visible;
      }
    }
  }
`;

const Image = ({ side, imgProps }) => {
  const { context: simulatorContext, setContext: setSimulatorContext } = useContext(SimulatorContext);

  return (
    <ResizableBox 
      axis="x"
      handle={
        <button 
          className="p-0 bg-white border-0 rounded-circle end-0 bottom-0"
          style={{
            width: 25,
            height: 25,
            cursor: 'nwse-resize'
          }}
        >
          <IoResize style={{ transform: 'scaleX(-1)' }} />
        </button>
      }
      width={150}
      className="image-overlay p-3"
      onMouseDown={(evt) => {
        const target = evt.currentTarget;
        if (evt.target.matches('button') || evt.target.matches('svg'))
          return console.log('botao porra');

        const offset = [
          target.offsetLeft - evt.clientX,
          target.offsetTop - evt.clientY
        ];

        target.classList.add('grabbing');

        target.onmousemove = (e) => {
          target.style.left = (e.clientX + offset[0]) + 'px';
          target.style.top = (e.clientY + offset[1]) + 'px';
        };
      }}
      onMouseUp={(evt) => {
        const target = evt.currentTarget;
        target.classList.remove('grabbing');
        target.onmousemove = null;
      }}
      
    >
      <button 
        className="bg-danger border-0 btn-sm rounded-circle text-white top-0 end-0 p-0"
        style={{
          width: 25,
          height: 25
        }}
        onClick={(evt) => setSimulatorContext((state) => {
          const newState = {
            ...state,
            images: {
              ...state.images,
              [side]: [
                ...state.images[side].filter(img => img.id !== imgProps.id)
              ]
            }
          };
          return newState;
        })}
      >
        <IoClose />
      </button>
      <img src={imgProps.src} alt="Imagem" draggable="false" />
    </ResizableBox>
  )
};

const TemplateContainer = () => {
  const [side, setSide] = useState('front');
  const { context: simulatorContext, setContext: setSimulatorContext } = useContext(SimulatorContext);
  const { front, back } = simulatorContext.templateRefs;

  const getSVG = async (side, filename) => {
    const markup = await (await fetch(`${baseUrl}/storage/svgs/${filename}`)).text();
    const blob = new Blob([markup], { type: 'image/svg+xml'});
    simulatorContext.templateRefs[side].current.data = URL.createObjectURL(blob);
  };
  
  // handles color customization
  useEffect(() => {
    Array.from(front.current.contentDocument.querySelectorAll('path'))
    .forEach((path, i) => {
      path.style.fill = simulatorContext.custom[i];
    });

    Array.from(back.current.contentDocument.querySelectorAll('path'))
    .forEach((path, i) => {
      path.style.fill = simulatorContext?.custom[i] || 'transparent';
    });
  }, [simulatorContext]);

  useEffect(() => {
    simulatorContext.custom = [];
    getSVG('front', 'aaa.svg');
    getSVG('back', 'bbb.svg');
  }, [simulatorContext.template]);

  return (
    <>
      <Container id="template-container">
        <div style={{ minWidth: 275, height: 400 }} className={side !== 'front' ? 'hide-on-tablet' : ''}>
          <div className="position-relative text-center" style={{ flex: 1 }}>
            {/* <svg className="template-svg" ref={simulatorContext.templateRefs.front} height="368" viewBox="0 0 300 368" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M101 5L108.5 1L109.5 0.5L151.5 3L191.5 1.5L199 5L199.5 5.50002L209.5 10.5L228 19L244 27.5L262.5 38.5L272.5 45L257.5 70.5L250 91L238 125L242 150.5L240.5 155.5L239 210.5L237.5 224.5L238.5 252L239 280.5L242.5 313L245 322.5L247 342L249 352L251 358L248.5 360L225.5 367L195 368H81.5L67.5 366L53.5 361.5L50.5 359.5L50 357C50.5 355.833 51.5 353.4 51.5 353C51.5 352.6 52.8333 346.833 53.5 344L55 326L59 303.5L61 275.5L61.5 254L62.5 225L61 202V165.5L58 150L62.5 124.5L51.5 93.5L41.5 68L28 46L37.5 38L49 31.5L64.5 22.5L78 16L86.5 11.5L96.5 7.5L101 5Z" fill="#fff"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M110.667 7.41667L109 4.5L108 1L109.5 0.5L125.5 1.5L151 3L170.5 2L191.5 1.5L190.295 4.2541L192 1.5L198.5 4.5V7.5L196.5 10.5L192.5 17L186.5 23.5L179 29L171.5 33L162.5 35.5L153.5 37.5H146.5L141 37L129 34L121 30L113 24L108 18.5L102.5 10.5L101 7.5L101.5 5L103 4.5L107.5 1.5L109 4.5L110 6.5L110.667 7.41667ZM111.098 8.0098L121 9L129.5 10C131.833 10.1667 136.6 10.5 137 10.5C137.4 10.5 142.833 11.1667 145.5 11.5H152.5L165.5 11L176.5 10.5L186.993 9.58753L185.5 12L178.5 18.5L171 23.5L164 26L155.5 27.5H148.5L142.5 27L131.5 25L124.5 21.5L119 17.5L114 12L111.098 8.0098Z" fill="#fff"/>
              <path d="M42 70L28 45.5L27.5 45L18 68.5L15.5 82L12.5 100.5L11 119L7.5 134L0.5 155L1.5 156L13 159C15.5 159.833 20.6 161.5 21 161.5C21.4 161.5 30.1667 163.833 34.5 165L44 165.5H49.5L53 161L58 149.5L62 125L53.5 99.5L42 70Z" fill="#fff"/>
              <path d="M258 70L272 45.5L272.5 45L282 68.5L284.5 82L287.5 100.5L289 119L292.5 134L299.5 155L298.5 156L287 159C284.5 159.833 279.4 161.5 279 161.5C278.6 161.5 269.833 163.833 265.5 165L256 165.5H250.5L247 161L242 149.5L238 125L246.5 99.5L258 70Z" fill="#fff"/>
            </svg> */}
            
            <img className='template-img' src={`${baseUrl}/storage/mockups/${simulatorContext.template?.mockup_front}`} alt="" tabIndex={-1} />
            <object 
              className="template-svg" 
              ref={front} 
              type="image/svg+xml" 
              data=""
            />
            <div
              className="position-absolute top-0 w-100 h-100"
              style={{
                WebkitMaskImage: `url(${baseUrl}/storage/mockups/${simulatorContext.template?.mockup_front})`,
                WebkitMaskSize: '100%'
              }}
            >
              {
                simulatorContext.images.front.map((image) => (
                  <Image side="front" imgProps={image} />
                ))
              }
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='bg-primary rounded-pill py-2 px-5 mt-3'>
              <strong>Frente</strong>
            </div>
          </div>
        </div>
        <div style={{ minWidth: 275, height: 400 }} className={side !== 'back' ? 'hide-on-tablet' : ''}>
          <div className="position-relative text-center" style={{ flex: 1 }}>
            
            <img className='template-img' src={`${baseUrl}/storage/mockups/${simulatorContext.template?.mockup_back}`} alt="" tabIndex={-1} />
            <object 
              className="template-svg" 
              ref={back} 
              data=""
              type="image/svg+xml" 
            />
            <div
              className="position-absolute top-0 w-100 h-100"
              style={{
                WebkitMaskImage: `url(${baseUrl}/storage/mockups/${simulatorContext.template?.mockup_back})`,
                WebkitMaskSize: '100%'
              }}
            >
              {
                simulatorContext.images.back.map((image) => (
                  <Image side="back" imgProps={image} />
                ))
              }
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='bg-primary rounded-pill py-2 px-5 mt-3'>
              <strong>Costas</strong>
            </div>
          </div>
        </div>
      </Container>
      
      <div className="d-flex gap-3 justify-content-center">
        <button className="btn btn-danger text-white fw-bold">
          Resetar alterações
        </button>
        <button 
        className="btn btn-dark"
        onClick={() => setSide(state => state === 'front' ? 'back' : 'front')}
        >
          r
        </button>
      </div>
    </>
  );
};

export default TemplateContainer;