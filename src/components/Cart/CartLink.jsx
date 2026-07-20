// src/components/Cart/CartLink.jsx
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";
import "./Cart.css";

const CartLink = () => {
    const { itemCount } = useCart();
    const location = useLocation();

    return (
        <Link
            to="/quote"
            className={`cart-link ${location.pathname === "/quote" ? "active" : ""}`}
            aria-label={
                itemCount > 0
                    ? `Request a quote, ${itemCount} item${itemCount === 1 ? "" : "s"}`
                    : "Request a quote"
            }
        >
            <FaShoppingCart className="cart-link-icon" aria-hidden="true" />
            <span>Quote</span>
            {itemCount > 0 && <span className="cart-link-badge">{itemCount}</span>}
        </Link>
    );
};

export default CartLink;
