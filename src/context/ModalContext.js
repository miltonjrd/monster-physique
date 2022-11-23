import { createContext } from "react";

const ModalContext = createContext({
    context: null,
    setContext: () => null
});

export default ModalContext;