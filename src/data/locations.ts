import { MAPS_URLS, PRIMARY_BOOKING_URL } from "@/lib/constants";

export type OpeningHoursSpecification = {
  dayOfWeek: string | string[];
  opens: string;
  closes: string;
};

export type Location = {
  slug: "norterra" | "peoria";
  title: string;
  schemaName: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  hoursBadge: string;
  hours: Array<{ day: string; hours: string }>;
  openingHoursSpecification: OpeningHoursSpecification[];
  postalCode: string;
  latitude: number;
  longitude: number;
  bookingUrl: string;
  directionsUrl: string;
  image: string;
};

export const locations: Location[] = [
  {
    slug: "norterra",
    title: "Norterra — Phoenix",
    schemaName: "Men's Lounge Barbershop — Norterra",
    city: "Phoenix",
    addressLine1: "2501 W Happy Valley Rd, Suite #32-1070",
    addressLine2: "Phoenix, AZ 85085",
    phoneDisplay: "(623) 556-3193",
    phoneHref: "tel:+16235563193",
    email: "mensloungebarbershop@gmail.com",
    hoursBadge: "Open Today · Walk-ins Welcome",
    hours: [
      { day: "Mon–Fri", hours: "9:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 4:00 PM (Walk-ins Only)" },
      { day: "Sunday", hours: "10:00 AM – 3:00 PM (Walk-ins Only)" },
    ],
    openingHoursSpecification: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      { dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
      { dayOfWeek: "Sunday", opens: "10:00", closes: "15:00" },
    ],
    postalCode: "85085",
    latitude: 33.7172,
    longitude: -112.107,
    bookingUrl: PRIMARY_BOOKING_URL,
    directionsUrl: MAPS_URLS.norterra,
    image: "/images/locations/norterra-placeholder.svg",
  },
  {
    slug: "peoria",
    title: "Peoria",
    schemaName: "Men's Lounge Barbershop — Peoria",
    city: "Peoria",
    addressLine1: "6791 W Happy Valley Rd, Suite 105",
    addressLine2: "Peoria, AZ 85383",
    phoneDisplay: "(623) 440-9412",
    phoneHref: "tel:+16234409412",
    email: "Mensloungepeoria@gmail.com",
    hoursBadge: "Open Today · Walk-ins Welcome",
    hours: [
      { day: "Mon–Fri", hours: "9:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 4:00 PM (Walk-ins Only)" },
      { day: "Sunday", hours: "Closed" },
    ],
    openingHoursSpecification: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      { dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
    ],
    postalCode: "85383",
    latitude: 33.7181,
    longitude: -112.237,
    bookingUrl: PRIMARY_BOOKING_URL,
    directionsUrl: MAPS_URLS.peoria,
    image: "/images/locations/peoria-placeholder.svg",
  },
];
