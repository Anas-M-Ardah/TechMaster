// components/Common/CountUp.jsx
// Animates a number counting up to `end` once it scrolls into view.
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const CountUp = ({ end, duration = 1.6, prefix = '', suffix = '', className = '' }) => {
    const ref = useRef(null);
    const hasAnimated = useRef(false);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setValue(end);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || hasAnimated.current) return;
                hasAnimated.current = true;

                const start = performance.now();
                const tick = (now) => {
                    const progress = Math.min((now - start) / (duration * 1000), 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setValue(Math.round(eased * end));
                    if (progress < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
                observer.disconnect();
            },
            { threshold: 0.4 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}{value}{suffix}
        </span>
    );
};

CountUp.propTypes = {
    end: PropTypes.number.isRequired,
    duration: PropTypes.number,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    className: PropTypes.string,
};

export default CountUp;
