interface Props {
  caption: string;
}

const CameraIcon = () => (
  <svg
    className="media-placeholder__icon"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="m21 15-5-5L5 21" />
  </svg>
);

export default function MediaPlaceholder({ caption }: Props) {
  return (
    <div className="media media-placeholder">
      <CameraIcon />
      <span className="media-placeholder__cap">{caption}</span>
    </div>
  );
}
