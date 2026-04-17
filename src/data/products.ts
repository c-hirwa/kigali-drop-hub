import hoodie1 from "@/assets/product-hoodie-1.jpg";
import hoodie2 from "@/assets/product-hoodie-2.jpg";
import jewelry1 from "@/assets/product-jewelry-1.jpg";
import jewelry2 from "@/assets/product-jewelry-2.jpg";
import tee1 from "@/assets/product-tee-1.jpg";
import cap1 from "@/assets/product-cap-1.jpg";

export type DropId = "drop-001" | "drop-002" | "drop-003";

export type Product = {
  id: string;
  name: string;
  price: number;
  drop: DropId;
  image: string;
  description: string;
  sizes?: string[];
  isNew?: boolean;
  comingSoon?: boolean;
};

export const drops: { id: DropId; label: string; tagline: string; locked?: boolean }[] = [
  { id: "drop-001", label: "Drop 001", tagline: "The Origin." },
  { id: "drop-002", label: "Drop 002", tagline: "Live Now." },
  { id: "drop-003", label: "Drop 003", tagline: "Coming Soon.", locked: true },
];

export const products: Product[] = [
  // Drop 001
  {
    id: "1",
    name: "Phantom Hoodie — Black",
    price: 85,
    drop: "drop-001",
    image: hoodie1,
    description: "Heavyweight. Oversized. Blacked out.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "2",
    name: "Shinobi Chain",
    price: 120,
    drop: "drop-001",
    image: jewelry1,
    description: "18K plated. Custom pendant.",
  },
  {
    id: "3",
    name: "Static Tee — Black",
    price: 45,
    drop: "drop-001",
    image: tee1,
    description: "100% cotton. Graphic print.",
    sizes: ["S", "M", "L", "XL"],
  },
  // Drop 002
  {
    id: "4",
    name: "Void Hoodie — Brown",
    price: 90,
    drop: "drop-002",
    image: hoodie2,
    description: "Espresso brown. Dropped shoulders.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
  },
  {
    id: "5",
    name: "Hex Ring",
    price: 65,
    drop: "drop-002",
    image: jewelry2,
    description: "Geometric. Bold. Limited run.",
    isNew: true,
  },
  {
    id: "6",
    name: "Stealth Cap",
    price: 35,
    drop: "drop-002",
    image: cap1,
    description: "Minimal branding. Premium fabric.",
    isNew: true,
  },
  // Drop 003 — Coming Soon
  {
    id: "7",
    name: "???",
    price: 0,
    drop: "drop-003",
    image: hoodie1,
    description: "Locked.",
    comingSoon: true,
  },
  {
    id: "8",
    name: "???",
    price: 0,
    drop: "drop-003",
    image: jewelry1,
    description: "Locked.",
    comingSoon: true,
  },
  {
    id: "9",
    name: "???",
    price: 0,
    drop: "drop-003",
    image: tee1,
    description: "Locked.",
    comingSoon: true,
  },
];
