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
    name: "Shadow Hoodie — Forest",
    price: 85,
    category: "hoodies",
    image: hoodie1,
    description: "Premium heavyweight hoodie in deep forest green. Oversized fit, brushed fleece interior. Limited drop — once it's gone, it's gone.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
  },
  {
    id: "2",
    name: "Heritage Chain",
    price: 120,
    category: "jewelry",
    image: jewelry1,
    description: "18K gold-plated Cuban link chain with custom pendant. Handcrafted in Kigali. A statement piece that carries culture.",
    isNew: true,
  },
  {
    id: "3",
    name: "Abstract Tee — Black",
    price: 45,
    category: "merch",
    image: tee1,
    description: "100% organic cotton graphic tee with abstract brushstroke print. Relaxed fit, pre-shrunk. Art meets streetwear.",
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
  },
  {
    id: "4",
    name: "Earth Tone Hoodie",
    price: 90,
    category: "hoodies",
    image: hoodie2,
    description: "Clay-toned heavyweight hoodie. Dropped shoulders, ribbed cuffs. Inspired by Rwandan earth and crafted for the streets.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
  },
  {
    id: "5",
    name: "Geometric Ring — Gold",
    price: 65,
    category: "jewelry",
    image: jewelry2,
    description: "Geometric statement ring in 18K gold plate. Bold, angular design inspired by traditional Rwandan patterns.",
    isNew: false,
  },
  {
    id: "6",
    name: "Stealth Cap — Green",
    price: 35,
    category: "merch",
    image: cap1,
    description: "Structured snapback in deep green. Minimalist branding, premium fabric. Low-key but undeniable.",
    isNew: false,
  },
];
