export const company = {
  name: "Xtreme Motors Oxford",
  shortName: "Xtreme Motors",
  locality: "Oxford",
  phone: "07575 921021",
  phoneHref: "tel:+447575921021",
  whatsappHref: "https://wa.me/447575921021",
  email: "info@xtrememotorsoxford.co.uk",
  address: {
    line1: "5 Powell's Yard",
    line2: "Littleworth",
    city: "Oxford",
    postcode: "OX33 1TR",
    country: "United Kingdom",
    full: "5 Powell's Yard, Littleworth, Oxford OX33 1TR",
  },
  // Approximate coordinates for Littleworth, Oxford — replace with exact
  // pin coordinates before going live.
  geo: {
    lat: 51.7402,
    lng: -1.1462,
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=5+Powell%27s+Yard%2C+Littleworth%2C+Oxford+OX33+1TR",
  hours: [
    { day: "Monday", hours: "9:30am – 5:30pm" },
    { day: "Tuesday", hours: "9:30am – 5:30pm" },
    { day: "Wednesday", hours: "9:30am – 5:30pm" },
    { day: "Thursday", hours: "9:30am – 5:30pm" },
    { day: "Friday", hours: "9:30am – 5:30pm" },
    { day: "Saturday", hours: "10am – 5pm" },
    { day: "Sunday", hours: "Closed" },
  ],
  reviews: {
    rating: 5.0,
    count: 114,
    platform: "Google",
  },
  warranty: {
    inspectionPoints: 100,
    minMonths: 3,
    extendable: true,
  },
  social: {
    facebook: "#",
    instagram: "#",
  },
} as const;

export type Company = typeof company;
