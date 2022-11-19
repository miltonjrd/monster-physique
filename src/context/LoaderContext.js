import { createContext } from 'react';

const LoaderContext = createContext({
  context: false,
  setContext: () => null
});

export default LoaderContext;