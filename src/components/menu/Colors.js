// dependencies
import { useContext, useRef } from 'react';

// context
import SimulatorContext from "../../context/SimulatorContext";

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

const Colors = () => {
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

export default Colors;