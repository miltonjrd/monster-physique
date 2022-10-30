// dependencies
import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';

// context
import SimulatorContext from '../context/SimulatorContext';

// components
import Menu from '../components/Menu';
import ResetChangesModal from '../components/ResetChangesModal';

//images
import ShirtFront from '../images/texturaFrente.png';
import ShirtBack from '../images/texturaCostas.png';

const ContainerTemplate = styled.div`
  display: flex;
  gap: 1rem;
  border-radius: .25rem;
  padding: .5rem;

  img, svg {
    height: 345px;
  }

  img {
    mix-blend-mode: multiply;
  }

  svg {
    position: absolute;
    left: 0;
    pointer-events: none;
  }
`;

const Home = () => {
  const [resetModalShow, setResetModalShow] = useState(false);
  
  const templateFrontRef = useRef();
  const templateBackRef = useRef();

  const [simulatorContext, setSimulatorContext] = useState({
    custom: [],
    templateRefs: {
      back: templateBackRef,
      front: templateFrontRef
    }
  });

  useEffect(() => {
    const { front, back } = simulatorContext.templateRefs;

    const frontShapes = front.current.querySelectorAll('path');
    const backShapes = back.current.querySelectorAll('path');

    simulatorContext.custom.forEach((c, i) => {
      frontShapes[i].style.fill = c;
      backShapes[i].style.fill = c;
    })

  }, [simulatorContext]);
  
  return (
    <main className="container">
      <div className="d-flex mx-4 mt-5">
        <SimulatorContext.Provider 
          value={{ context: simulatorContext, setContext: setSimulatorContext }}
        >
          <Menu />
        </SimulatorContext.Provider>
        <section className="bg-white border rounded-1 d-flex flex-column justify-content-center ms-3 p-3">
          <button
            className="d-none bg-dark border-0 rounded text-white p-2 align-self-end"
            style={{
              width: "80px",
              height: "80px",
            }}
          >
            Girar 180º
          </button>
          <ContainerTemplate>
            <div>
              <div className="position-relative text-center" style={{ flex: 1 }}>
                <svg ref={templateFrontRef} height="368" viewBox="0 0 300 368" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M101 5L108.5 1L109.5 0.5L151.5 3L191.5 1.5L199 5L199.5 5.50002L209.5 10.5L228 19L244 27.5L262.5 38.5L272.5 45L257.5 70.5L250 91L238 125L242 150.5L240.5 155.5L239 210.5L237.5 224.5L238.5 252L239 280.5L242.5 313L245 322.5L247 342L249 352L251 358L248.5 360L225.5 367L195 368H81.5L67.5 366L53.5 361.5L50.5 359.5L50 357C50.5 355.833 51.5 353.4 51.5 353C51.5 352.6 52.8333 346.833 53.5 344L55 326L59 303.5L61 275.5L61.5 254L62.5 225L61 202V165.5L58 150L62.5 124.5L51.5 93.5L41.5 68L28 46L37.5 38L49 31.5L64.5 22.5L78 16L86.5 11.5L96.5 7.5L101 5Z" fill="#fff"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M110.667 7.41667L109 4.5L108 1L109.5 0.5L125.5 1.5L151 3L170.5 2L191.5 1.5L190.295 4.2541L192 1.5L198.5 4.5V7.5L196.5 10.5L192.5 17L186.5 23.5L179 29L171.5 33L162.5 35.5L153.5 37.5H146.5L141 37L129 34L121 30L113 24L108 18.5L102.5 10.5L101 7.5L101.5 5L103 4.5L107.5 1.5L109 4.5L110 6.5L110.667 7.41667ZM111.098 8.0098L121 9L129.5 10C131.833 10.1667 136.6 10.5 137 10.5C137.4 10.5 142.833 11.1667 145.5 11.5H152.5L165.5 11L176.5 10.5L186.993 9.58753L185.5 12L178.5 18.5L171 23.5L164 26L155.5 27.5H148.5L142.5 27L131.5 25L124.5 21.5L119 17.5L114 12L111.098 8.0098Z" fill="#fff"/>
                  <path d="M42 70L28 45.5L27.5 45L18 68.5L15.5 82L12.5 100.5L11 119L7.5 134L0.5 155L1.5 156L13 159C15.5 159.833 20.6 161.5 21 161.5C21.4 161.5 30.1667 163.833 34.5 165L44 165.5H49.5L53 161L58 149.5L62 125L53.5 99.5L42 70Z" fill="#fff"/>
                  <path d="M258 70L272 45.5L272.5 45L282 68.5L284.5 82L287.5 100.5L289 119L292.5 134L299.5 155L298.5 156L287 159C284.5 159.833 279.4 161.5 279 161.5C278.6 161.5 269.833 163.833 265.5 165L256 165.5H250.5L247 161L242 149.5L238 125L246.5 99.5L258 70Z" fill="#fff"/>
                </svg>
                <img src={ShirtFront} alt="" tabIndex={-1} />
                <div
                  className="w-100 h-100"
                  style={{
                    webkitMaskImage: `url(${ShirtBack})`,
                    webkitMaskSize: '100%'
                  }}
                />
              </div>
              <div className='d-flex justify-content-center'>
                <div className='bg-primary rounded-pill py-2 px-5 mt-3'>
                  <strong>Frente</strong>
                </div>
              </div>
            </div>
            <div>
              <div className="position-relative text-center" style={{ flex: 1 }}>
                <svg ref={templateBackRef} height="376" viewBox="0 0 298 376" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M113.5 2.5L120.5 1L153.5 1.5L181 0.5L188.5 2.5L190 4L193 6L195.5 9L206.5 14L216 18.5L239.5 31L245 35L262.5 46L269 51.5L271 53.5L271.5 54.5L264 83.5L252.5 112.5L240 156.5H239L237 164L235 207.5L234 219.5L235.5 244L236 279.5L238 297L241 315.5L242.5 326.5L244 344L246.5 354L240 359.5L227.5 366.5L215.5 371L203 374L193 375.5L183.5 376H127L107.5 375.5L97 374L84.5 370.5L73.5 366.5L60 358.5L55.5 354V350L57.5 344.5L59 328L61.5 310.5L64 294.5L65.5 273V261L67 222.5L66.5 211L64 162L61.5 155L47.5 110L29.5 56.5L30 54.5L37.5 47.5L47 41.5L58.5 34L65 29.5L76 23.5L107 8L108.5 5.5L113.5 2.5Z" />
                  <path d="M108 5L107 7H118.5L154 8L178.5 7.5H195L189.5 2L180.5 0L153.5 0.5L119 0L112.5 2L108 5Z" />
                  <path d="M264 83.5L271 54.5L272 55L278.5 70.5L282.5 83.5L284 90.5L286 100L286.5 117.5L289.5 133.5L290.5 141L294.5 152.5L297.5 162.5L293.5 165L279 171L263 174H254.5L244.5 170.5L240 157L245.5 138L252.5 113L264 83.5Z" />
                  <path d="M47 108L29.5 56.5L23.5 69L20.5 77L18.5 85L15.5 100.5L13 113L9.5 131L3.5 150.5L0 161.5L0.5 162.5L11 168L25.5 171.5L42 174L48 173.5L52.5 171.5L54.5 165L59 156.5L61.5 154.5L58 144L47 108Z" />
                </svg>
                <img src={ShirtBack} alt="" tabIndex={-1} />
                <div
                  className="w-100 h-100"
                  style={{
                    webkitMaskImage: `url(${ShirtBack})`,
                    webkitMaskSize: '100%'
                  }}
                />
              </div>
              <div className='d-flex justify-content-center'>
                <div className='bg-primary rounded-pill py-2 px-5 mt-3'>
                  <strong>Costas</strong>
                </div>
              </div>
            </div>

          </ContainerTemplate>
          <button 
            className="btn btn-danger text-white px-4 mt-3 align-self-center"
            onClick={() => setResetModalShow(true)}
          >
            <strong>Resetar mudanças</strong>
          </button>
          <SimulatorContext.Provider 
            value={{ context: simulatorContext, setContext: setSimulatorContext }}
          >
            <ResetChangesModal show={resetModalShow} setShow={setResetModalShow} />
          </SimulatorContext.Provider>
        </section>
      </div>
    </main>
  );
}

export default Home;