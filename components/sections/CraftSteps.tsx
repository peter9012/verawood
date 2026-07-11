import type { CraftStep } from "@/types";

interface Props {
  steps: CraftStep[];
  columns?: 3 | 4;
  delay?: number;
}

export default function CraftSteps({ steps, columns = 3, delay }: Props) {
  const cls = ["craft__steps", columns === 4 ? "craft__steps--4" : ""].filter(Boolean).join(" ");

  return (
    <div
      className={`${cls} reveal`}
      data-delay={delay}
    >
      {steps.map((step) => (
        <div key={step.number} className="craft__step">
          <div className="n">{step.number}</div>
          <div className="t">{step.title}</div>
          <div className="d">{step.description}</div>
        </div>
      ))}
    </div>
  );
}
