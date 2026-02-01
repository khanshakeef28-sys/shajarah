import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ open, onClose, children, ariaLabel = 'Dialog', titleId }) {
  const dialogRef = useRef(null);
  const lastFocusedRef = useRef(null);

  const getFocusableElements = () => {
    if (!dialogRef.current) return [];
    return Array.from(
      dialogRef.current.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(el => !el.hasAttribute('disabled'));
  };

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  useEffect(() => {
    if (!open) return;

    lastFocusedRef.current = document.activeElement;

    const focusable = getFocusableElements();
    const focusTarget = focusable[0] || dialogRef.current;
    focusTarget?.focus?.();

    const onKeyDown = e => {
      if (e.key === 'Escape') {
        onClose?.();
        return;
      }

      if (e.key === 'Tab') {
        const elements = getFocusableElements();
        if (!elements.length) {
          e.preventDefault();
          return;
        }

        const first = elements[0];
        const last = elements[elements.length - 1];
        const active = document.activeElement;

        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      lastFocusedRef.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;
  const root = document.getElementById('modal-root');
  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4" aria-modal="true" role="dialog" aria-labelledby={titleId} aria-label={titleId ? undefined : ariaLabel}>
      <div ref={dialogRef} tabIndex="-1" className="relative w-full max-w-md card p-6 bg-cream">
        <button aria-label="Close" onClick={onClose} className="absolute -right-3 -top-3 w-8 h-8 rounded-full bg-black text-color grid place-items-center">✕</button>
        {children}
      </div>
    </div>,
    root
  );
}


