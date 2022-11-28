// dependencies
import { useEffect, useRef, useContext } from "react";
import { CloseButton } from "react-bootstrap";
import styled from "styled-components";

// context
import PopupContext from "../context/PopupContext";

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: blue;
  width: 400px;
  margin-top: 80px;
  z-index: 1066;
`;

const PopupCard = styled.article`
  background-color: #fff;
  height: 150px;
  padding: .5rem;
  border: 1px solid #dee2e6;
`;

const Popup = ({ title, text }) => {
  const ref = useRef();

  const handleRemove = () => {
    ref.current.remove();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleRemove();
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <PopupCard ref={ref}>
      <div className="d-flex justify-content-end">
        <CloseButton style={{ fontSize: 12 }} onClick={handleRemove} />
      </div>
      <h5>{title}</h5>
      <p className="w-100" style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}>{text}</p>
    </PopupCard>
  )
};

const Popups = () => {
  const { context: popupContext } = useContext(PopupContext);

  if (!popupContext.length)
    return <></>;

  return (
    <PopupContainer>
      {
        popupContext.map((popup) => (
          <Popup {...popup} />
        ))
      }
    </PopupContainer>
  );
};

export default Popups;