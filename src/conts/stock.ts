import type { Product } from "@/types/product";

export const STOCK: Product[] = [
    {
        id: "stock-sillon-relax-beni",
        name: "Beni",
        description: "Butaca fija.",
        price: 260.80,
        mainImage: "/images/products/beni.png",
        images: [
            "/images/products/beni.png",
            "/images/products/beni_2.png",
            "/images/products/beni_3.png"
        ],
        category: "Sillón relax",
        specifications: {
            material: "Tela",
            color: "Gris",
            dimensions: "80 x 90 x 100 cm",
            weight: 20,
            warranty: "2 años",
            assemblyRequired: false,
        },
    },
    {
        id: "stock-sofas-night",
        name: "Night",
        description: "Sofá cama, apertura italiana, colchón 140 cms x 190 cms y 14 cms de alto con viscoelástica. Medida total 211 cms.",
        price: 973.10,
        mainImage: "/images/products/night.png",
        images: [
            "/images/products/night.png",
            "/images/products/night_2.png",
            "/images/products/night_3.png",
            "/images/products/night_4.png"
        ],
        category: "Sofás",
        specifications: {
            material: "Tela",
            color: "Gris",
            dimensions: "211 x 90 x 85 cm",
            weight: 50,
            warranty: "2 años",
            assemblyRequired: true,
        },
    },
    {
        id: "stock-sillon-relax-heart",
        name: "Heart",
        description: "Sillón relax eléctrico con pulsador.",
        price: 702.19,
        mainImage: "/images/logo.webp",
        images: [],
        category: "Sillón relax",
        specifications: {
            material: "Tela",
            color: "Beige",
            dimensions: "80 x 90 x 100 cm",
            weight: 20,
            warranty: "2 años",
            assemblyRequired: false,
        },
    }, 
    {
        id: "stock-sofas-luz",
        name: "Luz",
        description: "Sofá 3 plazas fijo. Medida total 185 cms.",
        price: 526.15,
        mainImage: "/images/products/luz.png",
        images: [
            "/images/products/luz.png",
            "/images/products/luz_2.png",
            "/images/products/luz_3.png",
            "/images/products/luz_4.png"
        ],
        category: "Sofás",
        specifications: {
            material: "Tela",
            color: "Beige",
            dimensions: "185 x 90 x 85 cm",
            weight: 50,
            warranty: "2 años",
            assemblyRequired: true,
        },
    },
    {
        id: "stock-sofas-ruth",
        name: "Ruth",
        description: "Sofá 3 plazas fijo. Medida total 197 cms.",
        price: 595.74,
        mainImage: "/images/products/ruth.png",
        images: [
            "/images/products/ruth.png",
            "/images/products/ruth_2.png",
            "/images/products/ruth_3.png",
            "/images/products/ruth_4.png"
        ],
        category: "Sofás",
        specifications: {
            material: "Tela",
            color: "Beige",
            dimensions: "197 x 90 x 85 cm",
            weight: 50,
            warranty: "2 años",
            assemblyRequired: true,
        },
    }, 
    {
        id: "stock-sillon-relax-hot",
        name: "Hot",
        description: "Sillón relax 1 motor eléctrico.",
        price: 478.18,
        mainImage: "/images/products/hot.png",
        images: [
            "/images/products/hot.png",
            "/images/products/hot_2.png",
            "/images/products/hot_3.png",
            "/images/products/hot_4.png"
        ],
        category: "Sillón relax",
        specifications: {
            material: "Tela",
            color: "Beige",
            dimensions: "80 x 90 x 100 cm",
            weight: 20,
            warranty: "2 años",
            assemblyRequired: false,
        },
    }
] as const;