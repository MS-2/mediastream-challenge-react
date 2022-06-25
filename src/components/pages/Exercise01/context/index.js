import { createContext, useContext } from "react";

export const Context = createContext({
    total: 0,
    discount: 0,
    cart: [],
    addToCard: () => { },
    decrease: () => { },
    increase: () => { },
    subTotal: 0,
});

export const Provider = Context.Provider;
export const useCartContext = () => useContext(Context);