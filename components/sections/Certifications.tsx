import SectionHeader from "./SectionHeader";
import { CERTIFICATIONS } from "@/lib/data/certifications";

export default function Certifications() {
  return (
    <section id="certs" className="section certs" aria-label="Certifications & compliance">
      <div className="shell">
        <SectionHeader eyebrow="Compliance" title="Certifications & compliance" />
        <p className="certs__lede reveal">
          Responsible sourcing and regulatory compliance are non-negotiable at VERAWOOD. Every
          collection we release is engineered to satisfy applicable U.S. requirements governing
          lawful wood sourcing and composite wood emissions.
        </p>

        <div className="certs__grid">
          {CERTIFICATIONS.map((cert, i) => (
            <article
              key={cert.id}
              className="certs__item reveal"
              data-delay={i > 0 ? String(i) : undefined}
            >
              <span className="certs__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="certs__title">{cert.title}</h3>
              {/* {cert.status === "draft" && (
                <span className="certs__status">Verification in progress</span>
              )} */}
              {cert.body.map((paragraph, pi) => (
                <p key={pi} className="certs__body">
                  {paragraph}
                </p>
              ))}
              {/* {cert.status === "draft" && cert.pendingNote && (
                <p className="certs__body certs__body--note">{cert.pendingNote}</p>
              )} */}
              {cert.certificateHref && (
                <a
                  href={cert.certificateHref}
                  className="link-underline certs__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${cert.title} certificate (opens PDF in a new tab)`}
                >
                  {cert.certificateLabel ?? "View Certificate"} <span className="arr">→</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
