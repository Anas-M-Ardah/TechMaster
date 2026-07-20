// src/components/Cart/AddToQuoteButton.jsx
import PropTypes from "prop-types";
import { FaPlus, FaMinus, FaCheck } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";
import "./Cart.css";

const AddToQuoteButton = ({ sku }) => {
    const { hasItem, getQty, addItem, setQty, removeItem } = useCart();

    if (!hasItem(sku)) {
        return (
            <button
                type="button"
                className="add-to-quote-btn"
                onClick={() => addItem(sku)}
            >
                <FaPlus aria-hidden="true" /> Add to Quote
            </button>
        );
    }

    const qty = getQty(sku);

    // Stepping below 1 removes the line outright, which is what a visitor
    // pressing "−" on a quantity of 1 almost always means.
    const decrease = () => (qty <= 1 ? removeItem(sku) : setQty(sku, qty - 1));

    return (
        <div className="quote-qty" role="group" aria-label="Quantity in quote">
            <button
                type="button"
                className="quote-qty-btn"
                onClick={decrease}
                aria-label={qty <= 1 ? "Remove from quote" : "Decrease quantity"}
            >
                <FaMinus aria-hidden="true" />
            </button>

            <span className="quote-qty-value">
                <FaCheck className="quote-qty-check" aria-hidden="true" />
                {qty}
            </span>

            <button
                type="button"
                className="quote-qty-btn"
                onClick={() => addItem(sku)}
                disabled={qty >= 99}
                aria-label="Increase quantity"
            >
                <FaPlus aria-hidden="true" />
            </button>
        </div>
    );
};

AddToQuoteButton.propTypes = {
    sku: PropTypes.string.isRequired,
};

export default AddToQuoteButton;
