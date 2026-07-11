import type { Project } from "@/types";

/** Feature project on Home + Gallery */
export const FEATURE_PROJECT: Project = {
  id: "casa-meridian",
  title: "Casa Meridian",
  caption: "Marfa, Texas · Architecture by Halden & Roe · Ombra Walnut",
  imagePlaceholder:
    "PROJECT · cinematic full-bleed interior — double-height living space, Ombra walnut floor, stone fireplace, dusk",
  image: "/image/project/casa.jpg",
};

/** Home page teaser row (2 tiles) */
export const HOME_PROJECTS: Project[] = [
  {
    id: "audo-residence",
    title: "The Audo Residence",
    caption: "Copenhagen, DK · Alba Oak",
    imagePlaceholder: "PROJECT · Copenhagen apartment, pale Alba oak, Scandinavian light",
    image: "/image/project/copenhagen.jpg",
  },
  {
    id: "hillside-pavilion",
    title: "Hillside Pavilion",
    caption: "Big Sur, CA · Brume Ash",
    imagePlaceholder: "PROJECT · Big Sur hillside pavilion, Brume ash, glass walls, fog",
    image: "/image/project/bigsur.jpg",
  },
];

/** Full gallery grid (6 projects) */
export const GALLERY_PROJECTS: Project[] = [
  {
    id: "casa-meridian",
    title: "Casa Meridian",
    caption: "Marfa, Texas · Halden & Roe · Ombra Walnut",
    imagePlaceholder:
      "PROJECT · cinematic full-bleed interior — double-height living space, Ombra walnut floor, stone fireplace, dusk",
  },
  {
    id: "audo-residence",
    title: "The Audo Residence",
    caption: "Copenhagen, DK · Alba Oak",
    imagePlaceholder: "PROJECT · Copenhagen apartment, pale Alba oak, Scandinavian light",
  },
  {
    id: "hillside-pavilion",
    title: "Hillside Pavilion",
    caption: "Big Sur, CA · Brume Ash",
    imagePlaceholder: "PROJECT · Big Sur hillside pavilion, Brume ash, glass walls, fog",
  },
  {
    id: "founders-mill",
    title: "The Founders' Mill",
    caption: "Leeds, UK · Fumo Oak",
    imagePlaceholder:
      "PROJECT · converted Victorian mill, smoked oak floor, original brick, industrial detail",
  },
  {
    id: "hotel-sainte-adresse",
    title: "Hôtel Sainte-Adresse",
    caption: "Normandy, FR · Miele Oak",
    imagePlaceholder:
      "PROJECT · boutique hotel corridor, honey oak floor, coastal morning light, pale palette",
  },
  {
    id: "studio-greyline",
    title: "Studio Greyline",
    caption: "Antwerp, BE · Smoked Ash",
    imagePlaceholder:
      "PROJECT · photographer's studio, graphite ash floor, north light, concrete walls",
  },
];
