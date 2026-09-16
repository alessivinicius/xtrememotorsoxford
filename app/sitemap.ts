import type { MetadataRoute } from "next";
import { vehicles } from "@/data/vehicles";

const siteUrl = "https://www.xtrememotorsoxford.co.uk";

const staticRoutes = [
  "",
  "/stock",
  "/about",
  "/warranty",
  "/sell-your-car",
  "/contact",
  "/finance",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/stock" ? "daily" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const vehicleEntries: MetadataRoute.Sitemap = vehicles.map((vehicle) => ({
    url: `${siteUrl}/stock/${vehicle.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...vehicleEntries];
}
