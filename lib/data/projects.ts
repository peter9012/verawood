import type { Project } from "@/types";

/** Feature project on Home + Gallery */
export const FEATURE_PROJECT: Project = {
  id: "casa-meridian",
  title: "Casa Meridian",
  caption: "Marfa, Texas · Budapest",
  imagePlaceholder:
    "PROJECT · cinematic full-bleed interior — double-height living space, Ombra walnut floor, stone fireplace, dusk",
  image: "/image/project/casa.jpg",
};

/** Home page teaser row (2 tiles) */
export const HOME_PROJECTS: Project[] = [
  {
    id: "audo-residence",
    title: "The Audo Residence",
    caption: "Copenhagen, Denmark · Bristol",
    imagePlaceholder: "PROJECT · Copenhagen apartment, pale Alba oak, Scandinavian light",
    image: "/image/project/copenhagen.jpg",
  },
  {
    id: "hillside-pavilion",
    title: "Hillside Pavilion",
    caption: "Big Sur, CA · Athens",
    imagePlaceholder: "PROJECT · Big Sur hillside pavilion, Brume ash, glass walls, fog",
    image: "/image/project/bigsur.jpg",
  },
];

/** Full gallery grid (6 projects) */
export const GALLERY_PROJECTS: Project[] = [
  {
    id: "casa-meridian",
    title: "Casa Meridian",
    caption: "Marfa, Texas · Budapest",
    imagePlaceholder:
      "PROJECT · cinematic full-bleed interior — double-height living space, Ombra walnut floor, stone fireplace, dusk",
    image: "/image/project/casa.jpg",
  },
  {
    id: "audo-residence",
    title: "The Audo Residence",
    caption: "Copenhagen, Denmark · Bristol",
    imagePlaceholder: "PROJECT · Copenhagen apartment, pale Alba oak, Scandinavian light",
    image: "/image/project/copenhagen.jpg",
  },
  {
    id: "hillside-pavilion",
    title: "Hillside Pavilion",
    caption: "Big Sur, CA · Athens",
    imagePlaceholder: "PROJECT · Big Sur hillside pavilion, Brume ash, glass walls, fog",
    image: "/image/project/bigsur.jpg",
  },
  {
    id: "founders-mill",
    title: "The Harbor House",
    caption: "Seattle, Washington · Oxford",
    imagePlaceholder:
      "PROJECT · converted Victorian mill, smoked oak floor, original brick, industrial detail",
    image: "/image/project/seattle.jpg",
  },
  {
    id: "hotel-sainte-adresse",
    title: "Casa Ventana",
    caption: "Santa Barbara, California · Valencia",
    imagePlaceholder:
      "PROJECT · boutique hotel corridor, honey oak floor, coastal morning light, pale palette",
    image: "/image/project/santabarbara.jpg",
  },
  {
    id: "studio-greyline",
    title: "The Courtyard Residence",
    caption: "Charleston, South Carolina · Lancaster",
    imagePlaceholder:
      "PROJECT · photographer's studio, graphite ash floor, north light, concrete walls",
    image: "/image/project/charleston.png",
  },
];
