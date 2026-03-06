export type ServiceItem = {
  name: string;
  price: string;
  description?: string;
};

export type ServiceCategory = {
  title: string;
  items: ServiceItem[];
};

export type FeaturedService = {
  title: string;
  priceLabel: string;
  description: string;
  image: string;
};

export const featuredServices: FeaturedService[] = [
  {
    title: "Men's Haircut",
    priceLabel: "From $23",
    description:
      "The essential. Scissor or clipper, your choice — finished with a hot towel and neck cleanup.",
    image: "/images/services/haircut-fade.jpg",
  },
  {
    title: "Hot Towel Shave",
    priceLabel: "$30",
    description:
      "Old-fashioned straight razor. Hot towels. The shave you've been missing.",
    image: "/images/services/hot-towel-shave.jpg",
  },
  {
    title: "The Man of the Hour",
    priceLabel: "$75",
    description:
      "The full experience — haircut, shave, and the hand massage you didn't know you needed.",
    image: "/images/services/beard-trim.jpg",
  },
];

export const serviceMenu: ServiceCategory[] = [
  {
    title: "Haircuts",
    items: [
      { name: "Men's Haircut", price: "$23" },
      { name: "Electric Razor Skin Fade", price: "$25" },
      { name: "Straight Edge Skin Fade", price: "$28" },
      { name: "Head Shave", price: "$30" },
      { name: "Senior Haircut (65 & Over)", price: "$19" },
      { name: "Buzz Cut", price: "$18" },
      { name: "Kids Cut (12 & Under)", price: "$18" },
      { name: "Kids Cut w/ Razor Edge Up", price: "$21" },
      { name: "Edge Up", price: "$12" },
    ],
  },
  {
    title: "Shaves & Skin Care",
    items: [
      { name: "Old Fashion Hot Towel Shave", price: "$30" },
      { name: "Facial Cleansing Treatment", price: "$25" },
      { name: "Beard Trim", price: "$15" },
      { name: "Mustache / Goatee Trim", price: "$7" },
    ],
  },
  {
    title: "Color",
    items: [
      { name: "Color Camo (No Cut)", price: "$28" },
      { name: "Color Camo + Haircut", price: "$50" },
    ],
  },
  {
    title: "Packages",
    items: [
      { name: "Lounge Out Deluxe", price: "$50", description: "Haircut + hot towel shave" },
      { name: "Man of the Hour", price: "$75", description: "Haircut + shave + facial" },
    ],
  },
];

