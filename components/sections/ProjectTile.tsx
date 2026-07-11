import Image from "next/image";
import type { Project } from "@/types";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import LinkUnderline from "@/components/ui/LinkUnderline";

interface Props {
  project: Project;
  delay?: number;
  headingLevel?: "h3" | "h4";
}

export default function ProjectTile({ project, delay, headingLevel: Tag = "h4" }: Props) {
  return (
    <div className="proj-tile reveal" data-delay={delay}>
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="media"
          sizes="(max-width: 820px) 100vw, 50vw"
        />
      ) : (
        <MediaPlaceholder caption={project.imagePlaceholder} />
      )}
      <div className="proj-tile__cap">
        <Tag className="display">{project.title}</Tag>
        <p className="cap">{project.caption}</p>
        {project.href && project.linkLabel && (
          <LinkUnderline href={project.href}>{project.linkLabel}</LinkUnderline>
        )}
      </div>
    </div>
  );
}
