interface Props {
  id: string;
  /** Short index shown above the heading, e.g. "01" */
  number: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}

/** One topic on the Care & Maintenance page: heading column beside its content. */
export default function CareBlock({ id, number, title, intro, children }: Props) {
  return (
    <section className="care-block" id={id} aria-labelledby={`${id}-heading`}>
      <div className="care-block__head reveal">
        <span className="care-block__num">{number}</span>
        <h2 id={`${id}-heading`} className="care-block__title">{title}</h2>
        {intro && <p className="care-block__intro">{intro}</p>}
      </div>
      <div className="care-block__body reveal" data-delay="1">
        {children}
      </div>
    </section>
  );
}
