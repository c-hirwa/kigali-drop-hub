import hoodie1 from "@/assets/product-hoodie-1.jpg";
import hoodie2 from "@/assets/product-hoodie-2.jpg";
import jewelry1 from "@/assets/product-jewelry-1.jpg";
import jewelry2 from "@/assets/product-jewelry-2.jpg";
import tee1 from "@/assets/product-tee-1.jpg";
import cap1 from "@/assets/product-cap-1.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "hoodies" | "jewelry" | "merch";
  image: string;
  description: string;
  sizes?: string[];
  isNew?: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Phantom Hoodie — Black",
    price: 85,
    category: "hoodies",
    image: hoodie1,
    description: "Heavyweight. Oversized. Blacked out. Once it's gone, it's gone.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
  },
  {
    id: "2",
    name: "Shinobi Chain",
    price: 120,
    category: "jewelry",
    image: jewelry1,
    description: "18K plated. Custom pendant. Not for everyone.",
    isNew: true,
  },
  {
    id: "3",
    name: "Static Tee — Black",
    price: 45,
    category: "merch",
    image: tee1,
    description: "100% cotton. Graphic print. Art meets the streets.",
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
  },
  {
    id: "4",
    name: "Void Hoodie — Green",
    price: 90,
    category: "hoodies",
    image: hoodie2,
    description: "Deep green. Dropped shoulders. Built different.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
  },
  {
    id: "5",
    name: "Hex Ring",
    price: 65,
    category: "jewelry",
    image: jewelry2,
    description: "Geometric. Bold. Statement piece. Limited run.",
    isNew: false,
  },
  {
    id: "6",
    name: "Stealth Cap",
    price: 35,
    category: "merch",
    image: cap1,
    description: "Minimal branding. Premium fabric. Low-key heat.",
    isNew: false,
  },
];
