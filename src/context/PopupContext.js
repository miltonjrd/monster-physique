import { createContext } from "react";

const PopupContext = createContext({ 
  context: [],
  setContext: () => null
});

export default PopupContext;