import type { Project } from "@/types";
import ProjectTile from "./ProjectTile";

interface Props {
  projects: Project[];
}

export default function GalleryGrid({ projects }: Props) {
  return (
    <div className="gallery-grid">
      {projects.map((project, i) => (
        <ProjectTile
          key={project.id}
          project={project}
          delay={i % 3 === 0 ? undefined : i % 3}
          headingLevel="h3"
        />
      ))}
    </div>
  );
}
