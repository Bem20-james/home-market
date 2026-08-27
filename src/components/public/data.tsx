import {
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";

export const navItems = [
  { label: "Home", path: "/" },
  { label: "Listings", path: "/listings" },
  { label: "About", path: "/about" },
];

export const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Assessments", href: "#" },
      { label: "Methodology", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Enterprise", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Research Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export const socials = [
  { label: "X", icon: FaXTwitter },
  { label: "Li", icon: FaLinkedin },
  { label: "Ig", icon: FaInstagram },
  { label: "Yt", icon: FaYoutube },
  { label: "Fb", icon: FaFacebook },
  { label: "wh", icon: FaWhatsapp },
];

// ─── Sample data — replace with real API data ──────────────────────────

export type StepsType = {
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  active?: boolean;
};

export const steps: StepsType[] = [
  {
    eyebrow: "Step 01",
    title: "Browse & Filter",
    description:
      "Explore tailored listings with advanced filters for price, location, and specific amenities you need.",
    icon: <SearchRoundedIcon sx={{ fontSize: 26 }} />,
  },
  {
    eyebrow: "Step 02",
    title: "Connect Directly",
    description:
      "Chat with verified landlords or property managers in real-time through our secure messaging portal.",
    icon: <ChatBubbleOutlineRoundedIcon sx={{ fontSize: 26 }} />,
  },
  {
    eyebrow: "Step 03",
    title: "Secure & Move",
    description:
      "Finalize payments and digital contracts safely on our platform. Collect your keys and settle in.",
    icon: <VpnKeyRoundedIcon sx={{ fontSize: 26 }} />,
    active: true,
  },
];

export type BadgeType = "verified" | "featured";

export interface Listing {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  badge: BadgeType;
  beds: number;
  baths: number;
  sqft: number;
}

export const LISTINGS: Listing[] = [
  {
    id: 1,
    title: "Lekki Skyline Loft",
    location: "Phase 1, Lekki",
    price: 2400,
    image: "/home/prop1.png",
    badge: "verified",
    beds: 3,
    baths: 2,
    sqft: 1200,
  },
  {
    id: 2,
    title: "The Oasis Garden Villa",
    location: "Ikoyi, Lagos",
    price: 5500,
    image: "/home/prop2.png",
    badge: "featured",
    beds: 5,
    baths: 4,
    sqft: 3500,
  },
  {
    id: 3,
    title: "Urban Studio Loft",
    location: "Victoria Island",
    price: 1200,
    image: "/home/prop3.png",
    badge: "verified",
    beds: 1,
    baths: 1,
    sqft: 650,
  },
  {
    id: 4,
    title: "Banana Island Penthouse",
    location: "Banana Island, Lagos",
    price: 8900,
    image: "/home/prop3.png",
    badge: "featured",
    beds: 4,
    baths: 3,
    sqft: 4200,
  },
  {
    id: 5,
    title: "Ikeja GRA Corner Suite",
    location: "GRA, Ikeja",
    price: 1800,
    image: "/home/prop2.png",
    badge: "verified",
    beds: 2,
    baths: 2,
    sqft: 950,
  },
  {
    id: 6,
    title: "Eko Atlantic Skyview",
    location: "Eko Atlantic, Lagos",
    price: 7200,
    image: "/home/prop1.png",
    badge: "featured",
    beds: 3,
    baths: 3,
    sqft: 2800,
  },
];

export const ORBIT_IMAGES = [
  { src: "/listings/kitchen-dark.jpg", alt: "Modern kitchen" },
  { src: "/listings/bedroom-light.jpg", alt: "Bright bedroom" },
  { src: "/listings/living-garden.jpg", alt: "Garden living room" },
  { src: "/listings/hallway-city.jpg", alt: "City view" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "As a diaspora investor, finding a reliable platform to list my properties in Lagos was a nightmare until I found this. The verification process gives both me and my tenants peace of mind.",
    name: "Adebayo O.",
    role: "Property Owner, UK/NG",
    avatar: "/avatars/adebayo.jpg",
    stars: 5,
    tag: "Landlord",
  },
  {
    id: 2,
    quote:
      "Found my studio apartment in just 3 days! The direct chat with the landlord helped me negotiate terms that weren't on the listing.",
    name: "Sarah K.",
    role: "Tenant, Nairobi",
    avatar: "/avatars/sarah.jpg",
    stars: 5,
    tag: "Landlord",
  },
  {
    id: 3,
    quote:
      "We relocated 40 employees to Lagos in one quarter. The corporate dashboard made bulk housing management something our team can actually handle.",
    name: "Emeka T.",
    role: "HR Director, Abuja",
    avatar: "/avatars/emeka.jpg",
    stars: 5,
    tag: "Landlord",
  },
  {
    id: 4,
    quote:
      "The background checks saved me from renting to a tenant with three prior evictions. I'd never list anywhere else.",
    name: "Fatima A.",
    role: "Landlord, Ikoyi",
    avatar: "/avatars/fatima.jpg",
    stars: 5,
    tag: "Landlord",
  },
];

// ─── Data — swap image paths for real assets ──────────────────────────────────
export interface GridItem {
  id: number;
  label: string;
  sublabel: string;
  image: string;
  // grid placement
  colSpan?: number;
  rowSpan?: number;
}

export const PAGES: GridItem[][] = [
  [
    {
      id: 1,
      label: "100M & Below",
      sublabel: "340 properties",
      image: "/locations/budget-property.jpg",
      rowSpan: 2,
    },
    {
      id: 2,
      label: "Lagos",
      sublabel: "1,240 listings",
      image: "/locations/lagos.jpg",
    },
    {
      id: 3,
      label: "Ibadan",
      sublabel: "418 listings",
      image: "/locations/ibadan.jpg",
      rowSpan: 2,
    },
    {
      id: 4,
      label: "Kano",
      sublabel: "209 listings",
      image: "/locations/kano.jpg",
    },
    {
      id: 5,
      label: "Abuja",
      sublabel: "872 listings",
      image: "/locations/abuja.jpg",
    },
    {
      id: 6,
      label: "Port Harcourt",
      sublabel: "314 listings",
      image: "/locations/port-harcourt.jpg",
    },
  ],
  // Page 2
  [
    {
      id: 7,
      label: "Enugu",
      sublabel: "192 listings",
      image: "/locations/enugu.jpg",
      rowSpan: 2,
    },
    {
      id: 8,
      label: "Calabar",
      sublabel: "156 listings",
      image: "/locations/calabar.jpg",
    },
    {
      id: 9,
      label: "Warri",
      sublabel: "203 listings",
      image: "/locations/warri.jpg",
      rowSpan: 2,
    },
    {
      id: 10,
      label: "Owerri",
      sublabel: "141 listings",
      image: "/locations/owerri.jpg",
    },
    {
      id: 11,
      label: "Benin City",
      sublabel: "178 listings",
      image: "/locations/benin.jpg",
    },
    {
      id: 12,
      label: "Asaba",
      sublabel: "98 listings",
      image: "/locations/asaba.jpg",
    },
  ],
];
