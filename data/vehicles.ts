// ---------------------------------------------------------------------------
// MOCK DATA — DEMONSTRATION PURPOSES ONLY
//
// The vehicles below are fictional and exist to demonstrate the stock grid,
// filtering and vehicle detail layout. They are not real cars currently for
// sale. Replace this file with a real data source (CMS / database / DMS
// feed) before launch, and remove the `isMockData` flag once real stock is
// connected.
//
// Vehicle photography is intentionally NOT hot-linked from stock photo
// sites — each vehicle instead renders an on-brand illustrated placeholder
// (see components/vehicles/VehiclePlaceholder.tsx) until real photography
// of each car is uploaded to /public/vehicles.
// ---------------------------------------------------------------------------

export type FuelType = "Petrol" | "Diesel" | "Hybrid" | "Electric";
export type TransmissionType = "Manual" | "Automatic";
export type VehicleStatus = "In Stock" | "Reserved" | "Sold";

export interface Vehicle {
  id: number;
  slug: string;
  make: string;
  model: string;
  variant: string;
  year: number;
  price: number;
  mileage: number;
  fuel: FuelType;
  transmission: TransmissionType;
  engineSize: string;
  doors: number;
  colour: string;
  bodyType: string;
  status: VehicleStatus;
  isFeatured: boolean;
  description: string[];
  features: string[];
  serviceHistory: string;
  imageSeed: string;
}

export const isMockData = true;

