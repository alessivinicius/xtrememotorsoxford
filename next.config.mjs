/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Real dealership photography/video (Ricardo, the buying process, the
  // showroom) lives in /public and is served via next/image with no extra
  // config needed. The 6 mock stock listings still use on-brand SVG/CSS
  // placeholders (see components/vehicles/VehiclePlaceholder.tsx) since
  // there's no individual photography for fictional demo vehicles yet.
  // Add `images.remotePatterns` here if photography later moves to a CDN.
};

export default nextConfig;
