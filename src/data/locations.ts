import {
  MAPS_URLS,
  PEORIA_BOOKING_URL,
  PRIMARY_BOOKING_URL,
} from "@/lib/constants";

export type Location = {
  slug: "norterra" | "peoria";
  title: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  hoursBadge: string;
  hours: Array<{ day: string; hours: string }>;
  bookingUrl: string;
  directionsUrl: string;
  image: string;
};

export const locations: Location[] = [
  {
    slug: "norterra",
    title: "Norterra — Phoenix",
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
    bookingUrl: PRIMARY_BOOKING_URL,
    directionsUrl: MAPS_URLS.norterra,
    image: "/images/locations/norterra-placeholder.jpg",
  },
  {
    slug: "peoria",
    title: "Peoria",
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
    bookingUrl: PEORIA_BOOKING_URL,
    directionsUrl: MAPS_URLS.peoria,
    image: "/images/locations/peoria-placeholder.jpg",
  },
];

