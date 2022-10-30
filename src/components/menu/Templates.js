// dependencies
import styled from "styled-components";

// images
import ShirtFront from '../../images/texturaFrente.png';

const TemplateItem = styled.div`
  :hover {
    background-color: #f8f9fa;
    cursor: pointer;
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
          <TemplateItem className="col-5 text-center p-2 rounded" key={i}>
            <img className="mb-3" style={{ height: '100px' }} src={ShirtFront} alt="" />
            <p style={{ lineHeight: 1.2 }}>
              <small className="mt-2">BLUSA COM RECORTE LATERAL</small>
            </p>
          </TemplateItem>
        ))
      }
    </div>
  </>
);

export default Templates;