import Image from "next/image";
import type { Project } from "@/types";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";

interface Props {
  project: Project;
}

export default function ProjectFeature({ project }: Props) {
  return (
    <div className="feature reveal">
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="media"
          sizes="100vw"
          priority
        />
      ) : (
        <MediaPlaceholder caption={project.imagePlaceholder} />
      )}
      <div className="feature__cap">
        <h3 className="display">{project.title}</h3>
        <p className="cap">{project.caption}</p>
      </div>
    </div>
  );
}
