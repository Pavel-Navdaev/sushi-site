import React from "react";
import ContentLoader from "react-content-loader";

const SushiSkeleton: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={271}
    height={389}
    viewBox="0 0 271 389"
    backgroundColor="#f0f0f0"
    foregroundColor="#d9d9d9"
    {...props}
  >
    <circle cx="135" cy="135" r="100" />
    <rect x="45" y="255" rx="6" ry="6" width="180" height="22" />
    <rect x="0" y="289" rx="12" ry="12" width="271" height="50" />
    <rect x="0" y="358" rx="0" ry="0" width="130" height="25" />
    <rect x="138" y="357" rx="15" ry="15" width="130" height="30" />
  </ContentLoader>
);

export default SushiSkeleton;
