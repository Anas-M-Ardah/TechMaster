// src/context/CartProvider.jsx
import { useEffect, useMemo, useReducer } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";
import { getProductBySku } from "../data/maxhubProducts";

const STORAGE_KEY = "tm_quote_cart_v1";
const MIN_QTY = 1;
const MAX_QTY = 99;

const clampQty = (qty) => Math.min(MAX_QTY, Math.max(MIN_QTY, Math.round(qty) || MIN_QTY));

function reducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            const existing = state.items.find((item) => item.sku === action.sku);
            if (existing) {
                return {
                    items: state.items.map((item) =>
                        item.sku === action.sku
                            ? { ...item, qty: clampQty(item.qty + (action.qty ?? 1)) }
                            : item
                    ),
                };
            }
            return { items: [...state.items, { sku: action.sku, qty: clampQty(action.qty ?? 1) }] };
        }
        case "SET_QTY":
            return {
                items: state.items.map((item) =>
                    item.sku === action.sku ? { ...item, qty: clampQty(action.qty) } : item
                ),
            };
        case "REMOVE_ITEM":
            return { items: state.items.filter((item) => item.sku !== action.sku) };
        case "CLEAR_CART":
            return { items: [] };
        default:
            return state;
    }
}

// Rehydrate from localStorage, discarding anything that no longer maps to a
// real product. Without this, a product removed from the catalog would leave a
// returning visitor with a cart line that renders as undefined.
function init() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return { items: [] };

        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return { items: [] };

        const items = parsed
            .filter((item) => item && typeof item.sku === "string" && getProductBySku(item.sku))
            .map((item) => ({ sku: item.sku, qty: clampQty(Number(item.qty)) }));

        return { items };
    } catch {
        // Corrupt JSON or localStorage unavailable (private mode, blocked cookies).
        return { items: [] };
    }
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, undefined, init);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
        } catch {
            // Storage full or unavailable — the cart still works for this session.
        }
    }, [state.items]);

    const value = useMemo(() => {
        // Resolve products at render time rather than storing copies, so
        // catalog edits show up immediately in an existing cart.
        const detailedItems = state.items
            .map((item) => {
                const product = getProductBySku(item.sku);
                return product ? { ...product, qty: item.qty } : null;
            })
            .filter(Boolean);

        return {
            items: detailedItems,
            itemCount: state.items.reduce((total, item) => total + item.qty, 0),
            hasItem: (sku) => state.items.some((item) => item.sku === sku),
            getQty: (sku) => state.items.find((item) => item.sku === sku)?.qty ?? 0,
            addItem: (sku, qty) => dispatch({ type: "ADD_ITEM", sku, qty }),
            setQty: (sku, qty) => dispatch({ type: "SET_QTY", sku, qty }),
            removeItem: (sku) => dispatch({ type: "REMOVE_ITEM", sku }),
            clearCart: () => dispatch({ type: "CLEAR_CART" }),
        };
    }, [state.items]);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
    children: PropTypes.node,
};

export default CartProvider;
