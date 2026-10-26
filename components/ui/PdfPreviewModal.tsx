"use client";

import { useEffect, useId, useRef } from "react";

interface Props {
  /** Dialog heading, also its accessible name */
  title: string;
  /** Same-origin public path to the PDF */
  src: string;
  /** Suggested filename for the Download PDF link */
  downloadName: string;
  onClose: () => void;
  /** Element to return focus to once the dialog closes */
  returnFocusRef?: React.RefObject<HTMLElement | null>;
}

/**
 * Modal PDF preview using the browser's native viewer. Mount it only while
 * open — the PDF is requested when this component renders, not before.
 *
 * The embedded viewer is kept out of the Tab order: native PDF viewers run in
 * their own focus context and can swallow Tab/Escape, which would strand
 * keyboard users away from Close. Mouse/touch users can still scroll it, and
 * "Open in New Tab" gives keyboard users the full viewer.
 */
export default function PdfPreviewModal({ title, src, downloadName, onClose, returnFocusRef }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    const returnTo = returnFocusRef?.current;
    if (!dialog) return;

    if (!dialog.open) dialog.showModal();
    closeRef.current?.focus();
    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
      if (dialog.open) dialog.close();
      returnTo?.focus();
    };
  }, [returnFocusRef]);

  const trapFocus = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key !== "Tab") return;
    const focusables = dialogRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
    // Skip the <object> fallback links when the PDF renders (they aren't laid out)
    const list = Array.from(focusables ?? []).filter((el) => el.getClientRects().length > 0);
    if (list.length === 0) return;
    const first = list[0];
    const last = list[list.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="pdf-modal"
      aria-labelledby={titleId}
      onCancel={(e) => {
        // Escape: let React state own closing so focus is restored consistently
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        // Clicks on the ::backdrop target the <dialog> itself
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={trapFocus}
    >
      <div className="pdf-modal__bar">
        <h2 id={titleId} className="pdf-modal__title">
          {title} <span className="pdf-modal__fmt">PDF</span>
        </h2>
        <div className="pdf-modal__actions">
          <a className="btn btn--solid pdf-modal__btn" href={src} download={downloadName}>
            Download PDF
          </a>
          <a
            className="btn pdf-modal__btn"
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open in New Tab (opens the PDF in a new browser tab)"
          >
            Open in New Tab
          </a>
          <button
            type="button"
            ref={closeRef}
            className="btn pdf-modal__btn pdf-modal__close"
            onClick={onClose}
            aria-label={`Close ${title} preview`}
          >
            Close <span aria-hidden="true">✕</span>
          </button>
        </div>
      </div>

      <div className="pdf-modal__viewer">
        <object
          className="pdf-modal__object"
          data={src}
          type="application/pdf"
          aria-label={`${title} document preview`}
          tabIndex={-1}
        >
          <div className="pdf-modal__fallback">
            <p>Your browser can&apos;t display this PDF here.</p>
            <p>
              <a className="link-underline" href={src} download={downloadName}>
                Download PDF
              </a>
              <a className="link-underline" href={src} target="_blank" rel="noopener noreferrer">
                Open in New Tab
              </a>
            </p>
          </div>
        </object>
      </div>
    </dialog>
  );
}
