// src/components/QuotePage/QuotePage.jsx
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaPlus, FaMinus, FaCheckCircle } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";
import PageHeader from "../Common/PageHeader";
import { useCart } from "../../hooks/useCart";
import "./QuotePage.css";

const FORM_NAME = "quote-request";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY_FORM = {
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
};

// One line per product, readable straight out of the notification email.
const formatItems = (items) =>
    items.map((item) => `${item.qty} x ${item.name} (${item.sku})`).join("\n");

const QuotePage = () => {
    const { items, itemCount, setQty, removeItem, clearCart } = useCart();
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | submitting | success | error
    const [submittedCount, setSubmittedCount] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const validate = () => {
        const nextErrors = {};
        if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
        if (!formData.email.trim()) {
            nextErrors.email = "Please enter your email.";
        } else if (!EMAIL_PATTERN.test(formData.email.trim())) {
            nextErrors.email = "Please enter a valid email address.";
        }
        if (!formData.phone.trim()) nextErrors.phone = "Please enter your phone number.";
        return nextErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (items.length === 0 || status === "submitting") return;

        const nextErrors = validate();
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        setStatus("submitting");

        const body = new URLSearchParams({
            "form-name": FORM_NAME,
            "bot-field": "",
            ...formData,
            items: formatItems(items),
            items_json: JSON.stringify(items.map(({ sku, name, qty }) => ({ sku, name, qty }))),
        });

        // Netlify's form handler only exists on Netlify. Under `vite dev` a POST
        // to "/" just returns the HTML shell, so short-circuit and log instead.
        if (import.meta.env.DEV) {
            console.info("[quote-request] dev submission:\n" + body.toString().replace(/&/g, "\n"));
            setSubmittedCount(itemCount);
            setStatus("success");
            clearCart();
            return;
        }

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: body.toString(),
            });

            if (!response.ok) throw new Error(`Submission failed with ${response.status}`);

            setSubmittedCount(itemCount);
            setStatus("success");
            clearCart();
        } catch {
            // Cart is intentionally left intact so the visitor can retry.
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="quote-page">
                <Header />
                <PageHeader title="Request a Quote" />
                <Container>
                    <div className="quote-success">
                        <FaCheckCircle className="quote-success-icon" aria-hidden="true" />
                        <h2>Thank you — your request has been sent.</h2>
                        <p>
                            We received your request for {submittedCount}{" "}
                            {submittedCount === 1 ? "item" : "items"}. Our team will get back to
                            you shortly with pricing and availability.
                        </p>
                        <Link to="/maxhub/products" className="quote-primary-btn">
                            Back to Products
                        </Link>
                    </div>
                </Container>
                <Footer />
            </div>
        );
    }

    return (
        <div className="quote-page">
            <Header />
            <PageHeader title="Request a Quote" />

            <Container>
                {items.length === 0 ? (
                    <div className="quote-empty">
                        <h2>Your quote list is empty</h2>
                        <p>
                            Browse the MAXHUB range and add the products you are interested in.
                            We&apos;ll follow up with pricing.
                        </p>
                        <Link to="/maxhub/products" className="quote-primary-btn">
                            Browse Products
                        </Link>
                    </div>
                ) : (
                    <div className="quote-layout">
                        <section className="quote-items" aria-label="Selected products">
                            <div className="quote-items-header">
                                <h2>
                                    Selected Products <span>({itemCount})</span>
                                </h2>
                                <button
                                    type="button"
                                    className="quote-clear-btn"
                                    onClick={clearCart}
                                >
                                    Clear all
                                </button>
                            </div>

                            <ul className="quote-item-list">
                                {items.map((item) => (
                                    <li key={item.sku} className="quote-item">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="quote-item-image"
                                        />

                                        <div className="quote-item-text">
                                            <h3 className="quote-item-name">{item.name}</h3>
                                            <p className="quote-item-category">
                                                {item.categoryName}
                                            </p>
                                        </div>

                                        <div className="quote-item-controls">
                                            <div className="quote-qty" role="group" aria-label={`Quantity for ${item.name}`}>
                                                <button
                                                    type="button"
                                                    className="quote-qty-btn"
                                                    onClick={() =>
                                                        item.qty <= 1
                                                            ? removeItem(item.sku)
                                                            : setQty(item.sku, item.qty - 1)
                                                    }
                                                    aria-label="Decrease quantity"
                                                >
                                                    <FaMinus aria-hidden="true" />
                                                </button>
                                                <span className="quote-qty-value">{item.qty}</span>
                                                <button
                                                    type="button"
                                                    className="quote-qty-btn"
                                                    onClick={() => setQty(item.sku, item.qty + 1)}
                                                    disabled={item.qty >= 99}
                                                    aria-label="Increase quantity"
                                                >
                                                    <FaPlus aria-hidden="true" />
                                                </button>
                                            </div>

                                            <button
                                                type="button"
                                                className="quote-remove-btn"
                                                onClick={() => removeItem(item.sku)}
                                                aria-label={`Remove ${item.name}`}
                                            >
                                                <FaTrashAlt aria-hidden="true" />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="quote-form-section" aria-label="Your details">
                            <h2>Your Details</h2>
                            <p className="quote-form-intro">
                                Tell us how to reach you and we&apos;ll reply with a tailored quote.
                            </p>

                            <form
                                name={FORM_NAME}
                                method="POST"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                                noValidate
                            >
                                <input type="hidden" name="form-name" value={FORM_NAME} />
                                <p className="quote-hp">
                                    <label>
                                        Do not fill this out: <input name="bot-field" />
                                    </label>
                                </p>

                                <div className="quote-field">
                                    <label htmlFor="quote-name">Name *</label>
                                    <input
                                        id="quote-name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        aria-invalid={Boolean(errors.name)}
                                    />
                                    {errors.name && (
                                        <span className="quote-error">{errors.name}</span>
                                    )}
                                </div>

                                <div className="quote-field">
                                    <label htmlFor="quote-company">Company</label>
                                    <input
                                        id="quote-company"
                                        name="company"
                                        type="text"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="quote-field">
                                    <label htmlFor="quote-email">Email *</label>
                                    <input
                                        id="quote-email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        aria-invalid={Boolean(errors.email)}
                                    />
                                    {errors.email && (
                                        <span className="quote-error">{errors.email}</span>
                                    )}
                                </div>

                                <div className="quote-field">
                                    <label htmlFor="quote-phone">Phone *</label>
                                    <input
                                        id="quote-phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        aria-invalid={Boolean(errors.phone)}
                                    />
                                    {errors.phone && (
                                        <span className="quote-error">{errors.phone}</span>
                                    )}
                                </div>

                                <div className="quote-field">
                                    <label htmlFor="quote-notes">Notes</label>
                                    <textarea
                                        id="quote-notes"
                                        name="notes"
                                        rows="4"
                                        value={formData.notes}
                                        onChange={handleChange}
                                        placeholder="Quantities, timelines, installation requirements…"
                                    />
                                </div>

                                {/* Mirrors of the generated fields, so the payload matches the
                                    static form Netlify parses at build time. */}
                                <input type="hidden" name="items" value={formatItems(items)} />
                                <input
                                    type="hidden"
                                    name="items_json"
                                    value={JSON.stringify(
                                        items.map(({ sku, name, qty }) => ({ sku, name, qty }))
                                    )}
                                />

                                <button
                                    type="submit"
                                    className="quote-primary-btn quote-submit-btn"
                                    disabled={status === "submitting"}
                                >
                                    {status === "submitting" ? "Sending…" : "Send Quote Request"}
                                </button>

                                {status === "error" && (
                                    <p className="quote-submit-error" role="alert">
                                        Something went wrong sending your request. Please try
                                        again, or email us at{" "}
                                        <a href="mailto:malardah@technology-master.com">
                                            malardah@technology-master.com
                                        </a>
                                        .
                                    </p>
                                )}
                            </form>
                        </section>
                    </div>
                )}
            </Container>

            <Footer />
        </div>
    );
};

export default QuotePage;
