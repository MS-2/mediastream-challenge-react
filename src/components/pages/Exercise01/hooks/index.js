import { useState, useMemo, useCallback } from "react";

const useCustomHookCart = ({ initialCart = [], discountRules = [] }) => {

    const [cart, setCart] = useState(initialCart);

    const getItemCart = useCallback((a) => cart.findIndex((b) => b.id === a.id), [cart]);

    const increase = useCallback((e) => {
        const newList = [...cart];
        const index = getItemCart(e);
        newList[index].quantity += 1;
        setCart(newList);
    },
        [cart, getItemCart]
    );

    const decrease = useCallback((e) => {
        let newList = [...cart];
        const index = getItemCart(e);
        if (newList[index].quantity === 1) {
            newList = newList.filter((iterador) => iterador.id !== e.id);
        } else {
            newList[index].quantity -= 1;
        }
        setCart(newList);
    },
        [cart, getItemCart]
    );

    const subTotal = useMemo(() => cart.reduce((a, c) => a + c.price * c.quantity, 0), [cart]);

    const discount = useMemo(() => {
        const ids = cart.map((e) => e.id).sort();
        const rule = discountRules.find((e) => JSON.stringify(e.m.sort()) === JSON.stringify(ids));
        return rule ? rule.discount : 0;
    }, [cart, discountRules]);

    const total = useMemo(() => subTotal * (1 - discount), [discount, subTotal]);

    const addToCard = useCallback((e) => {
        console.log(e)
        getItemCart(e) === -1 ? setCart((prev) => [...prev, { ...e, quantity: 1 }]) : increase(e);
    },
        [getItemCart, increase]
    );

    return {
        total,
        discount,
        cart,
        addToCard,
        increase,
        decrease,
        subTotal
    };
};

export default useCustomHookCart;