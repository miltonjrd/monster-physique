import { createContext } from "react";

const SimulatorContext = createContext({
  context: {
    custom: [],
    images: {
      front: [],
      back: []
    },
    template: null,
    templateRefs: {
      front: null,
      back: null,
      frontMask: null,
      backMask: null
    }
  },
  setContext: () => null
});

export default SimulatorContext;