export const vehicles: Vehicle[] = [
  {
    id: 1,
    slug: "bmw-3-series-2018",
    make: "BMW",
    model: "3 Series",
    variant: "320d M Sport",
    year: 2018,
    price: 13495,
    mileage: 52000,
    fuel: "Diesel",
    transmission: "Automatic",
    engineSize: "2.0L",
    doors: 4,
    colour: "Mineral Grey",
    bodyType: "Saloon",
    status: "In Stock",
    isFeatured: true,
    description: [
      "A well-kept 320d M Sport finished in Mineral Grey, offered with a documented service history.",
      "Presented in genuinely good condition throughout, inside and out, and prepared before joining our stock.",
    ],
    features: [
      "M Sport styling package",
      "Heated leather seats",
      "Satellite navigation",
      "Parking sensors, front and rear",
      "Cruise control",
      "Two keys",
    ],
    serviceHistory: "Full main dealer service history",
    imageSeed: "bmw-3-series",
  },
  {
    id: 2,
    slug: "audi-a4-avant-2019",
    make: "Audi",
    model: "A4 Avant",
    variant: "2.0 TDI Sport",
    year: 2019,
    price: 13995,
    mileage: 41500,
    fuel: "Diesel",
    transmission: "Manual",
    engineSize: "2.0L",
    doors: 5,
    colour: "Glacier White",
    bodyType: "Estate",
    status: "In Stock",
    isFeatured: true,
    description: [
      "A practical and efficient A4 Avant, ideal for longer journeys or those needing extra boot space.",
      "Comes with a clean history and has been thoroughly checked over ahead of sale.",
    ],
    features: [
      "Virtual cockpit display",
      "Alloy wheels",
      "Bluetooth and DAB radio",
      "Automatic lights and wipers",
      "Roof rails",
    ],
    serviceHistory: "Full service history",
    imageSeed: "audi-a4-avant",
  },
  {
    id: 3,
    slug: "volkswagen-golf-2020",
    make: "Volkswagen",
    model: "Golf",
    variant: "1.5 TSI Match",
    year: 2020,
    price: 12995,
    mileage: 28900,
    fuel: "Petrol",
    transmission: "Manual",
    engineSize: "1.5L",
    doors: 5,
    colour: "Deep Black Pearl",
    bodyType: "Hatchback",
    status: "In Stock",
    isFeatured: true,
    description: [
      "A low-mileage Golf finished in Deep Black Pearl, ideal as a first car or dependable family runaround.",
      "Presented in excellent condition with only one previous keeper.",
    ],
    features: [
      "Apple CarPlay & Android Auto",
      "Cruise control",
      "Rear parking sensors",
      "Air conditioning",
      "One former keeper",
    ],
    serviceHistory: "Full service history",
    imageSeed: "vw-golf",
  },
  {
    id: 4,
    slug: "mercedes-c-class-2017",
    make: "Mercedes-Benz",
    model: "C-Class",
    variant: "C220d AMG Line",
    year: 2017,
    price: 11495,
    mileage: 61200,
    fuel: "Diesel",
    transmission: "Automatic",
    engineSize: "2.1L",
    doors: 4,
    colour: "Obsidian Black",
    bodyType: "Saloon",
    status: "In Stock",
    isFeatured: false,
    description: [
      "An AMG Line C220d with a strong specification and confident, comfortable drive.",
      "Mileage is reflected honestly in the price — a straightforward, usable saloon with plenty of life left in it.",
    ],
    features: [
      "AMG styling package",
      "Leather upholstery",
      "Reversing camera",
      "Keyless start",
      "Two keys",
    ],
    serviceHistory: "Partial service history",
    imageSeed: "mercedes-c-class",
  },
  {
    id: 5,
    slug: "ford-focus-2019",
    make: "Ford",
    model: "Focus",
    variant: "1.0 EcoBoost Titanium",
    year: 2019,
    price: 8995,
    mileage: 36700,
    fuel: "Petrol",
    transmission: "Manual",
    engineSize: "1.0L",
    doors: 5,
    colour: "Magnetic Grey",
    bodyType: "Hatchback",
    status: "In Stock",
    isFeatured: true,
    description: [
      "An economical and easy-to-drive Focus Titanium, well suited to daily commuting.",
      "A sensible, well-priced choice backed by a clear history.",
    ],
    features: [
      "Sat nav",
      "Heated front seats",
      "Automatic climate control",
      "Alloy wheels",
      "DAB radio",
    ],
    serviceHistory: "Full service history",
    imageSeed: "ford-focus",
  },
  {
    id: 6,
    slug: "range-rover-evoque-2018",
    make: "Land Rover",
    model: "Range Rover Evoque",
    variant: "2.0 TD4 SE",
    year: 2018,
    price: 14750,
    mileage: 47300,
    fuel: "Diesel",
    transmission: "Automatic",
    engineSize: "2.0L",
    doors: 5,
    colour: "Santorini Black",
    bodyType: "SUV",
    status: "In Stock",
    isFeatured: true,
    description: [
      "A smart SE-spec Evoque that combines everyday usability with genuine kerb appeal.",
      "Inspected and prepared before joining our stock, with any minor items addressed prior to sale.",
    ],
    features: [
      "Panoramic sunroof",
      "Heated leather seats",
      "Meridian sound system",
      "Front and rear parking sensors",
      "Automatic tailgate",
    ],
    serviceHistory: "Full service history",
    imageSeed: "range-rover-evoque",
  },
  {
    id: 7,
    slug: "vauxhall-corsa-2015",
    make: "Vauxhall",
    model: "Corsa",
    variant: "1.4 Design",
    year: 2015,
    price: 3495,
    mileage: 68000,
    fuel: "Petrol",
    transmission: "Manual",
    engineSize: "1.4L",
    doors: 5,
    colour: "Flame Red",
    bodyType: "Hatchback",
    status: "In Stock",
    isFeatured: true,
    description: [
      "A dependable Corsa Design, ideal as a first car or an economical second vehicle.",
      "Straightforward to insure and cheap to run, backed up by a service history.",
    ],
    features: [
      "Air conditioning",
      "Electric windows",
      "Alloy wheels",
      "Bluetooth connectivity",
    ],
    serviceHistory: "Partial service history",
    imageSeed: "vauxhall-corsa",
  },
  {
    id: 8,
    slug: "toyota-yaris-2014",
    make: "Toyota",
    model: "Yaris",
    variant: "1.33 VVT-i Icon",
    year: 2014,
    price: 4295,
    mileage: 74500,
    fuel: "Petrol",
    transmission: "Manual",
    engineSize: "1.3L",
    doors: 5,
    colour: "Decuma Grey",
    bodyType: "Hatchback",
    status: "In Stock",
    isFeatured: false,
    description: [
      "A well-known reliable choice, kept in tidy condition throughout.",
      "An easy, low-cost car to live with day-to-day.",
    ],
    features: [
      "Reversing camera",
      "Cruise control",
      "Bluetooth and DAB radio",
      "Toyota reliability",
    ],
    serviceHistory: "Full service history",
    imageSeed: "toyota-yaris",
  },
  {
    id: 9,
    slug: "nissan-qashqai-2016",
    make: "Nissan",
    model: "Qashqai",
    variant: "1.5 dCi Acenta",
    year: 2016,
    price: 8495,
    mileage: 58200,
    fuel: "Diesel",
    transmission: "Manual",
    engineSize: "1.5L",
    doors: 5,
    colour: "Storm White",
    bodyType: "SUV",
    status: "In Stock",
    isFeatured: true,
    description: [
      "A practical family SUV with a commanding driving position and generous boot space.",
      "Presented in good condition with a clear history.",
    ],
    features: [
      "Panoramic glass roof",
      "Rear parking sensors",
      "Cruise control",
      "Roof rails",
    ],
    serviceHistory: "Full service history",
    imageSeed: "nissan-qashqai",
  },
  {
    id: 10,
    slug: "kia-picanto-2017",
    make: "Kia",
    model: "Picanto",
    variant: "1.0 2",
    year: 2017,
    price: 4995,
    mileage: 39800,
    fuel: "Petrol",
    transmission: "Manual",
    engineSize: "1.0L",
    doors: 5,
    colour: "Clear White",
    bodyType: "Hatchback",
    status: "In Stock",
    isFeatured: false,
    description: [
      "A neat, low-mileage Picanto that's cheap to run and easy to park.",
      "A sensible choice for a first car or around-town driving.",
    ],
    features: [
      "Remaining manufacturer warranty",
      "Air conditioning",
      "Bluetooth connectivity",
      "Low road tax",
    ],
    serviceHistory: "Full service history",
    imageSeed: "kia-picanto",
  },
  {
    id: 11,
    slug: "renault-clio-2013",
    make: "Renault",
    model: "Clio",
    variant: "1.2 Dynamique",
    year: 2013,
    price: 2795,
    mileage: 89200,
    fuel: "Petrol",
    transmission: "Manual",
    engineSize: "1.2L",
    doors: 5,
    colour: "Ottoman Blue",
    bodyType: "Hatchback",
    status: "In Stock",
    isFeatured: false,
    description: [
      "A budget-friendly Clio priced to reflect its age and mileage honestly.",
      "A straightforward, usable runaround with plenty of life left in it.",
    ],
    features: [
      "Alloy wheels",
      "Electric windows",
      "Air conditioning",
      "Two former keepers",
    ],
    serviceHistory: "Partial service history",
    imageSeed: "renault-clio",
  },
  {
    id: 12,
    slug: "peugeot-208-2018",
    make: "Peugeot",
    model: "208",
    variant: "1.2 PureTech Active",
    year: 2018,
    price: 6495,
    mileage: 45300,
    fuel: "Petrol",
    transmission: "Manual",
    engineSize: "1.2L",
    doors: 5,
    colour: "Pearl White",
    bodyType: "Hatchback",
    status: "In Stock",
    isFeatured: false,
    description: [
      "A smart, efficient 208 finished in Pearl White with a tidy history.",
      "Well presented inside and out, ready to drive away.",
    ],
    features: [
      "Touchscreen infotainment",
      "Cruise control",
      "DAB radio",
      "Alloy wheels",
    ],
    serviceHistory: "Full service history",
    imageSeed: "peugeot-208",
  },
  {
    id: 13,
    slug: "skoda-fabia-2015",
    make: "Skoda",
    model: "Fabia",
    variant: "1.0 TSI SE",
    year: 2015,
    price: 4795,
    mileage: 62100,
    fuel: "Petrol",
    transmission: "Manual",
    engineSize: "1.0L",
    doors: 5,
    colour: "Candy White",
    bodyType: "Hatchback",
    status: "In Stock",
    isFeatured: false,
    description: [
      "A practical, well-built Fabia that's cheap to insure and run.",
      "A dependable choice backed by a documented history.",
    ],
    features: [
      "Bluetooth connectivity",
      "Air conditioning",
      "Alloy wheels",
      "Low insurance group",
    ],
    serviceHistory: "Full service history",
    imageSeed: "skoda-fabia",
  },
  {
    id: 14,
    slug: "hyundai-i10-2019",
    make: "Hyundai",
    model: "i10",
    variant: "1.0 SE",
    year: 2019,
    price: 6995,
    mileage: 27600,
    fuel: "Petrol",
    transmission: "Manual",
    engineSize: "1.0L",
    doors: 5,
    colour: "Polar White",
    bodyType: "Hatchback",
    status: "In Stock",
    isFeatured: false,
    description: [
      "A genuinely low-mileage i10, ideal as a first car or economical runaround.",
      "Presented in excellent condition with remaining manufacturer warranty.",
    ],
    features: [
      "Remaining manufacturer warranty",
      "Apple CarPlay & Android Auto",
      "Air conditioning",
      "Low mileage",
    ],
    serviceHistory: "Full service history",
    imageSeed: "hyundai-i10",
  },
  {
    id: 15,
    slug: "fiat-500-2011",
    make: "Fiat",
    model: "500",
    variant: "1.2 Lounge",
    year: 2011,
    price: 1795,
    mileage: 122000,
    fuel: "Petrol",
    transmission: "Manual",
    engineSize: "1.2L",
    doors: 3,
    colour: "Bossa Nova White",
    bodyType: "Hatchback",
    status: "In Stock",
    isFeatured: false,
    description: [
      "Our most budget-friendly car — an older, higher-mileage 500 priced accordingly.",
      "A cheap, cheerful runaround for anyone after the lowest possible entry price.",
    ],
    features: [
      "Panoramic sunroof",
      "Electric windows",
      "Alloy wheels",
      "Cheap to insure and run",
    ],
    serviceHistory: "Partial service history",
    imageSeed: "fiat-500",
  },
];

export function getFeaturedVehicles(limit = 6): Vehicle[] {
  return vehicles.filter((v) => v.isFeatured).slice(0, limit);
}

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export const makes = Array.from(new Set(vehicles.map((v) => v.make))).sort();
export const fuelTypes = Array.from(new Set(vehicles.map((v) => v.fuel))).sort();
export const transmissionTypes = Array.from(
  new Set(vehicles.map((v) => v.transmission))
).sort();
export const years = Array.from(new Set(vehicles.map((v) => v.year))).sort(
  (a, b) => b - a
);

export function getModelsForMake(make: string): string[] {
  return Array.from(
    new Set(vehicles.filter((v) => v.make === make).map((v) => v.model))
  ).sort();
}
