// components/Common/VideoModal.jsx
// One overlay player, shared by the hero and the MAXHUB band so the two entry
// points to the same video cannot drift apart.
//
// Handles the things an embedded iframe does not: Escape to dismiss, a locked
// page behind it, backdrop click, and focus moved into the dialog on open and
// returned to whatever opened it on close.
import { useCallback, useEffect, useRef } from 'react';
import { FiX } from 'react-icons/fi';
import PropTypes from 'prop-types';
import '../../css/Common/VideoModal.css';

const VideoModal = ({ open, onClose, src, title }) => {
  const closeRef = useRef(null);
  const openerRef = useRef(null);

  const handleClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!open) return undefined;

    // Remember who opened this so focus can go back there on close.
    openerRef.current = document.activeElement;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') handleClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      if (openerRef.current instanceof HTMLElement) openerRef.current.focus();
    };
  }, [open, handleClose]);

  if (!open) return null;

  return (
    <div className="vm" role="dialog" aria-modal="true" aria-label={title} onClick={handleClose}>
      <button ref={closeRef} type="button" className="vm-close" onClick={handleClose} aria-label="Close video">
        <FiX aria-hidden="true" />
      </button>

      <div className="vm-frame" onClick={(event) => event.stopPropagation()}>
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

VideoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideoModal;
