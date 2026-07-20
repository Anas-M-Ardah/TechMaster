// src/context/CartContext.js
// Context object only — kept in its own module so that the provider file
// exports nothing but a component (keeps react-refresh happy).
import { createContext } from "react";

export const CartContext = createContext(null);
