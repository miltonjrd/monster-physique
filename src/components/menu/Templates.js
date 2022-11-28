// dependencies
import { useEffect, useContext } from "react";
import styled from "styled-components";
import { useApi, baseUrl } from "../../api";

// images
import ShirtFront from '../../images/texturaFrente.png';

// context
import SimulatorContext from '../../context/SimulatorContext';

const TemplateItem = styled.div`
  :hover {
    background-color: #f8f9fa;
    cursor: pointer;
  }
`;

const Templates = () => {
  const { data: templates, error } = useApi('templates');
  const { setContext: setSimulatorContext } = useContext(SimulatorContext);

  return (
    <>
      <h5 className="mb-3">
        <strong>Modelos</strong>
      </h5>
      <div className="row mx-auto gx-0 gap-3 justify-content-center" style={{ overflowY: 'scroll' }}>
        {
          templates?.map((template, i) => (
            <TemplateItem 
              className="col-5 text-center p-2 rounded" 
              key={i}
              onClick={() => {
                setSimulatorContext(state => ({...state, template }));
              }}
            >
              <img className="mb-3" style={{ height: '100px' }} src={`${baseUrl}/storage/mockups/${template.mockup_front}`} alt="" />
              <p style={{ lineHeight: 1.2 }}>
                <small className="mt-2 text-uppercase">{template.name}</small>
              </p>
            </TemplateItem>
          ))
        }
      </div>
    </>
  );
};

export default Templates;