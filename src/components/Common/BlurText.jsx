// components/Common/BlurText.jsx
// Word-by-word blur+fade reveal, triggered once the text scrolls into view.
// Accepts either a plain `text` string or `segments` (for headings with an
// inline accent span, e.g. "We Offer Special <accent>Services</accent> Here").
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const containerVariants = {
    hidden: {},
    visible: (staggerDelay) => ({
        transition: { staggerChildren: staggerDelay }
    })
};

const wordVariants = {
    hidden: { opacity: 0, y: 14, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
    }
};

const BlurText = ({ as: Tag = 'span', className = '', text, segments, delay = 0.045, amount = 0.6 }) => {
    const resolvedSegments = segments || [{ text }];

    const words = [];
    resolvedSegments.forEach((segment, segIndex) => {
        segment.text.split(' ').filter(Boolean).forEach((word) => {
            words.push({ word, className: segment.className });
        });
        if (segment.breakAfter) {
            words.push({ isBreak: true, key: `break-${segIndex}` });
        }
    });

    return (
        <Tag className={className}>
            <motion.span
                style={{ display: 'inline' }}
                variants={containerVariants}
                custom={delay}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount }}
            >
                {words.map((entry, i) =>
                    entry.isBreak ? (
                        <br key={entry.key} />
                    ) : (
                        // The separating space has to live *outside* the span: white-space
                        // collapsing strips a trailing space inside an inline-block, which
                        // runs every word of the heading together.
                        <Fragment key={i}>
                            <motion.span
                                variants={wordVariants}
                                className={entry.className}
                                style={{ display: 'inline-block', willChange: 'transform, filter, opacity' }}
                            >
                                {entry.word}
                            </motion.span>
                            {i !== words.length - 1 ? ' ' : ''}
                        </Fragment>
                    )
                )}
            </motion.span>
        </Tag>
    );
};

BlurText.propTypes = {
    as: PropTypes.elementType,
    className: PropTypes.string,
    text: PropTypes.string,
    segments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            className: PropTypes.string,
            breakAfter: PropTypes.bool,
        })
    ),
    delay: PropTypes.number,
    amount: PropTypes.number,
};

export default BlurText;
