export interface NavItem {
  label: string;
  href: string;
}

export const NAV_LEFT: NavItem[] = [
  { label: "Collections", href: "/products" },
  { label: "Gallery", href: "/gallery" },
];

export const NAV_RIGHT: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const NAV_MOBILE: NavItem[] = [
  { label: "Collections", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
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
