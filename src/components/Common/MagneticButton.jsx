// components/Common/MagneticButton.jsx
// Wraps a button/link so it pulls gently toward the cursor on hover, like
// Apple's hero CTAs. The wrapped element keeps its own href/onClick intact.
import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import PropTypes from 'prop-types';

const MagneticButton = ({ children, className = '', strength = 0.4 }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.3 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.3 });

    const handleMouseMove = (e) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`tm-magnetic ${className}`}
            style={{ x: springX, y: springY, display: 'inline-block' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </motion.div>
    );
};

MagneticButton.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    strength: PropTypes.number,
};

export default MagneticButton;
