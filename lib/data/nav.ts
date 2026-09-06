export interface NavItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: "Collections", href: "/products" },
  { label: "Projects", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  explore: [
    { label: "Collections", href: "/products" },
    // { label: "Products", href: "/products" },
    { label: "Gallery", href: "/gallery" },
    // { label: "Craftsmanship", href: "/craftsmanship" },
  ],
  company: [
    { label: "About", href: "/about" },
    // { label: "Sustainability", href: "/sustainability" },
    { label: "Contact", href: "/contact" },
  ],
  trade: [{ label: "Request Samples", href: "/samples" }],
};
