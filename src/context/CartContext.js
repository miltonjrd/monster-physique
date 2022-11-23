import { createContext } from "react"

const CartContext = createContext({
    context: null,
    setContext: () => null
});

export default CartContext;