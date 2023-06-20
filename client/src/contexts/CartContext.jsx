import { createContext, useReducer, useContext } from "react";

const CartContext = createContext([]);

const CartDispatcher = createContext(null);

export function CartContextProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={cart}>
            <CartDispatcher.Provider value={dispatch}>
                {children}
            </CartDispatcher.Provider>
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext);
}

export function useCartDispatcher() {
    return useContext(CartDispatcher);
}

function cartReducer(cart, action) {
    switch (action.type) {
        case "added":
            return [...cart,
                 {
                    id: cart.length + 1,
                    product: action.product,
                    quantity: action.count,
                    unitPrice: action.price / action.count,
                    price: action.price,
                    image: action.image
                }];
        case "removed":
            return cart.filter((product) => product.id !== action.id);
        case "reduceProductCount":
            return cart.map((product) => {
                if (product.id === action.id) {
                    return { ...product, quantity: product.quantity - 1, price: product.price - product.unitPrice};
                }
                return product;
            });
        case "increaseProductCount":
            return cart.map((product) => {
                if (product.id === action.id) {
                    return { ...product, quantity: product.quantity + 1, price: product.price + product.unitPrice };
                }
                return product;
            });
        case "removedAll":
            return [];
        default:
            throw new Error("Invalid action type")
    }
}