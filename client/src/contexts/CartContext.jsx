import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const CartDispatcher = createContext(null);

export function CartContextProvider( {children}) {
    const [cart, dispatch] = useReducer(cartReducer, {
        cart: [],
        total: 0,
        count: 0,
    });

    return (
        <CartContext.Provider value={cart}>
            <CartDispatcher.Provider value={dispatch}>
                {children}
            </CartDispatcher.Provider>
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

function cartReducer( product, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...product,
                cart: [...product.cart, action.payload],
                count: product.count + 1,
                total: product.total + action.payload.price,
            };
        case "REMOVE_FROM_CART":
            return {
                ...product,
                cart: product.cart.filter((item) => item.id !== action.payload.id),
                count: product.count - 1,
                total: product.total - action.payload.price,
            };
        case "CLEAR_CART":
            return {
                ...product,
                cart: [],
                count: 0,
                total: 0,
            };
        default:
            return product;
    }
}