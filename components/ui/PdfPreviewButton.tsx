"use client";

import { useRef, useState } from "react";
import PdfPreviewModal from "@/components/ui/PdfPreviewModal";

interface Props {
  title: string;
  src: string;
  downloadName: string;
  className?: string;
  children: React.ReactNode;
}

/** Trigger button that opens a PdfPreviewModal; the PDF loads only once opened. */
export default function PdfPreviewButton({ title, src, downloadName, className, children }: Props) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        className={className}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        {children}
      </button>
      {open && (
        <PdfPreviewModal
          title={title}
          src={src}
          downloadName={downloadName}
          onClose={() => setOpen(false)}
          returnFocusRef={triggerRef}
        />
      )}
    </>
  );
}
